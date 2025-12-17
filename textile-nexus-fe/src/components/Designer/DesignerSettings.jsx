import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Camera
} from 'lucide-react';
import DesignerSidebar from './DesignerSidebar';

export default function DesignerSettings({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
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
                            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">Eng (US)</span>
                            <ChevronDown size={14} className="text-neutral-400" />
                        </div>
                        <button className="relative p-2 bg-orange-50 dark:bg-orange-500/10 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
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

                <div className="flex-1 overflow-y-auto p-6 lg:px-10 lg:py-8 scrollbar-hide">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">General Settings</h1>

                    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-neutral-100 dark:border-white/10 rounded-3xl p-10 max-w-5xl mx-auto shadow-sm min-h-[600px] flex flex-col justify-center transition-colors">

                        {/* Logo Upload */}
                        <div className="flex flex-col items-center justify-center mb-12">
                            <div className="w-24 h-24 bg-[#E2E8F0] dark:bg-neutral-700 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 mb-3 relative cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                                <Camera size={32} />
                            </div>
                            <span className="text-blue-500 text-xs font-bold cursor-pointer hover:underline">Upload Logo</span>
                        </div>

                        {/* Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                            <div>
                                <label className="block text-xs text-neutral-600 dark:text-neutral-400 mb-2">Site Name</label>
                                <div className="bg-[#F8FAFC] dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-100 dark:border-neutral-700">
                                    <input
                                        type="text"
                                        defaultValue="Bright Web"
                                        className="bg-transparent w-full text-xs font-bold text-neutral-900 dark:text-white outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-neutral-600 dark:text-neutral-400 mb-2">Copy Right</label>
                                <div className="bg-[#F8FAFC] dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-100 dark:border-neutral-700">
                                    <input
                                        type="text"
                                        defaultValue="All rights Reserved@brightweb"
                                        className="bg-transparent w-full text-xs font-bold text-neutral-900 dark:text-white outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-neutral-600 dark:text-neutral-400 mb-2">SEO Title</label>
                                <div className="bg-[#F8FAFC] dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-100 dark:border-neutral-700">
                                    <input
                                        type="text"
                                        defaultValue="Bright web is a hybrid dashboard"
                                        className="bg-transparent w-full text-xs font-bold text-neutral-900 dark:text-white outline-none"
                                    />
                                </div>
                            </div>
                            <div className="row-span-2">
                                <label className="block text-xs text-neutral-600 dark:text-neutral-400 mb-2">SEO Description</label>
                                <div className="bg-[#F8FAFC] dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-100 dark:border-neutral-700 h-[120px]">
                                    <textarea
                                        defaultValue="Bright web is a hybrid dashboard"
                                        className="bg-transparent w-full h-full text-xs font-bold text-neutral-900 dark:text-white outline-none resize-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-neutral-600 dark:text-neutral-400 mb-2">SEO Keywords</label>
                                <div className="bg-[#F8FAFC] dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-100 dark:border-neutral-700">
                                    <input
                                        type="text"
                                        defaultValue="CEO"
                                        className="bg-transparent w-full text-xs font-bold text-neutral-900 dark:text-white outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-center">
                            <button className="bg-[#1C1C1C] dark:bg-white text-white dark:text-black px-12 py-3 rounded-lg font-bold text-sm hover:bg-black dark:hover:bg-neutral-200 transition-colors shadow-lg">
                                Save
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
