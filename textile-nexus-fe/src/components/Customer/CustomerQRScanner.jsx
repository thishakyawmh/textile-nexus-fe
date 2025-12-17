import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    QrCode
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

const SCANNED_ITEMS = [
    {
        id: 1,
        name: 'Peplum Blouse',
        image: '/images/Customer/Qr code/1.png',
        category: 'Solid Color / Smart Casual',
        suitable: 'Cotton, Linen, Rayon, Chiffon',
        price: 'Rs. 1,450',
        code: 'A12BS2042'
    },
    {
        id: 2,
        name: 'Peplum Blouse',
        image: '/images/Customer/Qr code/2.png',
        category: 'Solid Color',
        suitable: 'Cotton, Linen',
        price: 'Rs. 2,580',
        code: 'A12BS3025'
    }
];

export default function CustomerQRScanner({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-black flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
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

                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">QR code scanner</h1>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        {SCANNED_ITEMS.map((item, index) => (
                            <div key={item.id} className="flex flex-col items-center group">
                                {/* Image Area - Floating above */}
                                <div className="w-[280px] h-[340px] mb-[-4rem] z-10 relative transition-transform duration-300 group-hover:-translate-y-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details Card */}
                                <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-[32px] pt-20 pb-8 px-8 w-full max-w-[400px] relative shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-white/10">
                                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center mt-2">{item.name}</h2>

                                    <div className="space-y-4 mb-8 px-2">
                                        <div className="flex items-start justify-between text-sm py-1 border-b border-neutral-200 dark:border-white/10 pb-2">
                                            <span className="font-semibold text-neutral-500 dark:text-neutral-400">Category</span>
                                            <span className="font-bold text-neutral-900 dark:text-neutral-200 text-right">{item.category}</span>
                                        </div>
                                        <div className="flex items-start justify-between text-sm py-1 border-b border-neutral-200 dark:border-white/10 pb-2">
                                            <span className="font-semibold text-neutral-500 dark:text-neutral-400">Suitable</span>
                                            <span className="font-bold text-neutral-900 dark:text-neutral-200 text-right">{item.suitable}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm py-1 border-b border-neutral-200 dark:border-white/10 pb-2">
                                            <span className="font-semibold text-neutral-500 dark:text-neutral-400">Price</span>
                                            <span className="font-bold text-neutral-900 dark:text-neutral-200">{item.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm py-1">
                                            <span className="font-semibold text-neutral-500 dark:text-neutral-400">Dress code</span>
                                            <span className="font-bold text-neutral-900 dark:text-neutral-200">{item.code}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-end justify-between gap-4">
                                            <button
                                                onClick={() => onNavigate('customer-matching-selection')}
                                                className="bg-black dark:bg-white text-white dark:text-black font-bold py-3.5 px-6 rounded-xl text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-md flex-1 active:scale-95"
                                            >
                                                Matching Selection
                                            </button>

                                            {/* QR Code Section */}
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="bg-neutral-900 dark:bg-neutral-700 text-white text-[10px] font-bold px-3 py-1 mb-1.5 rounded-full relative shadow-md">
                                                    SCAN ME
                                                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 dark:bg-neutral-700 rotate-45"></div>
                                                </div>
                                                <div className="bg-white p-2 rounded-xl border border-neutral-200 dark:border-neutral-300 shadow-sm">
                                                    <QrCode size={36} className="text-black" />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => onNavigate('customer-3d-view')}
                                            className="w-full bg-white dark:bg-neutral-800 border-2 border-black dark:border-neutral-600 text-black dark:text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-sm active:scale-95"
                                        >
                                            View 3D Model
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
