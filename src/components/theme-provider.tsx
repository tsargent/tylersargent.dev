"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme | null; // null prior to hydration; avoids flicker
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const userSetRef = useRef(false);
  const cleanupRef = useRef<null | (() => void)>(null);
  // Always start with null to match SSR, then hydrate in useEffect
  const [theme, setTheme] = useState<Theme | null>(null);

  // Hydrate theme from localStorage or system preference after mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        return;
      }
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    } catch {
      setTheme("light"); // fallback
    }
  }, []);

  // Attach system listener only if no stored user preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return; // user already chose
    } catch {
      // ignore
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!userSetRef.current) setTheme(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", handler);
    cleanupRef.current = () => media.removeEventListener("change", handler);
    return () => {
      if (cleanupRef.current) cleanupRef.current();
    };
  }, []);

  // Apply side-effects only once theme is known.
  useEffect(() => {
    if (!theme) return;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    const root = document.documentElement;
    // Ensure class matches state (early script may have already done this, so idempotent)
    if (!root.classList.contains(theme)) {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
    root.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    userSetRef.current = true;
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme: (t: Theme) => {
        userSetRef.current = true;
        setTheme(t);
      },
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
