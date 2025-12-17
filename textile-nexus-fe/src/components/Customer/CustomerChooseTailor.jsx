import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Star
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const TAILORS = [
    { id: 1, name: 'Harriet King', years: '10+', role: 'Ladies Wear', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80', tags: ['Ladies Wear', 'Gens Wear'] },
    { id: 2, name: 'George Bryant', years: '10+', role: 'Specialist in ladies wear', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80', tags: [] },
    { id: 3, name: 'Howard Adkins', years: '5+', role: 'Tailor', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80', tags: ['Kids Wear', 'Gens Wear'] },
    { id: 4, name: 'Lenora Benson', years: '10+', role: 'Ladies Wear', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80', tags: ['Ladies Wear', 'Gens Wear'] },
    { id: 5, name: 'Lily French', years: '10+', role: 'Specialist in kids wear', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80', tags: [] },
    { id: 6, name: 'Patrick Padilla', years: '15+', role: 'Tailor', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80', tags: ['Kids Wear', 'Gens Wear', 'Ladies Wear'] },
    { id: 7, name: 'Bertha Valdez', years: '10+', role: 'Tailor', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80', tags: ['Gens Wear'] },
    { id: 8, name: 'Julian Sisco', years: '10+', role: 'Specialist in ladies wear', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80', tags: [] },
];

export default function CustomerChooseTailor({ onNavigate }) {
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

                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Choose Tailor</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {TAILORS.map((tailor) => (
                            <div key={tailor.id} className="bg-white dark:bg-white/5 rounded-[2rem] p-6 flex flex-col items-center text-center border border-neutral-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-all relative group overflow-hidden">

                                <div className="absolute top-4 right-4 text-xs font-bold text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">{tailor.id < 10 ? `0${tailor.id}` : tailor.id}</div>

                                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-neutral-50 dark:border-white/10 shadow-sm relative group-hover:scale-105 transition-transform duration-300">
                                    <img src={tailor.img} alt={tailor.name} className="w-full h-full object-cover" />
                                </div>

                                <h3 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">{tailor.name}</h3>

                                <div className="flex gap-0.5 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-0.5">{tailor.years} years of experiences</p>
                                {tailor.role && <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-4 font-semibold">{tailor.role}</p>}

                                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                                    {tailor.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-full text-[9px] font-semibold text-neutral-500 dark:text-neutral-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => onNavigate('customer-tailor-profile')}
                                    className="mt-auto w-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-2.5 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md active:scale-95"
                                >
                                    Order From Tailor
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
