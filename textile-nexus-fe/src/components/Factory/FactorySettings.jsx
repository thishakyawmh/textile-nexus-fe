import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Camera
} from 'lucide-react';
import FactorySidebar from './FactorySidebar';

export default function FactorySettings({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
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

                    <div className="hidden lg:flex items-center bg-neutral-50 dark:bg-neutral-800 rounded-xl px-4 py-2.5 w-96 transition-colors">
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
                        <button className="relative p-2 bg-orange-50 dark:bg-orange-900/20 rounded-xl transition-colors">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm transition-colors">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">General Settings</h1>

                    <div className="bg-white dark:bg-white/5 rounded-3xl p-10 lg:p-16 border border-neutral-100 dark:border-white/10 shadow-sm flex flex-col items-center transition-colors">
                        <div className="flex flex-col items-center gap-4 mb-14">
                            <div className="w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                <Camera size={32} />
                            </div>
                            <button className="text-blue-500 text-sm font-bold hover:underline">Upload Logo</button>
                        </div>

                        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Factory Name</label>
                                <input type="text" defaultValue="Textile Nuxus Factory" className="w-full px-5 py-3.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-200 outline-none focus:border-black dark:focus:border-neutral-500 transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Copy Right</label>
                                <input type="text" defaultValue="All rights Reserved@TextileNuxus" className="w-full px-5 py-3.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-200 outline-none focus:border-black dark:focus:border-neutral-500 transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">SEO Title</label>
                                <input type="text" defaultValue="Factory Efficiency Dashboard" className="w-full px-5 py-3.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-200 outline-none focus:border-black dark:focus:border-neutral-500 transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2 row-span-2">
                                <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">SEO Description</label>
                                <textarea className="w-full h-full min-h-[140px] px-5 py-3.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-200 outline-none focus:border-black dark:focus:border-neutral-500 transition-colors resize-none">
                                    Manage factory operations and efficiency.
                                </textarea>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">SEO Keywords</label>
                                <input type="text" defaultValue="Factory, Admin, Dashboard" className="w-full px-5 py-3.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-200 outline-none focus:border-black dark:focus:border-neutral-500 transition-colors" />
                            </div>

                        </div>

                        <div className="mt-16">
                            <button className="px-16 py-3 bg-[#1A1A1E] dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold shadow-lg shadow-black/20 dark:shadow-none hover:bg-black dark:hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
