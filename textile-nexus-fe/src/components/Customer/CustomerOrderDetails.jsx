import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    ReceiptText
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const SIMILAR_DESIGNS = [
    { id: 1, name: 'Denim Frock', img: 'https://placehold.co/300x400/1e3a8a/ffffff?text=Denim+Frock' },
    { id: 2, name: 'Kurtha', img: 'https://placehold.co/300x400/064e3b/ffffff?text=Kurtha' },
    { id: 3, name: 'Glacial Overcoat', img: 'https://placehold.co/300x400/505050/ffffff?text=Overcoat' },
    { id: 4, name: 'Coat', img: 'https://placehold.co/300x400/78350f/ffffff?text=Long+Coat' },
    { id: 5, name: 'Denim Frock', img: 'https://placehold.co/300x400/1e40af/ffffff?text=Denim+Blue' },
    { id: 6, name: 'Kurtha', img: 'https://placehold.co/300x400/166534/ffffff?text=Green+Kurtha' },
    { id: 7, name: 'Glacial Overcoat', img: 'https://placehold.co/300x400/374151/ffffff?text=Grey+Coat' },
    { id: 8, name: 'Coat', img: 'https://placehold.co/300x400/451a03/ffffff?text=Brown+Coat' },
    { id: 9, name: 'Denim Frock', img: 'https://placehold.co/300x400/172554/ffffff?text=Dark+Denim' },
];

export default function CustomerOrderDetails({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Selected item (hardcoded based on mockup)
    const selectedItem = {
        name: 'Leather Jacket',
        image: 'https://placehold.co/500x600/7f1d1d/ffffff?text=Leather+Jacket', // Leather jacket placceholder
        price: 'Rs. 5,500.00',
        delivery: 'DD/MM',
        material: 'Leather'
    };

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

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Choose Design</h1>

                    <div className="flex flex-col xl:flex-row gap-8 mb-12">
                        {/* Image Card */}
                        <div className="w-full xl:w-1/3 bg-[#EEEEEE] dark:bg-neutral-800 rounded-3xl p-8 flex items-center justify-center transition-colors">
                            <img src={selectedItem.image} alt={selectedItem.name} className="max-h-96 object-contain" />
                        </div>

                        {/* Details Card */}
                        <div className="flex-1 bg-[#EEEEEE] dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 flex flex-col justify-center transition-colors">
                            <div className="space-y-6 mb-10">
                                <div>
                                    <h2 className="text-2xl font-normal text-neutral-900 dark:text-white">Price:</h2>
                                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{selectedItem.price}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-normal text-neutral-900 dark:text-white">Expected Delievary:</h2>
                                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{selectedItem.delivery}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-normal text-neutral-900 dark:text-white">Material:</h2>
                                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{selectedItem.material}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => onNavigate('customer-payment')}
                                className="w-full bg-[#5484FF] text-white text-xl font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <ReceiptText size={24} /> Order Now
                            </button>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Another Designs</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
                        {SIMILAR_DESIGNS.map((design) => (
                            <div key={design.id} className="bg-[#EEEEEE] dark:bg-neutral-800 rounded-xl p-2 flex flex-col items-center transition-colors">
                                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-2 bg-white">
                                    <img src={design.img} alt={design.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-[9px] font-bold text-center text-neutral-900 dark:text-white leading-tight">{design.name}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
