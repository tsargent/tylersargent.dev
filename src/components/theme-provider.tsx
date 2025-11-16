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
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Stable initial theme for SSR to prevent hydration mismatch; actual preference applied after mount.
  const [theme, setTheme] = useState<Theme>("light");
  const userSetRef = useRef(false);
  const effectCleanupRef = useRef<null | (() => void)>(null);

  // Initialize real theme & attach system listener when no stored preference
  useEffect(() => {
    queueMicrotask(() => {
      const stored = localStorage.getItem("theme") as Theme | null;
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      if (stored) {
        userSetRef.current = true;
        setTheme(stored);
      } else {
        setTheme(media.matches ? "dark" : "light");
        const handler = (e: MediaQueryListEvent) => {
          if (!userSetRef.current) {
            setTheme(e.matches ? "dark" : "light");
          }
        };
        media.addEventListener("change", handler);
        effectCleanupRef.current = () =>
          media.removeEventListener("change", handler);
      }
    });
    return () => {
      if (effectCleanupRef.current) effectCleanupRef.current();
    };
  }, []);

  // Apply theme side-effects
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme; // hint for form controls
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    userSetRef.current = true;
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme]);

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
