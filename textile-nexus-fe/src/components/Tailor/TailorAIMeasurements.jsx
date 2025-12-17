import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    AlertCircle
} from 'lucide-react';
import TailorSidebar from './TailorSidebar';

const SCAN_DATA_TODAY = [
    { label: 'Waist', value: '32.5 in' },
    { label: 'Chest', value: '40.0 in' },
    { label: 'Hip', value: '42.0 in' },
    { label: 'Inseam', value: '31.8 in' },
    { label: 'Sleeve Length', value: '24.5 in' },
    { label: 'Neck Circ.', value: '15.5 in' },
    { label: 'Shoulder W.', value: '18.5 in' },
];

const SCAN_DATA_PREV = [
    { label: 'Waist', value: '31.0 in' },
    { label: 'Chest', value: '40.0 in' },
    { label: 'Hip', value: '41.5 in' },
    { label: 'Inseam', value: '32.0 in' },
    { label: 'Sleeve Length', value: '24.5 in' },
    { label: 'Neck Circ.', value: '15.5 in' },
    { label: 'Shoulder W.', value: '17.7 in' },
];

const RECENT_SCANS = [
    { id: 1, name: 'Lisa', date: 'Today, 5.00 PM', img: '/images/Customer/Tailor/p1.jpeg' },
    { id: 2, name: 'John', date: 'Today, 1.00 PM', img: '/images/Customer/Tailor/p2.jpeg' },
    { id: 3, name: 'Olivia', date: 'Today, 9.00 AM', img: '/images/Customer/Tailor/p1.jpeg' },
    { id: 4, name: 'Robert', date: 'Yesterday, 10.00 PM', img: '/images/Customer/Tailor/p3.jpeg' },
    { id: 5, name: 'Meena', date: 'Yesterday, 8.00 PM', img: '/images/Customer/Tailor/p1.jpeg' },
    { id: 6, name: 'Emma', date: '20 Nov 2025, 5.00 PM', img: '/images/Customer/Tailor/p3.jpeg' },
    { id: 7, name: 'Sora', date: '17 Nov 2025, 1.00 PM', img: '/images/Customer/Tailor/p1.jpeg' },
    { id: 8, name: 'Jack', date: '14 Nov 2025, 11.00 PM', img: '/images/Customer/Tailor/p3.jpeg' },
];

export default function TailorAIMeasurements({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <TailorSidebar
                activePage="ai-measurements"
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
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">AI Measurements</h1>

                    <div className="grid grid-cols-12 gap-8">

                        {/* Column 1: Body Scan & Highlights */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">
                            {/* Body Scan Image */}
                            <div className="bg-neutral-50 dark:bg-white/5 rounded-3xl p-6 flex items-center justify-center h-[500px] border border-neutral-100 dark:border-white/10 transition-colors">
                                <div className="relative w-full h-full">
                                    <img src="/images/Customer/Tailor/AIMes.jpeg" alt="img" className="w-full h-full object-contain opacity-50" />

                                </div>
                            </div>
                        </div>

                        {/* Column 2: Data Comparison & Recommendations */}
                        <div className="col-span-12 lg:col-span-5 space-y-6">

                            {/* Measurement Data */}
                            <div className="bg-neutral-50 dark:bg-white/5 rounded-3xl p-6 border border-neutral-100 dark:border-white/10 transition-colors">
                                <h3 className="font-bold text-neutral-900 dark:text-white mb-6">Measurement data & Comparison</h3>
                                <div className="flex gap-8">
                                    <div className="flex-1">
                                        <h4 className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-4">Lastest Scan (Today)</h4>
                                        <div className="space-y-3">
                                            {SCAN_DATA_TODAY.map((item, i) => (
                                                <div key={i} className="flex justify-between text-xs font-medium border-b border-neutral-200 dark:border-white/10 pb-2">
                                                    <span className="text-neutral-600 dark:text-neutral-400">{item.label}</span>
                                                    <span className="text-neutral-900 dark:text-neutral-100 font-bold">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-px bg-neutral-200 dark:bg-neutral-800"></div>
                                    <div className="flex-1">
                                        <h4 className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-4">Previous Scan (2 Months ago)</h4>
                                        <div className="space-y-3">
                                            {SCAN_DATA_PREV.map((item, i) => (
                                                <div key={i} className="flex justify-between text-xs font-medium border-b border-neutral-200 dark:border-white/10 pb-2">
                                                    <span className="text-neutral-600 dark:text-neutral-400">{item.label}</span>
                                                    <span className="text-neutral-900 dark:text-neutral-100 font-bold">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Highlight Differences */}
                            <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-700 h-32 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-medium text-sm transition-colors">
                                Highlight Differences (Visual Placeholder)
                            </div>

                            {/* Smart Recommendations */}
                            <div className="bg-neutral-50 dark:bg-white/5 rounded-3xl p-6 border border-neutral-100 dark:border-white/10 transition-colors">
                                <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Smart Recommendations</h3>
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm flex gap-4 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0"></div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-700 dark:text-neutral-200 mb-1">Customer prefers a tighter fit in the shoulders based on feedback history.</p>
                                            <p className="text-[10px] text-neutral-500">Action: Adjust pattern width by 0.75 inches.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm flex gap-4 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center shrink-0">
                                            <AlertCircle size={20} className="text-neutral-600 dark:text-neutral-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-700 dark:text-neutral-200 mb-1">Alert: Customer's body mass has increased 5% since their Last Approved Fit.</p>
                                            <p className="text-[10px] text-neutral-500">Action: Confirm fitting preferences with the client before proceeding.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pattern Status (Mini) */}
                            <div className="bg-neutral-50 dark:bg-white/5 rounded-3xl p-6 border border-neutral-100 dark:border-white/10 transition-colors">
                                <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Pattern & Fabric Status</h3>
                                <div className="bg-white dark:bg-neutral-800 px-3 py-2 rounded text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-2 transition-colors">Garment Type: Custom Business Suit</div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-neutral-500 dark:text-neutral-400 font-bold">Fabric Stock Status:</span>
                                    <span className="font-bold text-neutral-900 dark:text-white">Available</span>
                                </div>
                                <div className="flex justify-between text-xs mb-4">
                                    <span className="text-neutral-500 dark:text-neutral-400 font-bold">Pattern Base:</span>
                                    <span className="font-bold text-neutral-900 dark:text-white">Standard V4</span>
                                </div>
                                <button className="w-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-3 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                    Auto-Generate Cutting Instructions
                                </button>
                            </div>

                        </div>

                        {/* Column 3: Recent Scans */}
                        <div className="col-span-12 lg:col-span-3">
                            <div className="bg-neutral-50 dark:bg-white/5 rounded-3xl p-6 border border-neutral-100 dark:border-white/10 h-full transition-colors">
                                <h3 className="font-bold text-neutral-900 dark:text-white mb-6">Recent Scans</h3>
                                <div className="space-y-4">
                                    {RECENT_SCANS.map((scan) => (
                                        <div key={scan.id} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden transition-colors">
                                                <img src={scan.img} alt={scan.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">{scan.name}</p>
                                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{scan.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
