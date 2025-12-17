import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    MoreVertical
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const MATCHING_ITEMS = [
    {
        id: 1,
        name: 'Classic Teal Straight Trouser',
        category: 'Solid Color / Smart Casual',
        suitable: 'Cotton, Linen, Rayon',
        price: 'Rs. 1,450',
        image: '/images/Customer/Qr code/matching/1.png'
    },
    {
        id: 2,
        name: 'Emerald Flowy Palazzo',
        category: 'Solid Color / Comfort Wear',
        suitable: 'Cotton, Rayon',
        price: 'Rs. 1,600',
        image: '/images/Customer/Qr code/matching/2.png'
    },
    {
        id: 3,
        name: 'Deep Blue Slim-Fit Chinos',
        category: 'Solid Color / Formal Wear',
        suitable: 'Cotton Spandex',
        price: 'Rs. 1,800',
        image: '/images/Customer/Qr code/matching/3.png'
    },
    {
        id: 4,
        name: 'Rust A-Line Midi Skirt',
        category: 'Solid Color / Summer Wear',
        suitable: 'Viscose, Linen',
        price: 'Rs. 1,350',
        image: '/images/Customer/Qr code/matching/4.png'
    },
    {
        id: 5,
        name: 'Beige Tailored Trousers',
        category: 'Solid Color / Office Wear',
        suitable: 'Cotton Blend, Polyester',
        price: 'Rs. 1,750',
        image: '/images/Customer/Qr code/matching/5.png'
    }
];

export default function CustomerMatchingSelection({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
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

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">Matching Selection</h1>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-bold">5 Matches Found</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {MATCHING_ITEMS.map((item) => (
                            <div key={item.id} className="bg-[#F8F9FA] dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-2xl p-4 flex gap-5 relative shadow-sm border border-neutral-100 dark:border-white/10 hover:shadow-md transition-all duration-300">
                                <div className="absolute top-3 right-3 text-neutral-400 cursor-pointer hover:bg-black/5 p-1 rounded-full">
                                    <MoreVertical size={18} />
                                </div>
                                <div className="w-32 h-40 shrink-0 bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-2 flex items-center justify-center border border-neutral-100 dark:border-neutral-700">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col pt-1">
                                    <h3 className="font-bold text-neutral-900 dark:text-white text-sm mb-3 pr-6 leading-tight line-clamp-2">{item.name}</h3>

                                    <div className="space-y-1.5 mb-3">
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 w-16 shrink-0">Category</p>
                                            <p className="text-xs font-bold text-neutral-900 dark:text-neutral-200 truncate">{item.category}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 w-16 shrink-0">Suitable</p>
                                            <p className="text-xs font-bold text-neutral-900 dark:text-neutral-200 truncate">{item.suitable}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-end justify-between">
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">Price</p>
                                            <p className="text-sm font-bold text-neutral-900 dark:text-white">{item.price}</p>
                                        </div>
                                        <button
                                            onClick={() => onNavigate('customer-3d-view')}
                                            className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-6 py-2 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm active:scale-95"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
