import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

export default function ThemeToggle({ className }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-xl transition-all duration-300 relative overflow-hidden group border",
                theme === 'dark'
                    ? "bg-neutral-800 text-yellow-400 border-neutral-700 hover:bg-neutral-700"
                    : "bg-white text-neutral-400 border-neutral-200 hover:text-yellow-500 hover:border-yellow-200 shadow-sm",
                className
            )}
            aria-label="Toggle Theme"
        >
            <div className="relative z-10">
                {theme === 'dark' ? <Moon size={20} className="fill-current" /> : <Sun size={20} className="fill-current" />}
            </div>

            {/* Glow effect */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
                theme === 'dark' ? "bg-yellow-400" : "bg-yellow-200"
            )} />
        </button>
    );
}
