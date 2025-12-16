import React from 'react';
import {
    LayoutDashboard,
    BarChart3,
    ShoppingCart,
    ShoppingBag,
    Ruler,
    MessageSquare,
    Settings,
    LogOut,
    X,
    Scissors,
    User
} from 'lucide-react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ThemeToggle';

const MENU_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'community-hub', label: 'Community Hub', icon: <BarChart3 size={20} /> },
    { id: 'order', label: 'Order', icon: <ShoppingCart size={20} /> },
    { id: 'fabric-market', label: 'Fabric Market', icon: <ShoppingBag size={20} /> },
    { id: 'ai-measurements', label: 'AI Measurements', icon: <Ruler size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
];

export default function TailorSidebar({ activePage, sidebarOpen, setSidebarOpen, onNavigate }) {
    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-black border-r border-neutral-100 dark:border-white/10 transition-transform duration-300 ease-in-out lg:relative lg:tranneutral-x-0 flex flex-col font-sans",
            sidebarOpen ? 'tranneutral-x-0' : '-tranneutral-x-full'
        )}>
            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b border-neutral-50 dark:border-white/10 gap-3">
                <img
                    src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain"
                />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-none">Textile Nexus</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 w-fit mt-1">
                        Tailor
                    </span>
                </div>
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="ml-auto lg:hidden text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Nav Menu */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
                {MENU_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={cn(
                            "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group text-sm font-medium",
                            activePage === item.id
                                ? "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-none"
                                : "text-neutral-500 dark:text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
                        )}
                    >
                        <div className={cn(
                            "transition-transform",
                            activePage === item.id ? "scale-110" : "group-hover:scale-110"
                        )}>
                            {item.icon}
                        </div>
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-neutral-50 dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Theme</span>
                    <ThemeToggle />
                </div>
                <button
                    onClick={() => onNavigate('logout')}
                    className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-neutral-500 dark:text-neutral-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 hover:text-rose-600 dark:hover:text-rose-400 transition-colors text-sm font-medium"
                >
                    <LogOut size={20} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
