import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';

export default function CustomerPayment({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [saveCard, setSaveCard] = useState(true);

    const product = {
        name: 'Leather Jacket',
        image: '/images/Customer/Tailor/9.png', // Leather jacket placeholder
        total: 'Rs. 5, 500.00'
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
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Track Your Order</h1>

                    <div className="flex flex-col xl:flex-row gap-20">
                        {/* Product Image */}
                        <div className="w-full xl:w-96 shrink-0 flex justify-center xl:block">
                            <div className="bg-[#EEEEEE] dark:bg-neutral-800 rounded-[40px] p-6 w-80 h-96 flex items-center justify-center transition-colors">
                                <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className="w-full max-w-2xl border border-neutral-900 dark:border-neutral-700 rounded-lg p-8 lg:p-12 transition-colors">
                            <div className="text-center mb-10">
                                <h2 className="text-[#EAB308] text-2xl font-bold mb-1">Payment</h2>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">All transactions are secure and encrypted.</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">Cardholder Name</label>
                                    <input type="text" className="w-full bg-[#E8E8E8] dark:bg-neutral-800 dark:text-white rounded-lg h-12 px-4 outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">Card Number</label>
                                    <input type="text" className="w-full bg-[#E8E8E8] dark:bg-neutral-800 dark:text-white rounded-lg h-12 px-4 outline-none transition-colors" />
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-1/2">
                                        <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">Expiration</label>
                                        <input type="text" placeholder="MM/YY" className="w-full bg-[#E8E8E8] dark:bg-neutral-800 dark:text-white rounded-lg h-12 px-4 outline-none placeholder:text-neutral-500 transition-colors text-xs" />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">CVV</label>
                                        <input type="text" className="w-full bg-[#E8E8E8] dark:bg-neutral-800 dark:text-white rounded-lg h-12 px-4 outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="text-xs font-bold text-neutral-900 dark:text-white">Save this Card</p>
                                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Your card information is safe with us.</p>
                                    </div>
                                    <div
                                        className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-colors ${saveCard ? 'bg-[#EAB308]' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                                        onClick={() => setSaveCard(!saveCard)}
                                    >
                                        <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${saveCard ? 'translate-x-5' : 'translate-x-0'}`}></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4">
                                    <span className="text-base font-bold text-neutral-900 dark:text-white">Grand Total</span>
                                    <span className="text-xs font-bold text-neutral-900 dark:text-white">{product.total}</span>
                                </div>

                                <button
                                    onClick={() => onNavigate('customer-order-tracking')}
                                    className="w-full bg-[#4F80FF] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors text-lg mt-6"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
