import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    CloudUpload,
    Ruler
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const DESIGNS = [
    { id: 1, name: 'Classic Teal Straight Trouser', img: '/images/Customer/Tailor/1.png' },
    { id: 2, name: 'Peplum Blouse', img: '/images/Customer/Tailor/2.png' },
    { id: 3, name: 'Jacket', img: '/images/Customer/Tailor/3.png' },
    { id: 4, name: 'Glacial Overcoat', img: '/images/Customer/Tailor/4.png' },
    { id: 5, name: 'Kurtha', img: '/images/Customer/Tailor/5.png' },
    { id: 6, name: 'Denim Frock', img: '/images/Customer/Tailor/6.png' },
    { id: 7, name: 'Office Trouser', img: '/images/Customer/Tailor/7.png' },
    { id: 8, name: 'Coat', img: '/images/Customer/Tailor/8.png' },
    { id: 9, name: 'Elegant Frock', img: '/images/Customer/Tailor/9.png' },
    { id: 10, name: 'Frock', img: '/images/Customer/Tailor/10.png' },
    { id: 11, name: 'Summer Dress', img: '/images/Customer/Tailor/11.png' },
    { id: 12, name: 'Evening Gown', img: '/images/Customer/Tailor/12.png' },
];

export default function CustomerChooseDesign({ onNavigate }) {
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

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide flex flex-col">

                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">Choose Design</h1>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">See Template</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
                        {DESIGNS.map((design) => (
                            <div
                                key={design.id}
                                onClick={() => onNavigate('customer-order-details')}
                                className="bg-white dark:bg-white/5 rounded-2xl p-4 flex flex-col items-center border border-neutral-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-black dark:hover:border-neutral-600 transition-all cursor-pointer group"
                            >
                                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-neutral-50 dark:bg-neutral-800 group-hover:scale-[1.02] transition-transform">
                                    <img src={design.img} alt={design.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-[10px] font-bold text-center text-neutral-900 dark:text-white leading-tight">{design.name}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto space-y-4">
                        <button
                            onClick={() => onNavigate('customer-upload-design')}
                            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md"
                        >
                            <CloudUpload size={20} /> Upload Your Design
                        </button>
                        <button
                            onClick={() => onNavigate('customer-upload-measurement')}
                            className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors shadow-md"
                        >
                            <Ruler size={20} /> Upload Your Measurement
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}
