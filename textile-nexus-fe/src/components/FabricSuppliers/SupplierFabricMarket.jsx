import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Edit,
    Trash2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import SupplierSidebar from './SupplierSidebar';

// --- Mock Data ---

const FABRIC_STOCK_DATA = [
    {
        id: '1',
        name: 'Cotton Plain',
        category: 'Cotton',
        price: 250,
        piece: 180,
        colors: ['#000000', '#94a3b8', '#f87171'], // Black, Grey, Soft Red
        image: '/images/Customer/FabricMarket/Cotton Plain White.jpeg'
    },
    {
        id: '2',
        name: 'Premium Denim',
        category: 'Denim',
        price: 750,
        piece: 95,
        colors: ['#000000', '#f87171', '#3b82f6', '#eab308'], // Black, Red, Blue, Yellow
        image: '/images/Customer/FabricMarket/Premium Denim.png'
    },
    {
        id: '3',
        name: 'Pure Silk',
        category: 'Silk',
        price: '1,200',
        piece: 60,
        colors: ['#9d174d', '#60a5fa', '#1e1b4b', '#4f46e5'], // Maroon, Light Blue, Dark Blue, Indigo
        image: '/images/Customer/FabricMarket/Pure Silk.jpg'
    },
    {
        id: '4',
        name: 'Linen Soft',
        category: 'Linen',
        price: 680,
        piece: 140,
        colors: ['#1e3a8a', '#000000', '#9f1239'], // Navy, Black, Dark Red
        image: '/images/Customer/FabricMarket/Linen Soft.jpeg'
    },
    {
        id: '5',
        name: 'Satin Shiny',
        category: 'Satin',
        price: 850,
        piece: 110,
        colors: ['#1e3a8a', '#000000', '#9f1239'],
        image: '/images/Customer/FabricMarket/satin shiny.webp'
    },
    {
        id: '6',
        name: 'Velvet Thick',
        category: 'Velvet',
        price: '1,050',
        piece: 70,
        colors: ['#000000', '#f87171', '#3b82f6', '#eab308'],
        image: '/images/Customer/FabricMarket/Velvet Black Thick.jpg'
    },
    {
        id: '7',
        name: 'Rayon Floral Print',
        category: 'Rayon',
        price: 520,
        piece: 200,
        colors: ['#9d174d', '#60a5fa', '#1e1b4b', '#4f46e5'],
        image: '/images/Customer/FabricMarket/Rayon Floral Print.jpg'
    },
];

// Reusable Search Header Component tailored for these pages if needed, 
// but sticking to repetition for now to allow minor variations per page comfortably.

export default function SupplierFabricMarket({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <SupplierSidebar
                activePage="products" // Mapped 'products' in sidebar to this page
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

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Fabric Stock</h1>
                        <div className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-2.5 flex items-center w-full md:w-64 shadow-sm transition-colors">
                            <Search size={16} className="text-neutral-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search product name"
                                className="bg-transparent border-none outline-none text-xs w-full text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400"
                            />
                        </div>
                    </div>

                    {/* Stock Table */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 overflow-hidden transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white dark:bg-white/5 text-neutral-800 dark:text-white text-xs font-bold border-b border-neutral-100 dark:border-white/10 transition-colors">
                                        <th className="px-8 py-5 text-center w-32">Image</th>
                                        <th className="px-8 py-5">Product Name</th>
                                        <th className="px-8 py-5">Category</th>
                                        <th className="px-8 py-5">Price (LKR)</th>
                                        <th className="px-8 py-5">Piece</th>
                                        <th className="px-8 py-5">Available Color</th>
                                        <th className="px-8 py-5 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium text-neutral-600 dark:text-neutral-400 align-middle">
                                    {FABRIC_STOCK_DATA.map((item, index) => (
                                        <tr key={item.id} className="border-b border-neutral-50 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                            <td className="px-8 py-4">
                                                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                                            e.currentTarget.parentElement.innerHTML = '<span class="text-[10px] text-neutral-400">No Img</span>';
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-8 py-4 text-neutral-900 dark:text-white">{item.name}</td>
                                            <td className="px-8 py-4">{item.category}</td>
                                            <td className="px-8 py-4 font-semibold text-neutral-900 dark:text-white">{item.price}</td>
                                            <td className="px-8 py-4">{item.piece}</td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-2">
                                                    {item.colors.map((color, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-4 h-4 rounded-full border border-neutral-200 dark:border-neutral-600 shadow-sm"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-white transition-colors">
                                                        <Edit size={16} />
                                                    </button>
                                                    <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-200 transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="flex items-center justify-between px-8 py-6 border-t border-neutral-100 dark:border-white/10 transition-colors">
                            <p className="text-xs text-neutral-400 dark:text-neutral-500">Showing 1-09 of 78</p>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                    <ChevronLeft size={14} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
