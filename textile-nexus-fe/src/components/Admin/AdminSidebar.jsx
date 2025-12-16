import React, { useState } from 'react';
import {
    LayoutDashboard,
    BarChart3,
    Users,
    CreditCard,
    Settings,
    LogOut,
    AlertCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ThemeToggle';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <div
        onClick={onClick}
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group text-sm font-medium",
            active
                ? "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/20 dark:shadow-none"
                : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
        )}
    >
        <Icon size={20} className={cn(active ? "text-white dark:text-black" : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300")} />
        <span>{label}</span>
    </div>
);

export default function AdminSidebar({ activePage, onNavigate, sidebarOpen, setSidebarOpen }) {
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'leaderboard', label: 'Leaderboard', icon: BarChart3 },
        { id: 'user-controls', label: 'User Controller', icon: Users },
        { id: 'sales-report', label: 'Sales Report', icon: CreditCard },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const handleNavigation = (id) => {
        onNavigate && onNavigate(id);
        if (window.innerWidth < 1024) { // Close sidebar on mobile after navigation
            setSidebarOpen(false);
        }
    };

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true);
    };

    const confirmLogout = () => {
        setShowLogoutConfirm(false);
        onNavigate && onNavigate('logout');
    };

    return (
        <>
            <aside className={cn(
                "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-black border-r border-neutral-200 dark:border-white/10 transform transition-transform duration-300 ease-in-out lg:tranneutral-x-0 overflow-y-auto flex flex-col justify-between h-screen",
                sidebarOpen ? "tranneutral-x-0" : "-tranneutral-x-full"
            )}>
                <div>
                    <div className="p-6 flex items-center gap-3 mb-6">
                        <img
                            src="/images/logo.png" alt="Logo" className="w-10 h-10 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white leading-none">Textile Nexus</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 w-fit mt-1">
                                Admin
                            </span>
                        </div>
                    </div>

                    <div className="px-4 space-y-2">
                        {menuItems.map((item) => (
                            <SidebarItem
                                key={item.id}
                                icon={item.icon}
                                label={item.label}
                                active={activePage === item.id}
                                onClick={() => handleNavigation(item.id)}
                            />
                        ))}
                    </div>
                </div>

                <div className="p-4 mb-4 space-y-2">
                    <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Theme</span>
                        <ThemeToggle />
                    </div>
                    <SidebarItem icon={LogOut} label="Sign Out" onClick={handleLogoutClick} />
                </div>
            </aside>

            {/* Logout Confirmation Modal */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-white/5 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl scale-100 animate-in zoom-in-95 duration-200 border border-neutral-200 dark:border-white/10">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
                                <LogOut size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Sign Out</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 mb-8">Are you sure you want to sign out of your account?</p>

                            <div className="flex gap-4 w-full">
                                <button
                                    onClick={() => setShowLogoutConfirm(false)}
                                    className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 font-bold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmLogout}
                                    className="flex-1 px-4 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-neutral-900 dark:hover:bg-neutral-200 shadow-lg shadow-black/20 dark:shadow-none transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
