import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Plus,
    Minus,
    Edit,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Search as SearchIcon
} from 'lucide-react';
import FactorySidebar from './FactorySidebar';

const FABRIC_STOCK_DATA = [
    {
        id: '1',
        name: 'Cotton Plain',
        category: 'Cotton',
        price: 250,
        piece: 180,
        colors: ['#000000', '#94a3b8', '#f87171'],
    },
    {
        id: '2',
        name: 'Premium Denim',
        category: 'Denim',
        price: 750,
        piece: 95,
        colors: ['#000000', '#f87171', '#3b82f6', '#eab308']
    },
    {
        id: '3',
        name: 'Pure Silk',
        category: 'Silk',
        price: '1,200',
        piece: 60,
        colors: ['#9d174d', '#60a5fa', '#1e1b4b', '#4f46e5']
    },
    {
        id: '4',
        name: 'Linen Soft',
        category: 'Linen',
        price: 680,
        piece: 140,
        colors: ['#1e3a8a', '#000000', '#9f1239']
    },
    {
        id: '5',
        name: 'Satin Shiny',
        category: 'Satin',
        price: 850,
        piece: 110,
        colors: ['#1e3a8a', '#000000', '#9f1239']
    },
    {
        id: '6',
        name: 'Velvet Thick',
        category: 'Velvet',
        price: '1,050',
        piece: 70,
        colors: ['#000000', '#f87171', '#3b82f6', '#eab308']
    },
    {
        id: '7',
        name: 'Rayon Floral Print',
        category: 'Rayon',
        price: 520,
        piece: 200,
        colors: ['#9d174d', '#60a5fa', '#1e1b4b', '#4f46e5']
    },
];

export default function FactoryFabricStock({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
                activePage="fabric-market"
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

                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Fabric Stock</h1>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                                    <Plus size={16} />
                                </button>
                                <button className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                                    <Minus size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-2.5 w-64 shadow-sm transition-colors">
                            <SearchIcon size={18} className="text-neutral-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search product name"
                                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-neutral-400 text-neutral-700 dark:text-neutral-200"
                            />
                        </div>
                    </div>

                    {/* Stock Table */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 overflow-hidden transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white dark:bg-white/5 border-b border-neutral-100 dark:border-white/10 text-xs font-bold text-neutral-800 dark:text-neutral-200 transition-colors">
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
                                                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden shadow-inner transition-colors">
                                                    {/* Placeholder logic for fabric texture */}
                                                    <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center transition-colors">
                                                        <div className="w-full h-full opacity-50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4 text-neutral-900 dark:text-white font-medium">{item.name}</td>
                                            <td className="px-8 py-4">{item.category}</td>
                                            <td className="px-8 py-4 font-semibold text-neutral-900 dark:text-white">{item.price}</td>
                                            <td className="px-8 py-4">{item.piece}</td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-2">
                                                    {item.colors.map((color, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-4 h-4 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors shadow-sm">
                                                        <Edit size={16} />
                                                    </button>
                                                    <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-200 transition-colors shadow-sm">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer (Reused) */}
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
