import React, { useState } from 'react';
import {
    LayoutDashboard,
    BarChart2,
    ShoppingCart,
    ShoppingBag,
    User,
    MessageSquare,
    Settings,
    LogOut,
    X,
    Users,
    Upload
} from 'lucide-react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ThemeToggle';

const MENU_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'community-hub', label: 'Community Hub', icon: BarChart2 },
    { id: 'order', label: 'Order', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'product-upload', label: 'Upload Design', icon: Upload },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
];

export default function DesignerSidebar({ activePage = 'dashboard', sidebarOpen, setSidebarOpen, onNavigate }) {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoutClick = () => setShowLogoutModal(true);
    const confirmLogout = () => {
        setShowLogoutModal(false);
        onNavigate('logout');
    };

    return (
        <>
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-black border-r border-neutral-100 dark:border-white/10 transform transition-transform duration-300 lg:relative lg:tranneutral-x-0 h-screen flex flex-col justify-between",
                sidebarOpen ? "tranneutral-x-0" : "-tranneutral-x-full"
            )}>
                <div>
                    {/* Logo Area */}
                    <div className="h-20 flex items-center px-6 border-b border-neutral-50 dark:border-white/10 gap-3">
                        <img
                            src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-none">Textile Nexus</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 w-fit mt-1">
                                Designer
                            </span>
                        </div>
                        <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden text-neutral-400">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-1 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                        {MENU_ITEMS.map((item) => {
                            const Icon = item.icon;
                            const isActive = activePage === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        onNavigate(item.id);
                                        setSidebarOpen(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group text-sm font-medium",
                                        isActive
                                            ? "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/25 dark:shadow-none"
                                            : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
                                    )}
                                >
                                    <Icon size={20} className={cn("transition-colors", isActive ? "text-white dark:text-black" : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300")} />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="p-4 border-t border-neutral-50 dark:border-white/10 bg-white dark:bg-black space-y-2">
                    <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Theme</span>
                        <ThemeToggle />
                    </div>
                    <button
                        onClick={handleLogoutClick}
                        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-neutral-500 dark:text-neutral-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 group text-sm font-medium"
                    >
                        <LogOut size={20} className="text-neutral-400 dark:text-neutral-500 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-white/5 rounded-3xl p-8 max-w-sm w-full shadow-2xl scale-100 animate-in zoom-in-95 duration-200 border border-neutral-100 dark:border-white/10">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                            <LogOut size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-center text-neutral-900 dark:text-white mb-2">Sign Out?</h3>
                        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">Are you sure you want to log out of your account?</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-bold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmLogout}
                                className="px-4 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
