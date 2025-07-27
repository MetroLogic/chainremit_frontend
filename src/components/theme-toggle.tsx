


"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration match (important for SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(isDark ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="p-0 relative"
      >
        <Sun
          className={`h-6 w-6 transition-transform duration-300 ${
            isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
        <Moon
          className={`h-6 w-6 absolute transition-transform duration-300 ${
            isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
