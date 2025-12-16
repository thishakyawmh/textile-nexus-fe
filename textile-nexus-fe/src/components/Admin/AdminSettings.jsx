import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Camera,
    Eye,
    EyeOff,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import AdminSidebar from './AdminSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const DEVICES = [
    { type: 'Windows', location: 'Sri Lanka', time: '3 days ago', browser: 'Microsoft Edge', status: 'Inactive' },
    { type: 'Mac OS', location: 'USA', time: 'Current Session', browser: 'Chrome', status: 'Active' },
];

export default function AdminSettings({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [name, setName] = useState('Bright Web');
    const [email, setEmail] = useState('Brightweb@gmail.com');
    const [phone, setPhone] = useState('+94 71256893');

    // Password Visibility States
    const [showCurrentPw, setShowCurrentPw] = useState(false);
    const [showNewPw, setShowNewPw] = useState(false);
    const [showConfirmPw, setShowConfirmPw] = useState(false);

    // Other settings states
    const [timeZone, setTimeZone] = useState('Sri Lanka (GMT+5:30)');
    const [language, setLanguage] = useState('English (US)');
    const [currency, setCurrency] = useState('LKR');
    const [selectedTheme, setSelectedTheme] = useState('Light');

    return (
        <div className="min-h-screen bg-[#F8F9FE] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <AdminSidebar
                activePage="settings"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onNavigate={onNavigate}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white dark:bg-white/5 dark:backdrop-blur-xl border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-6 lg:px-10 shrink-0 transition-colors">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-neutral-500">
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center bg-[#F9FAFB] dark:bg-neutral-800 rounded-xl px-4 py-2.5 w-96 transition-colors">
                        <Search size={18} className="text-neutral-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-neutral-400 text-neutral-700 dark:text-neutral-200"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 cursor-pointer">
                            <div className="w-5 h-5 rounded-full bg-neutral-200 overflow-hidden">
                                <img src="/images/usa.png" alt="US" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                            </div>
                            <span className="text-sm font-semibold text-neutral-600">Eng (US)</span>
                            <ChevronDown size={14} className="text-neutral-400" />
                        </div>
                        <button className="relative p-2 bg-orange-50 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                AD
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-neutral-800 leading-tight">Admin User</p>
                                <p className="text-xs text-neutral-400">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide pb-20">

                    {/* General Settings */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">General Settings</h2>

                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                            <div className="flex flex-col xl:flex-row gap-10">

                                {/* Photo Upload */}
                                <div className="flex flex-col items-center gap-3 shrink-0 pt-2">
                                    <div className="w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                        <Camera size={28} />
                                    </div>
                                    <button className="text-blue-500 text-sm font-bold hover:underline">
                                        Upload Photo
                                    </button>
                                </div>

                                {/* Form Fields */}
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Phone</label>
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Time Zone</label>
                                        <div className="relative">
                                            <select
                                                value={timeZone}
                                                onChange={(e) => setTimeZone(e.target.value)}
                                                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none appearance-none cursor-pointer focus:border-black dark:focus:border-white transition-colors"
                                            >
                                                <option>Sri Lanka (GMT+5:30)</option>
                                                <option>London (GMT+0:00)</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Default Language</label>
                                        <div className="relative">
                                            <select
                                                value={language}
                                                onChange={(e) => setLanguage(e.target.value)}
                                                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none appearance-none cursor-pointer focus:border-black dark:focus:border-white transition-colors"
                                            >
                                                <option>English (US)</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Currency Format</label>
                                        <div className="relative">
                                            <select
                                                value={currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none appearance-none cursor-pointer focus:border-black dark:focus:border-white transition-colors"
                                            >
                                                <option>LKR</option>
                                                <option>USD</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Theme</label>
                                        <div className="relative">
                                            <select
                                                value={selectedTheme}
                                                onChange={(e) => setSelectedTheme(e.target.value)}
                                                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none appearance-none cursor-pointer focus:border-black dark:focus:border-white transition-colors"
                                            >
                                                <option>Light</option>
                                                <option>Dark</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Settings */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Security Settings</h2>

                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 border border-neutral-100 dark:border-white/10 shadow-sm relative transition-all duration-300">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-end">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Current Password</label>
                                    <div className="relative">
                                        <input
                                            type={showCurrentPw ? "text" : "password"}
                                            value="password12345" // For demo purposes, keep static or use a state if changing
                                            readOnly
                                            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                                        />
                                        <button type="button" onClick={() => setShowCurrentPw(!showCurrentPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                            {showCurrentPw ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showNewPw ? "text" : "password"}
                                            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                                        />
                                        <button type="button" onClick={() => setShowNewPw(!showNewPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                            {showNewPw ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Re-enter new password</label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPw ? "text" : "password"}
                                            className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                                        />
                                        <button type="button" onClick={() => setShowConfirmPw(!showConfirmPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                            {showConfirmPw ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 flex justify-end -mt-4">
                                    <button className="px-6 py-2.5 bg-black text-white rounded-xl text-sm font-bold shadow-lg shadow-black/20 hover:bg-neutral-900 transition-colors">
                                        Update
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-neutral-500">Two-factor authentication (2FA)</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none appearance-none cursor-pointer focus:border-black dark:focus:border-white transition-colors">
                                            <option>Enabled</option>
                                            <option>Disabled</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-neutral-500">Session timeout</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none appearance-none cursor-pointer focus:border-black dark:focus:border-white transition-colors">
                                            <option>30 mins</option>
                                            <option>1 hour</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Allowed login attempts</label>
                                    <input type="number" defaultValue="3" className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl text-sm font-medium text-neutral-700 dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors" />
                                </div>
                            </div>

                            <div className="border-t border-neutral-100 pt-8">
                                <p className="text-neutral-600 font-medium mb-6">You're signed in on these devices</p>

                                <div className="space-y-4">
                                    {DEVICES.map((device, index) => (
                                        <div key={index} className="flex gap-4 items-center justify-between text-sm py-2">
                                            <div className="w-24 font-bold text-neutral-700">{device.type}</div>
                                            <div className="w-32 text-neutral-700">{device.location}</div>
                                            <div className="w-32 text-neutral-700">{device.time}</div>
                                            <div className="flex-1 text-neutral-700">{device.browser}</div>

                                            <div className="flex items-center gap-6">
                                                {device.status === 'Active' ? (
                                                    <span className="text-emerald-500 font-bold">Active</span>
                                                ) : (
                                                    <span className="text-yellow-500 font-bold">Inactive</span>
                                                )}
                                                <button className="px-5 py-2 bg-black text-white rounded-lg text-xs font-bold shadow-lg shadow-black/20 hover:bg-neutral-900 transition-colors">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center mt-12 mb-8">
                        <button className="px-12 py-3 bg-black text-white rounded-xl text-base font-bold shadow-xl shadow-black/20 hover:bg-neutral-900 transition-all hover:scale-105 active:scale-95">
                            Save
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}
