import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Scissors,
    Expand
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const HISTORY_TAILORS = [
    { id: 1, name: 'Harriet King', role: 'Master Tailor', email: 'harriet.k@studio.com', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80' },
    { id: 2, name: 'Lenora Benson', role: 'Pattern Maker', email: 'lenora.b@style.us', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80' },
    { id: 3, name: 'Howard Adkins', role: 'Senior Tailor', email: 'howard.a@bespoke.com', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80' },
    { id: 4, name: 'George Bryant', role: 'Fabric Specialist', email: 'george.b@textile.co', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80' },
    { id: 5, name: 'Lily French', role: 'Designer', email: 'lily.f@couture.net', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80' },
    { id: 6, name: 'Patrick Padilla', role: 'Stitch Expert', email: 'patrick.p@fashion.io', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80' },
];

export default function CustomerMyTailor({ onNavigate }) {
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
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">My Tailor</h1>

                    <div className="flex flex-col xl:flex-row gap-10">
                        {/* Left Side - Options */}
                        <div className="flex-1 flex flex-col gap-6">

                            {/* Option 1: Custom Stitching */}
                            <div className="relative rounded-[2.5rem] overflow-hidden h-72 group cursor-pointer hover:shadow-xl transition-all shadow-md">
                                <img src="/images/Customer/Tailor/Custom Stitching.jpeg" alt="img" className="w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                                    <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-3xl px-10 py-6">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Custom Stitching</h2>
                                        <p className="text-white/90 font-medium tracking-wide">Create Your Perfect Outfit</p>
                                    </div>
                                </div>
                            </div>

                            {/* Option 2: Alteration */}
                            <div className="relative rounded-[2.5rem] overflow-hidden h-72 group cursor-pointer hover:shadow-xl transition-all shadow-md">
                                <img src="/images/Customer/Tailor/Alteration.jpeg" alt="img" className="w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 flex flex-col justify-center items-start p-10">
                                    <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-3xl px-10 py-6 ml-4">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Alteration</h2>
                                        <p className="text-white/90 font-medium tracking-wide">Fix or Adjust Your Clothes</p>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-4 pt-2">
                                <button
                                    onClick={() => onNavigate('customer-choose-tailor')}
                                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-lg font-bold py-5 rounded-2xl transition-all shadow-md active:scale-[0.99]"
                                >
                                    Choose Tailor
                                </button>
                                <button
                                    onClick={() => onNavigate('customer-choose-design')}
                                    className="w-full bg-white dark:bg-neutral-800 border-2 border-black dark:border-neutral-600 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700 text-lg font-bold py-5 rounded-2xl transition-all shadow-md active:scale-[0.99]"
                                >
                                    Choose Design
                                </button>
                            </div>
                        </div>

                        {/* Right Side - History */}
                        <div className="w-full xl:w-[450px] shrink-0">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Recent History</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {HISTORY_TAILORS.map((tailor) => (
                                    <div key={tailor.id} className="bg-white dark:bg-white/5 p-5 rounded-[2rem] border border-neutral-100 dark:border-white/10 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1">
                                        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-neutral-100 dark:border-white/10 shadow-sm p-0.5 bg-white dark:bg-neutral-800">
                                            <img src={tailor.img} alt={tailor.name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <h3 className="font-bold text-neutral-900 dark:text-white text-sm mb-0.5">{tailor.name}</h3>
                                        <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">{tailor.role}</p>
                                        <button
                                            onClick={() => onNavigate('customer-tailor-profile')}
                                            className="text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-3 py-1.5 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
