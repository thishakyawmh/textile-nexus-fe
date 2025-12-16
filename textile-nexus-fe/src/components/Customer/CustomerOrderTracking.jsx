import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Check
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';
import { useTheme } from '../../context/ThemeContext';

export default function CustomerOrderTracking({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Hardcoded steps based on image
    const steps = ['Order Received', 'Cutting', 'Stitching', 'Finishing', 'Ready For Pickup'];
    const currentStep = 0; // 0-indexed, so 'Order Received' is active

    const product = {
        name: 'Leather Jacket',
        image: 'https://placehold.co/500x600/7f1d1d/ffffff?text=Leather+Jacket', // Leather jacket placceholder
        startDate: '2025/ 11 /21',
        deliveryDate: '2025/ 12 /31'
    };

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
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
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Your Order</h1>

                    <div className="flex flex-col xl:flex-row gap-20">
                        {/* Product Image */}
                        <div className="w-full xl:w-96 shrink-0 flex justify-center xl:block">
                            <div className="bg-[#EEEEEE] dark:bg-neutral-800 rounded-[30px] p-6 w-80 h-96 flex items-center justify-center transition-colors">
                                <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                            </div>
                        </div>

                        {/* Order Status */}
                        <div className="flex-1 max-w-4xl">

                            <div className="bg-[#4F80FF] text-white text-2xl font-bold py-4 px-8 rounded-lg mb-10 w-fit shadow-md">
                                Payment Successfull !
                            </div>

                            <div className="space-y-6 mb-20">
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">Started Day:</h2>
                                    <p className="text-lg text-neutral-700 dark:text-neutral-300">{product.startDate}</p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">Expected Delivery:</h2>
                                    <p className="text-lg text-neutral-700 dark:text-neutral-300">{product.deliveryDate}</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Track Your Order</h2>

                            <div className="flex items-start justify-between relative max-w-4xl pr-20">
                                {/* Connector Line */}
                                <div className="absolute top-1/2 left-0 w-[85%] h-0.5 bg-[#4F80FF] -z-10 -tranneutral-y-1/2"></div>

                                {/* Steps */}
                                {steps.map((step, index) => {
                                    const isActive = index <= currentStep;
                                    const isCurrent = index === currentStep;

                                    return (
                                        <div key={step} className="flex flex-col items-center gap-2 bg-white dark:bg-black px-2 transition-colors">
                                            <div className={`
                                                px-4 py-3 rounded-lg border-2 text-xs font-bold whitespace-nowrap transition-colors
                                                ${isActive ? 'bg-[#4F80FF] text-white border-[#4F80FF]' : 'bg-white dark:bg-black text-[#4F80FF] border-[#4F80FF]'}
                                            `}>
                                                {step}
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Delivery Scooter Illustration */}
                                <div className="absolute -right-4 top-1/2 -tranneutral-y-1/2">
                                    <img src="" alt="img" className="h-24 object-contain" onError={(e) => { e.target.style.display = 'none'; /* Fallback if no image */ }} />
                                    {/* Fallback Text if Image Fails */}
                                    <div className="text-orange-500 font-bold italic text-xl">Delivery</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
