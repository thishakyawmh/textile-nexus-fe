import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    ArrowUpRight
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

// Using Unsplash source URLs for better quality "professional" images
const DESIGNERS = [
    { id: 1, name: 'Asha Perera', email: 'asha.design@studio.com', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80' },
    { id: 2, name: 'Julian Sisco', email: 'julian.art@fashion.com', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80' },
    { id: 3, name: 'Harriet King', email: 'harriet.k@couture.com', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80' },
    { id: 4, name: 'Lenora Benson', email: 'lenora.b@style.us', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80' },
    { id: 5, name: 'Olivia Reese', email: 'olivia.r@trends.net', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80' },
    { id: 6, name: 'Bertha Valdez', email: 'bertha.v@textile.io', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80' },
    { id: 7, name: 'David Payne', email: 'david.p@menswear.tv', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80' },
    { id: 8, name: 'George Bryant', email: 'george.b@classic.com', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80' },
];

export default function CustomerDesignerExplore({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-black flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <CustomerSidebar
                activePage="designer-explore"
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

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Designer explore</h1>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {DESIGNERS.map((designer) => (
                            <div
                                key={designer.id}
                                onClick={() => onNavigate('customer-designer-profile')}
                                className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-neutral-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center relative overflow-hidden group"
                            >
                                {/* Decorative circle bg */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-neutral-50 dark:bg-neutral-800/50 rounded-full opacity-50"></div>

                                <div className="w-28 h-28 rounded-full p-1.5 border border-neutral-100 dark:border-white/10 mb-4 bg-white dark:bg-neutral-800 shadow-sm relative z-10 transition-colors">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={designer.img} alt={designer.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <div className="relative z-10 w-full flex-1">
                                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-1">{designer.name}</h3>
                                    <div className="inline-block px-3 py-1 rounded-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-[10px] font-bold text-neutral-500 dark:text-neutral-400 mb-3 transition-colors">
                                        FASHION DESIGNER
                                    </div>
                                    <p className="text-xs text-neutral-400 mb-4">{designer.email}</p>
                                </div>

                                <div className="w-full mt-auto relative z-10">
                                    <button className="w-full py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                        View Profile
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
