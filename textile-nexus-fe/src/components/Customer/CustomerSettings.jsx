import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Camera
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';
import { useTheme } from '../../context/ThemeContext';

export default function CustomerSettings({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Mock initial data
    const [formData, setFormData] = useState({
        fullName: 'Jane Doe',
        email: 'jane.doe@email.com',
        fitStyle: 'Tailored',
        phone: '+94 771 234 567',
        address: '123 Fashion Lane, New York, NY 10001'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <CustomerSidebar
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
                            <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                                <img src="/images/usa.png" alt="US" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                            </div>
                            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">Eng (US)</span>
                            <ChevronDown size={14} className="text-neutral-400" />
                        </div>
                        <button className="relative p-2 bg-orange-50 dark:bg-white/10 rounded-xl transition-colors">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                        </button>
                         <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                <img
                                    src="/images/Customer/Admin/AD.jpg"
                                    alt="Admin avatar"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">General Settings</h1>

                    <div className="max-w-4xl mx-auto border border-neutral-100 dark:border-white/10 rounded-2xl p-8 lg:p-12 shadow-sm bg-white dark:bg-black/5 transition-colors">

                        {/* Photo Upload */}
                        <div className="flex flex-col items-center mb-12">
                            <div className="w-24 h-24 rounded-full bg-[#E5E7EB] dark:bg-neutral-700 flex items-center justify-center mb-3 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors">
                                <Camera size={32} className="text-neutral-600 dark:text-neutral-400" />
                            </div>
                            <span className="text-[#4F80FF] text-xs font-semibold cursor-pointer hover:underline">Upload Photo</span>
                        </div>

                        {/* Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                            <div className="space-y-2">
                                <label className="text-xs text-neutral-500 dark:text-neutral-400">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-[#F3F4F6] dark:bg-neutral-800 rounded-lg p-3 text-sm text-neutral-900 dark:text-white outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-neutral-500 dark:text-neutral-400">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#F3F4F6] dark:bg-neutral-800 rounded-lg p-3 text-sm text-neutral-900 dark:text-white outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-neutral-500 dark:text-neutral-400">Preferred Fit Style</label>
                                <input
                                    type="text"
                                    name="fitStyle"
                                    value={formData.fitStyle}
                                    onChange={handleChange}
                                    className="w-full bg-[#F3F4F6] dark:bg-neutral-800 rounded-lg p-3 text-sm text-neutral-900 dark:text-white outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 transition-colors"
                                />
                            </div>

                            {/* Shipping Address - Spans 2 rows roughly equivalent on the right side if we wanted, but in grid it's cleaner to keep separate or use row-span. 
                                The mockup shows Shipping Address taking more vertical space.
                            */}
                            <div className="space-y-2 md:row-span-2">
                                <label className="text-xs text-neutral-500 dark:text-neutral-400">Shipping Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full bg-[#F3F4F6] dark:bg-neutral-800 rounded-lg p-3 text-sm text-neutral-900 dark:text-white outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 h-[124px] resize-none transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-neutral-500 dark:text-neutral-400">Phone Number(</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#F3F4F6] dark:bg-neutral-800 rounded-lg p-3 text-sm text-neutral-900 dark:text-white outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-[#111827] dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl text-sm font-semibold hover:bg-black dark:hover:bg-neutral-200 transition-colors">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
