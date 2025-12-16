import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    ArrowLeft
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

export default function Customer3DView({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 flex font-sans text-neutral-900 dark:text-white">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <CustomerSidebar
                activePage="qr-scanner"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onNavigate={onNavigate}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white dark:bg-black border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-6 lg:px-10 shrink-0 transition-colors duration-300">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center bg-[#F9FAFB] dark:bg-white/5 rounded-xl px-4 py-2.5 w-96 transition-colors duration-300">
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
                        <button className="relative p-2 bg-orange-50 dark:bg-white/10 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide relative bg-neutral-50 dark:bg-black transition-colors duration-300">

                    <div className="h-full flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-4">

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full h-full max-h-[80vh]">
                            {/* Angle 1 */}
                            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-[2rem] overflow-hidden shadow-lg relative h-full group border border-neutral-100 dark:border-white/10 transition-all duration-300">
                                <img
                                    src=""
                                    alt="img"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    VIEW 1
                                </div>
                            </div>

                            {/* Angle 2 */}
                            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-[2rem] overflow-hidden shadow-lg relative h-full group border border-neutral-100 dark:border-white/10 transition-all duration-300">
                                <img
                                    src=""
                                    alt="img"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    VIEW 2
                                </div>
                            </div>

                            {/* Angle 3 */}
                            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-[2rem] overflow-hidden shadow-lg relative h-full group border border-neutral-100 dark:border-white/10 transition-all duration-300">
                                <img
                                    src=""
                                    alt="img"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    VIEW 3
                                </div>
                            </div>

                            {/* Angle 4 */}
                            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-[2rem] overflow-hidden shadow-lg relative h-full group border border-neutral-100 dark:border-white/10 transition-all duration-300">
                                <img
                                    src=""
                                    alt="img"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    VIEW 4
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
