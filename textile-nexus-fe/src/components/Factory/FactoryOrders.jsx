import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter,
    RefreshCw,
    X,
    Calendar,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import FactorySidebar from './FactorySidebar';

// --- Mock Data ---

const ORDER_LIST = [
    { id: 'F00001', product: 'Blue Denim Run', department: 'Weaving', date: '04 Nov 2025', quantity: '1,500', status: 'Processing' },
    { id: 'F00002', product: 'Grey T-Shirts', department: 'Knitting', date: '28 May 2025', quantity: '5,000', status: 'Completed' },
    { id: 'F00003', product: 'Custom Logo Tee', department: 'Printing', date: '23 Nov 2025', quantity: '800', status: 'On Hold' },
    { id: 'F00004', product: 'Cotton Spools', department: 'Spinning', date: '05 Feb 2025', quantity: '10,000', status: 'Completed' },
    { id: 'F00005', product: 'Specialty Uniforms', department: 'Cutting', date: '29 Jul 2025', quantity: '450', status: 'On Hold' },
    { id: 'F00006', product: 'Black Knitwear', department: 'Knitting', date: '15 Aug 2025', quantity: '2,500', status: 'Processing' },
    { id: 'F00007', product: 'Green Fabric Rolls', department: 'Dyeing', date: '21 Nov 2025', quantity: '80', status: 'Rejected' },
    { id: 'F00008', product: 'Zip Assembly', department: 'Assembly', date: '30 Apr 2025', quantity: '1,200', status: 'Processing' },
    { id: 'F00009', product: 'White Spools', department: 'Spinning', date: '09 Jan 2025', quantity: '7,000', status: 'In Transit' },
];

const STATUS_COLORS = {
    'Processing': 'bg-purple-100 text-purple-600',
    'Completed': 'bg-emerald-100 text-emerald-600',
    'On Hold': 'bg-orange-100 text-orange-600',
    'Rejected': 'bg-red-100 text-red-600',
    'In Transit': 'bg-fuchsia-100 text-fuchsia-600'
};

export default function FactoryOrders({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Filters Logic (Reused primarily from SupplierOrders for consistency)
    const [openFilter, setOpenFilter] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState([]);

    const toggleFilter = (filterName) => {
        if (openFilter === filterName) setOpenFilter(null);
        else setOpenFilter(filterName);
    };

    const toggleStatus = (status) => {
        if (selectedStatus.includes(status)) {
            setSelectedStatus(selectedStatus.filter(s => s !== status));
        } else {
            setSelectedStatus([...selectedStatus, status]);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
                activePage="order"
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

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Order Lists</h1>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center gap-3 mb-8 bg-[#F8F9FE] dark:bg-[#0F0F12] sticky top-0 z-10 pb-4 transition-colors">
                        <div className="p-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-lg transition-colors">
                            <Filter size={18} className="text-neutral-500" />
                        </div>
                        <div className="px-4 py-2 bg-neutral-100/50 dark:bg-neutral-800 rounded-lg text-sm font-semibold text-neutral-500 dark:text-neutral-400 transition-colors">Filter By</div>

                        {/* Date Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleFilter('date')}
                                className={cn(
                                    "flex items-center gap-6 px-4 py-2 border rounded-lg text-sm font-semibold min-w-[140px] justify-between transition-colors",
                                    openFilter === 'date' ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white" : "bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700"
                                )}
                            >
                                <span>{selectedDate ? selectedDate : "Date"}</span>
                                <ChevronDown size={14} />
                            </button>
                            {openFilter === 'date' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-white/5 rounded-xl shadow-xl border border-neutral-100 dark:border-white/10 p-4 z-20 animate-in fade-in zoom-in-95 duration-200 transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-bold text-sm text-neutral-900 dark:text-white">Select Date</span>
                                        <button onClick={() => setOpenFilter(null)}><X size={14} className="text-neutral-400" /></button>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-neutral-400 font-bold">
                                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                        {[...Array(30)].map((_, i) => (
                                            <div
                                                key={i}
                                                onClick={() => { setSelectedDate(`12 Nov 2025`); setOpenFilter(null); }}
                                                className="w-full h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                                            >
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Order Status Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleFilter('status')}
                                className={cn(
                                    "flex items-center gap-6 px-4 py-2 border rounded-lg text-sm font-semibold min-w-[160px] justify-between transition-colors",
                                    openFilter === 'status' ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white" : "bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700"
                                )}
                            >
                                <span>{selectedStatus.length > 0 ? `${selectedStatus.length} Selected` : "Order Status"}</span>
                                <ChevronDown size={14} />
                            </button>
                            {openFilter === 'status' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-white/5 rounded-xl shadow-xl border border-neutral-100 dark:border-white/10 p-2 z-20 animate-in fade-in zoom-in-95 duration-200 transition-colors">
                                    {['Processing', 'In Transit', 'Completed', 'Rejected', 'On Hold'].map(status => (
                                        <div
                                            key={status}
                                            onClick={() => toggleStatus(status)}
                                            className={cn(
                                                "flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium mb-1 transition-colors",
                                                selectedStatus.includes(status) ? "bg-black dark:bg-white text-white dark:text-black" : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                                            )}
                                        >
                                            {status}
                                            {selectedStatus.includes(status) && <RefreshCw size={12} />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Reset */}
                        <button
                            onClick={() => { setSelectedDate(null); setSelectedStatus([]); }}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors ml-auto"
                        >
                            <RefreshCw size={14} /> Reset Filter
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 overflow-hidden transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white dark:bg-white/5 border-b border-neutral-100 dark:border-white/10 text-[10px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider transition-colors">
                                        <th className="px-8 py-5">Order ID</th>
                                        <th className="px-8 py-5">Product Name</th>
                                        <th className="px-8 py-5">Department</th>
                                        <th className="px-8 py-5">Date</th>
                                        <th className="px-8 py-5">Quantity (Units)</th>
                                        <th className="px-8 py-5">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium text-neutral-600 dark:text-neutral-400 text-xs">
                                    {ORDER_LIST.map((order, index) => (
                                        <tr key={order.id} className="border-b border-neutral-50 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                            <td className="px-8 py-5 text-neutral-900 dark:text-white font-semibold">{order.id}</td>
                                            <td className="px-8 py-5 text-neutral-900 dark:text-white">{order.product}</td>
                                            <td className="px-8 py-5">{order.department}</td>
                                            <td className="px-8 py-5">{order.date}</td>
                                            <td className="px-8 py-5 text-neutral-900 dark:text-white">{order.quantity}</td>
                                            <td className="px-8 py-5">
                                                <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase ${STATUS_COLORS[order.status] || 'bg-neutral-100 text-neutral-500'}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="flex items-center justify-between px-8 py-6 border-t border-neutral-100 dark:border-white/10 transition-colors">
                            <p className="text-xs text-neutral-400 dark:text-neutral-500">Showing 1-09 of 78</p>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                    <ChevronLeft size={14} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </main>
        </div>
    );
}
