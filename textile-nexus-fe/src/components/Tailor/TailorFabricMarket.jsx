import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Heart,
    ShoppingBag
} from 'lucide-react';
import TailorSidebar from './TailorSidebar';

const RECOMMENDED_FABRICS = [
    { id: 1, name: 'Besgris Blossom Print', desc: 'Used frequently for blouses.', image: '/images/Customer/Tailor/Besgris Blossom Print.jpeg' },
    { id: 2, name: 'Metric Woven Fabric', desc: 'Recommended for summer shirts.', image: '/images/Customer/Tailor/Metric Woven Fabric.jpeg' },
    { id: 3, name: 'Classic Linen Shirt', desc: 'High customer rating.', image: '/images/Customer/Tailor/Classic Linen Shirt.jpeg' },
    { id: 4, name: 'Silk Blue Mixed', desc: 'Supplier: Global Silks.', image: '/images/Customer/Tailor/Silk Blue Mixed.jpeg' },
    { id: 5, name: 'Silk Eku Silk', desc: 'Trending for bridal wear.', image: '/images/Customer/Tailor/Silk Eku Silk.jpeg' },
];

const AI_MATCHING = [
    { id: 1, name: 'Imyaged Blossom Print', desc: 'Needed for casual blouses.', image: '/images/Customer/Tailor/Imyaged Blossom Print.jpeg' },
    { id: 2, name: 'Silk Hittin Crepes', desc: 'Matches Saree Jacket Order.', image: '/images/Customer/Tailor/Silk Hittin Crepes.jpeg' },
    { id: 3, name: 'Denim', desc: 'Supplier: TexStuffs', image: '/images/Customer/Tailor/Denim.jpeg' },
    { id: 4, name: 'Denotes fabric', desc: 'Global Fabrics.', image: '/images/Customer/Tailor/Denotes fabric.jpeg' },
    { id: 5, name: 'Upcycled Silk Neck Tie', desc: 'Limited stock.', image: '/images/Customer/Tailor/Upcycled Silk Neck Tie.jpeg' },
];

const CATEGORIES = [
    { name: 'Cotton', icon: '🧵' },
    { name: 'Linen', icon: '🌿' },
    { name: 'Jersey', icon: '👕' },
    { name: 'Jersey', icon: '🧶' },
];

const COLORS = [
    '#FECACA', '#FCA5A5', '#F87171', '#EF4444', '#DC2626',
    '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706',
    '#A7F3D0', '#6EE7B7', '#34D399', '#10B981', '#059669',
    '#BFDBFE', '#93C5FD', '#60A5FA', '#3B82F6', '#2563EB',
    '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1', '#4F46E5',
    '#E9D5FF', '#D8B4FE', '#C084FC', '#A855F7', '#9333EA',
    '#F5F5F4', '#E7E5E4', '#D6D3D1', '#A8A29E', '#78716C', '#44403C'
];

export default function TailorFabricMarket({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [priceRange, setPriceRange] = useState(50);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <TailorSidebar
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

                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Fabric Stock</h1>
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Search product name"
                                className="pl-9 pr-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 text-xs w-64 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        {/* Left Column */}
                        <div className="col-span-12 xl:col-span-9 space-y-10">

                            {/* Recommended */}
                            <section>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Recommended for You</h2>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">(AI based on order history)</span>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                    {RECOMMENDED_FABRICS.map((item) => (
                                        <div key={item.id} className="bg-white dark:bg-white/5 p-3 rounded-2xl border border-neutral-200 dark:border-white/10 hover:shadow-lg transition-all">
                                            <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-3 overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <h3 className="font-bold text-xs text-neutral-900 dark:text-white mb-1 truncate">{item.name}</h3>
                                            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-3 h-8 leading-tight">{item.desc}</p>
                                            <button className="w-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                                Order Now
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Categories & Banner */}
                            <section className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Categories</h2>
                                    <div className="flex gap-4">
                                        {CATEGORIES.map((cat, i) => (
                                            <div key={i} className="flex flex-col items-center justify-center w-24 h-24 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 cursor-pointer transition-colors">
                                                <div className="text-2xl mb-2">{cat.icon}</div>
                                                <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300">{cat.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Promo Banner Area */}
                                <div className="flex-[1.5] bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl flex items-center justify-between px-6 py-2 transition-colors">
                                    <button className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-6 py-2.5 rounded-full shadow-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                        Order Now
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"><Heart size={20} /></button>
                                        <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"><ShoppingBag size={20} /></button>
                                    </div>
                                </div>
                            </section>

                            {/* AI Fabric Matching */}
                            <section>
                                <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">AI Fabric Matching</h2>
                                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                    {AI_MATCHING.map((item) => (
                                        <div key={item.id} className="bg-white dark:bg-white/5 p-3 rounded-2xl border border-neutral-200 dark:border-white/10 hover:shadow-lg transition-all">
                                            <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-3 overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <h3 className="font-bold text-xs text-neutral-900 dark:text-white mb-1 truncate">{item.name}</h3>
                                            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-3 h-8 leading-tight">{item.desc}</p>
                                            <button className="w-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                                Order Now
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Right Column: Filters */}
                        <div className="col-span-12 xl:col-span-3 space-y-8">

                            {/* Fabric Colours */}
                            <div className="bg-neutral-50 dark:bg-white/5 p-6 rounded-3xl transition-colors">
                                <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-4">Fabric Colours</h3>
                                <div className="grid grid-cols-6 gap-2">
                                    {COLORS.map((color, i) => (
                                        <button
                                            key={i}
                                            className="w-8 h-8 rounded-full border border-white dark:border-white/10 shadow-sm hover:scale-110 transition-transform"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="bg-neutral-50 dark:bg-white/5 p-6 rounded-3xl transition-colors">
                                <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-4">Price Range</h3>
                                <div className="px-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full h-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-neutral-500 dark:text-neutral-400 mt-2">
                                        <span>Min. Rs.</span>
                                        <span>Max. Rs.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
