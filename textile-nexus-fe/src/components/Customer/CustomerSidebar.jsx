import React from 'react';
import {
    LayoutDashboard,
    MessageSquare,
    Settings,
    LogOut,
    Search,
    QrCode,
    ShoppingCart,
    LayoutGrid,
    BarChart2,
    Scissors,
    X
} from 'lucide-react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ThemeToggle';

export default function CustomerSidebar({ activePage, sidebarOpen, setSidebarOpen, onNavigate }) {

    const menuItems = [
        { id: 'designer-explore', label: 'Designer explore', icon: <LayoutGrid size={20} /> },
        { id: 'qr-scanner', label: 'QR code scanner', icon: <QrCode size={20} /> },
        { id: 'my-tailor', label: 'My tailor', icon: <ShoppingCart size={20} /> },
        { id: 'community-hub', label: 'Community Hub', icon: <BarChart2 size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ];

    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-black border-r border-neutral-200 dark:border-white/10 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col justify-between py-6 pl-4 pr-4",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <div>
                {/* Logo */}
                <div className="flex items-center gap-3 mb-12 px-2">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                    >
                        <X size={20} />
                    </button>
                    <img src="/images/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-neutral-900 dark:text-white leading-none">Textile Nexus</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 w-fit mt-1">
                            Customer
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                onNavigate(item.id);
                                setSidebarOpen(false);
                            }}
                            className={cn(
                                "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group",
                                activePage === item.id
                                    ? "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/20 dark:shadow-none"
                                    : "text-neutral-400 dark:text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-600 dark:hover:text-neutral-200"
                            )}
                        >
                            <span className={cn(
                                "transition-colors",
                                activePage === item.id ? "text-white dark:text-black" : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-200"
                            )}>
                                {item.id === 'community-hub' ? (
                                    <BarChart2 size={20} />
                                ) : item.id === 'designer-explore' ? (
                                    <LayoutGrid size={20} />
                                ) : (
                                    item.icon
                                )}
                            </span>
                            <span className="font-medium text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pb-4">
                <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Theme</span>
                    <ThemeToggle />
                </div>
                <button
                    onClick={() => onNavigate('logout')}
                    className="flex items-center gap-4 px-4 py-3.5 w-full text-neutral-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
                >
                    <LogOut size={20} />
                    <span className="font-medium text-sm">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
