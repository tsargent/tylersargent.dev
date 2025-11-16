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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });
  const userSetRef = useRef(false);

  // Initialize theme & attach system listener when no stored preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) userSetRef.current = true;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    if (!stored) {
      const handler = (e: MediaQueryListEvent) => {
        if (!userSetRef.current) {
          setTheme(e.matches ? "dark" : "light");
        }
      };
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
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
