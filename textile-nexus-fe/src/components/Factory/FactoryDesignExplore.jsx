import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter
} from 'lucide-react';
import FactorySidebar from './FactorySidebar';

// --- Mock Data ---

const DESIGNS = [
    {
        id: 1,
        title: "Geometric Print Dress",
        batch: "Small Batch (350 units)",
        material: "Cotton",
        image: "/images/Customer/design explore/Geometric.jpg",
        tagColor: "bg-[#1A1A1E] dark:bg-white text-white dark:text-black"
    },
    {
        id: 2,
        title: "Upcycled Denim Jacket",
        batch: "Limited Edition (150 units)",
        material: "Denim",
        image: "/images/Customer/design explore/Denim_Jacket.jpg",
        tagColor: "bg-[#1A1A1E] dark:bg-white text-white dark:text-black"
    },
    {
        id: 3,
        title: "Summer Fabric Print Shirt",
        batch: "High Volume (1.2k units)",
        material: "Rayon",
        image: "/images/Customer/design explore/Print_Shirt.jpg",
        tagColor: "bg-[#1A1A1E] dark:bg-white text-white dark:text-black"
    },
    {
        id: 4,
        title: "Ethical Linen Trousers",
        batch: "Medium Batch (800 units)",
        material: "Linen",
        image: "/images/Customer/design explore/Linen_Trousers.jpg",
        tagColor: "bg-[#1A1A1E] dark:bg-white text-white dark:text-black"
    },
    {
        id: 5,
        title: "Silk Evening Gown",
        batch: "Low Volume (50 units)",
        material: "Silk",
        image: "/images/Customer/design explore/Silk_Evening.jpg",
        tagColor: "bg-[#1A1A1E] dark:bg-white text-white dark:text-black"
    },
    {
        id: 6,
        title: "Structured Wool Blend Coat",
        batch: "Medium Batch (450 units)",
        material: "Wool",
        image: "/images/Customer/design explore/Wool_Coat.jpg",
        tagColor: "bg-[#1A1A1E] dark:bg-white text-white dark:text-black"
    }
];

const MATERIALS = ["Cotton", "Denim", "Rayon", "Linen", "Silk", "Wool"];

export default function FactoryDesignExplore({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState("Denim"); // Default from screenshot seems to show selection? Or just dropdown label.

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
                activePage="design-explore"
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

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Design Explore</h1>

                        <div className="flex items-center gap-2 relative z-20">
                            <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300">Quick Filters:</span>
                            <div className="relative">
                                <button
                                    onClick={() => setFilterOpen(!filterOpen)}
                                    className="flex items-center gap-10 px-4 py-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-lg text-sm font-medium shadow-sm active:scale-95 transition-all w-48 justify-between text-neutral-700 dark:text-neutral-200"
                                >
                                    <span>Material Type</span>
                                    <ChevronDown size={14} className="text-neutral-400" />
                                </button>

                                {filterOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-white/5 rounded-xl shadow-xl border border-neutral-100 dark:border-white/10 py-2 animate-in fade-in zoom-in-95 duration-200">
                                        {MATERIALS.map((mat) => (
                                            <div
                                                key={mat}
                                                className={`px-4 py-2.5 text-sm font-medium cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors ${selectedMaterial === mat ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white' : 'text-neutral-700 dark:text-neutral-300'}`}
                                                onClick={() => { setSelectedMaterial(mat); setFilterOpen(false); }}
                                            >
                                                {mat}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {DESIGNS.map((design) => (
                            <div key={design.id} className="bg-neutral-50 dark:bg-white/5 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-2">
                                    <img src={design.image} alt={design.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">{design.title}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{design.batch}</p>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-2">
                                    <span className={`${design.tagColor} px-6 py-2 rounded-lg text-xs font-bold`}>
                                        {design.material}
                                    </span>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-bold shadow-lg shadow-blue-500/20 transition-all">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
