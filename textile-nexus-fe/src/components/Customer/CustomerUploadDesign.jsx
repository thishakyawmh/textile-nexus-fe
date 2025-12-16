import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Plus
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const DESIGNS = [
    { id: 1, name: 'Classic Teal Straight Trouser', img: 'https://placehold.co/300x400/0e4c55/ffffff?text=Teal+Trousers' },
    { id: 2, name: 'Peplum Blouse', img: 'https://placehold.co/300x400/50c878/ffffff?text=Peplum+Blouse' },
    { id: 3, name: 'Jacket', img: 'https://placehold.co/300x400/7f1d1d/ffffff?text=Leather+Jacket' },
    { id: 4, name: 'Frock', img: 'https://placehold.co/300x400/27272a/ffffff?text=Print+Frock' },
];

export default function CustomerUploadDesign({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-black flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <CustomerSidebar
                activePage="my-tailor"
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
                        <button className="relative p-2 bg-orange-50 dark:bg-white/10 rounded-xl transition-colors">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm transition-colors">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-hidden flex">
                    {/* Left: Design Grid (Truncated for layout) */}
                    <div className="flex-1 p-6 lg:p-10 overflow-y-auto scrollbar-hide">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">Choose Design</h1>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">See Template</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {DESIGNS.map((design) => (
                                <div key={design.id} className="bg-[#EEEEEE] dark:bg-neutral-800 rounded-2xl p-4 flex flex-col items-center opacity-50 dark:opacity-60">
                                    <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-white dark:bg-neutral-700">
                                        <img src={design.img} alt={design.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-[10px] font-bold text-center text-neutral-900 dark:text-white leading-tight">{design.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Upload */}
                    <div className="w-96 bg-white dark:bg-white/5 border-l border-neutral-100 dark:border-white/10 p-8 flex flex-col shadow-xl z-10 animate-in slide-in-from-right transition-colors pointer-events-auto">
                        <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-8 self-center">Upload Your Design</h2>

                        <div className="bg-[#D9D9D9] dark:bg-neutral-800 rounded-2xl border-2 border-dashed border-neutral-400 dark:border-neutral-600 h-64 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors mb-auto">
                            <div className="w-10 h-10 border border-neutral-600 dark:border-neutral-400 rounded flex items-center justify-center mb-2">
                                <Plus size={20} className="text-neutral-600 dark:text-neutral-400" />
                            </div>
                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Choose From Gallery</span>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={() => onNavigate('customer-choose-design')}
                                className="flex-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => onNavigate('customer-order-details')}
                                className="flex-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
