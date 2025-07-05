"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(isDark ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="ghost" size="icon" onClick={toggleTheme} className="p-0">
        <Sun
          className={`h-10 w-10 transition-transform ${
            isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
        <Moon
          className={`h-10 w-10 absolute transition-transform ${
            isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Theme options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className={`${
              theme === "light" ? "bg-muted/50" : ""
            } flex items-center gap-2`}
          >
            <Sun className="h-5 w-5" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className={`${
              theme === "dark" ? "bg-muted/50" : ""
            } flex items-center gap-2`}
          >
            <Moon className="h-5 w-5" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className={`${
              theme === "system" ? "bg-muted/50" : ""
            } flex items-center gap-2`}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
              <path d="M12 12a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
            </svg>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
