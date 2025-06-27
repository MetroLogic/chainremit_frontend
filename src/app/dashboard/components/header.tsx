"use client";

import React, { useState } from 'react';
import { Bell, Moon, Sun, Menu, User, PanelLeftClose } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isCollapsed, onToggleCollapse }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 lg:px-6">

      <div className="flex items-center space-x-4">
        <button
          className="lg:hidden text-foreground hover:text-muted-foreground"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <button
          className="hidden lg:block text-foreground hover:text-muted-foreground"
          onClick={onToggleCollapse}
        >
          <PanelLeftClose className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs font-medium text-green-700 dark:text-green-400">
            Connected to StarkNet Mainnet
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-muted-foreground">
          0xabc1...3456
        </div>
        <button className="relative p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
          <User className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;