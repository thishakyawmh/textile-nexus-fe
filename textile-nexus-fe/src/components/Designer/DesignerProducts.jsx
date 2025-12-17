import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter,
    RefreshCw,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Upload,
    Edit2,
    Trash2,
    X,
    Package,
    Clock,
    FileText
} from 'lucide-react';
import { cn } from '../../lib/utils';
import DesignerSidebar from './DesignerSidebar';

// --- Mock Data ---

const PRODUCTS = [
    {
        id: 1,
        name: "Minimal Dusty Blue",
        category: "Minimal / Abstract",
        materials: "Canvas, Linen, Blend Fabrics",
        price: "Rs. 1,300",
        image: "/images/Customer/design explore/Minimal Dusty Blue.jpeg" // Blue suit placeholder
    },
    {
        id: 2,
        name: "Floral Breeze Pattern",
        category: "Floral Print / Fashion Wear",
        materials: "Cotton, Linen, Rayon, Chiffon",
        price: "Rs. 1,200",
        image: "/images/Customer/design explore/Floral Breeze Pattern.jpeg" // Floral placeholder
    },
    {
        id: 3,
        name: "Leafline Organic Print",
        category: "Nature / Organic Pattern",
        materials: "Rayon, Sustainable Fabrics",
        price: "Rs. 1,400",
        image: "/images/Customer/design explore/Leafline Organic Print.jpeg" // Brown/Pattern placeholder
    }
];

const FILTER_CATEGORIES = {
    'Design Category': ['Floral', 'Geometric', 'Abstract', 'Minimal', 'Vintage', 'Boho', 'Textured', 'Illustrative'],
    'Type': ['Health & Medicine', 'Book & Stationary', 'Services & Industry', 'Fashion & Beauty', 'Home & Living', 'Electronics', 'Mobile & Phone', 'Accessories'],
    'Fabric': ['Cotton', 'Linen', 'Silk', 'Polyester', 'Chiffon', 'Rayon', 'Denim', 'Knit']
};

export default function DesignerProducts({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [openFilter, setOpenFilter] = useState(null); // 'Design Category' | 'Type' | 'Fabric'
    const [selectedFilters, setSelectedFilters] = useState({
        'Design Category': [],
        'Type': [],
        'Fabric': []
    });

    const [activeMenuId, setActiveMenuId] = useState(null);

    const toggleFilter = (filterName) => {
        if (openFilter === filterName) setOpenFilter(null);
        else setOpenFilter(filterName);
    };

    const toggleSelection = (category, item) => {
        const current = selectedFilters[category];
        if (current.includes(item)) {
            setSelectedFilters({ ...selectedFilters, [category]: current.filter(i => i !== item) });
        } else {
            setSelectedFilters({ ...selectedFilters, [category]: [...current, item] });
        }
    };

    const resetFilters = () => {
        setSelectedFilters({
            'Design Category': [],
            'Type': [],
            'Fabric': []
        });
        setOpenFilter(null);
    };

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
                activePage="products"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onNavigate={onNavigate}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
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

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide bg-[#fff] dark:bg-black transition-colors" onClick={() => { setActiveMenuId(null); if (openFilter) setOpenFilter(null); }}>

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Products</h1>

                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">My design</h2>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center gap-0 mb-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl w-fit relative transition-colors" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-2 px-4 py-3 border-r border-neutral-200 dark:border-neutral-700">
                            <Filter size={18} className="text-neutral-500 dark:text-neutral-400" />
                            <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300">Filter By</span>
                        </div>

                        {['Design Category', 'Type', 'Fabric'].map((filterName) => (
                            <div key={filterName} className="relative">
                                <button
                                    onClick={() => toggleFilter(filterName)}
                                    className={cn(
                                        "flex items-center gap-3 px-6 py-3 border-r border-neutral-200 dark:border-neutral-700 text-sm font-bold transition-colors min-w-[160px] justify-between",
                                        openFilter === filterName ? "bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white" : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                                    )}
                                >
                                    <span>{filterName}</span>
                                    <ChevronDown size={14} />
                                </button>

                                {/* Dropdown Popover */}
                                {openFilter === filterName && (
                                    <div className="absolute top-full left-0 mt-4 w-[400px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-100 dark:border-neutral-700 p-6 z-30 animate-in fade-in zoom-in-95 duration-200">
                                        <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Select {filterName}</h3>
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {FILTER_CATEGORIES[filterName].map(item => (
                                                <button
                                                    key={item}
                                                    onClick={() => toggleSelection(filterName, item)}
                                                    className={cn(
                                                        "px-4 py-2 rounded-full border text-xs font-bold transition-all",
                                                        selectedFilters[filterName].includes(item)
                                                            ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                                                            : "border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500"
                                                    )}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-[10px] text-neutral-400 mb-4">*You can choose multiple {filterName}s</p>
                                        <button
                                            onClick={() => setOpenFilter(null)}
                                            className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        <button
                            onClick={resetFilters}
                            className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors rounded-r-xl"
                        >
                            <RefreshCw size={14} /> Reset Filter
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {PRODUCTS.map((product) => (
                            <div key={product.id} className="bg-[#E5E4E2] dark:bg-neutral-800 p-6 rounded-none relative group transition-colors">
                                <div className="flex gap-4 h-full">
                                    <div className="w-1/2 relative bg-white dark:bg-neutral-700 rounded-lg overflow-hidden shadow-sm">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 dark:bg-black/50 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-black/70">
                                            <ChevronLeft size={14} />
                                        </button>
                                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/80 dark:bg-black/50 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-black/70">
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                    <div className="w-1/2 flex flex-col justify-center">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">{product.name}</h3>
                                            <div className="relative">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setActiveMenuId(activeMenuId === product.id ? null : product.id); }}
                                                    className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded text-neutral-500 dark:text-neutral-400"
                                                >
                                                    <MoreVertical size={16} />
                                                </button>

                                                {/* Context Menu */}
                                                {activeMenuId === product.id && (
                                                    <div className="absolute top-6 right-0 w-32 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-100 dark:border-neutral-700 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white transition-colors">
                                                            <Edit2 size={12} /> Edit
                                                        </button>
                                                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600 transition-colors border-t border-neutral-50 dark:border-neutral-700">
                                                            <Trash2 size={12} /> Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-0.5">Category:</p>
                                                <p className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 leading-tight">{product.category}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-0.5">Suitable Materials:</p>
                                                <p className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 leading-tight">{product.materials}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-0.5">Price:</p>
                                                <p className="text-xs font-bold text-neutral-900 dark:text-white">{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mb-12">
                        <button className="flex flex-col items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                            <span className="text-sm font-bold">More</span>
                            <ChevronDown size={20} />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-neutral-50 dark:border-white/10 flex items-center justify-between transition-colors">
                            <div>
                                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-1">Total Designs</p>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">1003</h3>
                            </div>
                            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500">
                                <Package size={20} />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-neutral-50 dark:border-white/10 flex items-center justify-between transition-colors">
                            <div>
                                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-1">Designs Pending Review</p>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">2</h3>
                            </div>
                            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
                                <Clock size={20} />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-neutral-50 dark:border-white/10 flex items-center justify-between transition-colors">
                            <div>
                                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-1">Draft</p>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">4</h3>
                            </div>
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                                <FileText size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Upload Floating Button */}
                    <div className="fixed bottom-10 right-10">
                        <button
                            onClick={() => onNavigate('product-upload')}
                            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-lg hover:scale-105 transition-transform"
                        >
                            <Upload size={24} />
                            Upload
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}
