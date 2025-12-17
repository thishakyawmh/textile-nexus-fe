import React, { useState, useEffect, useRef } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter,
    RotateCcw,
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon
} from 'lucide-react';
import { cn } from '../../lib/utils';
import SupplierSidebar from './SupplierSidebar';

// --- Mock Data ---

const MOCK_ORDERS = [
    { id: 'FS001', supplier: 'Lanka Textiles Co.', fabric: 'Cotton (White)', date: '04 Sep 2025', qty: 500, status: 'Completed' },
    { id: 'FS002', supplier: 'Silk World Pvt Ltd', fabric: 'Pure Silk (Red)', date: '28 May 2026', qty: 120, status: 'Processing' },
    { id: 'FS003', supplier: 'Trendy Fabrics Ltd', fabric: 'Denim (Blue)', date: '23 Nov 2025', qty: 300, status: 'Rejected' },
    { id: 'FS004', supplier: 'Royal Weave Imports', fabric: 'Linen (Beige)', date: '05 Feb 2025', qty: 250, status: 'Completed' },
    { id: 'FS005', supplier: 'Ocean Mills Lanka', fabric: 'Polyester Mix', date: '29 Jul 2026', qty: 600, status: 'Processing' },
    { id: 'FS006', supplier: 'SoftTouch Fabrics', fabric: 'Velvet (Black)', date: '15 Aug 2025', qty: 80, status: 'Completed' },
    { id: 'FS007', supplier: 'WeaveCraft Holdings', fabric: 'Rayon (Printed)', date: '21 Dec 2025', qty: 150, status: 'Processing' },
    { id: 'FS008', supplier: 'CottonKing Traders', fabric: 'Cotton (Striped)', date: '30 Apr 2026', qty: 400, status: 'On Hold' },
    { id: 'FS009', supplier: 'FashionTex Suppliers', fabric: 'Knitted Fabric', date: '09 Jan 2026', qty: 350, status: 'In Transit' },
];

const ORDER_STATUSES = ['Completed', 'Processing', 'Rejected', 'On Hold', 'In Transit'];

const getStatusColor = (status) => {
    switch (status) {
        case 'Completed': return 'bg-emerald-100 text-emerald-600';
        case 'Processing': return 'bg-purple-100 text-purple-600';
        case 'Rejected': return 'bg-rose-100 text-rose-600';
        case 'On Hold': return 'bg-orange-100 text-orange-600';
        case 'In Transit': return 'bg-fuchsia-100 text-fuchsia-600'; // closest match to pink/purple in image
        default: return 'bg-neutral-100 text-neutral-600';
    }
};

export default function SupplierOrders({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Filter States
    const [activeDropdown, setActiveDropdown] = useState(null); // 'date', 'type', 'status'
    const [selectedDate, setSelectedDate] = useState('Date');
    const [selectedStatus, setSelectedStatus] = useState([]);

    // Calendar State
    const [calMonth, setCalMonth] = useState('February 2025');
    // Simple calendar grid for Feb 2025 (Starts Saturday)
    const calendarDays = [
        { day: '', id: 'empty1' }, { day: '', id: 'empty2' }, { day: '', id: 'empty3' }, { day: '', id: 'empty4' }, { day: '', id: 'empty5' }, { day: '', id: 'empty6' },
        { day: 1, id: 1 }, { day: 2, id: 2 }, { day: 3, id: 3 }, { day: 4, id: 4 }, { day: 5, id: 5 }, { day: 6, id: 6 }, { day: 7, id: 7 },
        { day: 8, id: 8 }, { day: 9, id: 9 }, { day: 10, id: 10 }, { day: 11, id: 11 }, { day: 12, id: 12 }, { day: 13, id: 13 }, { day: 14, id: 14 },
        { day: 15, id: 15 }, { day: 16, id: 16 }, { day: 17, id: 17 }, { day: 18, id: 18 }, { day: 19, id: 19 }, { day: 20, id: 20 }, { day: 21, id: 21 },
        { day: 22, id: 22 }, { day: 23, id: 23 }, { day: 24, id: 24 }, { day: 25, id: 25 }, { day: 26, id: 26 }, { day: 27, id: 27 }, { day: 28, id: 28 }
    ];
    const [tempSelectedDates, setTempSelectedDates] = useState([14]); // Pre-select 14th

    // Click Outside Handling
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) setActiveDropdown(null);
        else setActiveDropdown(name);
    };

    const toggleStatusSelection = (status) => {
        if (selectedStatus.includes(status)) {
            setSelectedStatus(selectedStatus.filter(s => s !== status));
        } else {
            setSelectedStatus([...selectedStatus, status]);
        }
    };

    const toggleDateSelection = (day) => {
        if (!day) return;
        if (tempSelectedDates.includes(day)) {
            setTempSelectedDates(tempSelectedDates.filter(d => d !== day));
        } else {
            setTempSelectedDates([...tempSelectedDates, day]);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <SupplierSidebar
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
                    <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-neutral-100 dark:border-white/10 p-1 mb-8 flex flex-wrap items-center relative transition-colors" ref={dropdownRef}>
                        {/* Filter Icon & Label */}
                        <div className="flex items-center gap-3 px-6 py-3 border-r border-neutral-100 dark:border-white/10">
                            <Filter size={18} className="text-neutral-900 dark:text-white" />
                            <span className="text-sm font-bold text-neutral-900 dark:text-white">Filter By</span>
                        </div>

                        {/* Date Filter */}
                        <div className="relative border-r border-neutral-100 dark:border-white/10 h-full">
                            <button
                                onClick={() => toggleDropdown('date')}
                                className="px-6 py-3 flex items-center gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors h-full outline-none"
                            >
                                <span className="text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap">{selectedDate === 'Date' ? 'Date' : selectedDate}</span>
                                <ChevronDown size={14} className={cn("text-neutral-400 transition-transform", activeDropdown === 'date' ? "rotate-180" : "")} />
                            </button>

                            {/* Date Picker Dropdown */}
                            {activeDropdown === 'date' && (
                                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-white/5 rounded-2xl shadow-2xl border border-neutral-100 dark:border-white/10 p-6 w-[340px] z-50 animate-fade-in-up">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-bold text-neutral-900 dark:text-white">{calMonth}</h3>
                                        <div className="flex gap-1">
                                            <button className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"><ChevronLeft size={16} className="text-neutral-400" /></button>
                                            <button className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"><ChevronRight size={16} className="text-neutral-400" /></button>
                                        </div>
                                    </div>

                                    {/* Days Header */}
                                    <div className="grid grid-cols-7 mb-2 text-center">
                                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                            <div key={i} className="text-xs font-semibold text-neutral-400 py-1">{d}</div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-1 mb-6 text-center">
                                        {calendarDays.map((date, index) => (
                                            <div key={index}
                                                onClick={() => toggleDateSelection(date.day)}
                                                className={cn(
                                                    "text-sm w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all",
                                                    !date.day ? "pointer-events-none" : "hover:bg-neutral-50 dark:hover:bg-neutral-800",
                                                    tempSelectedDates.includes(date.day) ? "bg-black dark:bg-blue-600 text-white shadow-lg shadow-black/20 dark:shadow-none hover:bg-neutral-900 dark:hover:bg-blue-700" : "text-neutral-600 dark:text-neutral-300"
                                                )}
                                            >
                                                {date.day}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-xs text-neutral-400">*You can choose multiple date</p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedDate(tempSelectedDates.length > 0 ? "14 Feb 2025" : "Date"); // Mock logic
                                            setActiveDropdown(null);
                                        }}
                                        className="w-full bg-black dark:bg-blue-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-neutral-900 dark:hover:bg-blue-700 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Order Type Filter */}
                        <div className="relative border-r border-neutral-100 dark:border-white/10 h-full">
                            <button
                                onClick={() => toggleDropdown('type')}
                                className="px-6 py-3 flex items-center gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors h-full outline-none"
                            >
                                <span className="text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap">Order Type</span>
                                <ChevronDown size={14} className={cn("text-neutral-400 transition-transform", activeDropdown === 'type' ? "rotate-180" : "")} />
                            </button>
                            {/* Dropdown Content */}
                            {activeDropdown === 'type' && (
                                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-white/5 rounded-xl shadow-xl border border-neutral-100 dark:border-white/10 w-48 z-50 overflow-hidden">
                                    <div className="p-2">
                                        {['Bulk', 'Sample', 'Urgent'].map(type => (
                                            <div key={type} className="px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg text-sm font-medium cursor-pointer text-neutral-700 dark:text-neutral-200">
                                                {type}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Order Status Filter */}
                        <div className="relative border-r border-neutral-100 dark:border-white/10 h-full">
                            <button
                                onClick={() => toggleDropdown('status')}
                                className="px-6 py-3 flex items-center gap-8 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors h-full outline-none"
                            >
                                <span className="text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap">Order Status</span>
                                <ChevronDown size={14} className={cn("text-neutral-400 transition-transform", activeDropdown === 'status' ? "rotate-180" : "")} />
                            </button>

                            {/* Status Dropdown */}
                            {activeDropdown === 'status' && (
                                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-white/5 rounded-2xl shadow-2xl border border-neutral-100 dark:border-white/10 p-6 w-[400px] z-50 animate-fade-in-up">
                                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-4">Select Order Status</h3>

                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {ORDER_STATUSES.map(status => (
                                            <button
                                                key={status}
                                                onClick={() => toggleStatusSelection(status)}
                                                className={cn(
                                                    "px-5 py-2.5 rounded-full text-xs font-bold border transition-all",
                                                    selectedStatus.includes(status)
                                                        ? "bg-black dark:bg-blue-600 text-white dark:text-white border-black dark:border-blue-600 shadow-lg shadow-black/20 dark:shadow-none"
                                                        : "bg-white dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                                                )}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-xs text-neutral-400">*You can choose multiple Order status</p>
                                    </div>

                                    <button
                                        onClick={() => setActiveDropdown(null)}
                                        className="w-full bg-black dark:bg-blue-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-neutral-900 dark:hover:bg-blue-700 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Reset Filter */}
                        <div className="relative h-full">
                            <button
                                onClick={() => {
                                    setSelectedDate('Date');
                                    setSelectedStatus([]);
                                    setTempSelectedDates([]);
                                }}
                                className="px-6 py-3 flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors h-full outline-none text-rose-500"
                            >
                                <RotateCcw size={14} />
                                <span className="text-sm font-bold whitespace-nowrap">Reset Filter</span>
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 overflow-hidden transition-colors">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white dark:bg-white/5 text-neutral-800 dark:text-white text-xs font-bold border-b border-neutral-100 dark:border-white/10 transition-colors">
                                        <th className="px-8 py-5">OrderID</th>
                                        <th className="px-8 py-5">SupplierName</th>
                                        <th className="px-8 py-5">FabricType</th>
                                        <th className="px-8 py-5">DeliveryDate</th>
                                        <th className="px-8 py-5">Quantity (Meters)</th>
                                        <th className="px-8 py-5">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                    {MOCK_ORDERS.map((order, index) => (
                                        <tr key={order.id} className="border-b border-neutral-50 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                            <td className="px-8 py-6 text-neutral-900 dark:text-white font-bold">{order.id}</td>
                                            <td className="px-8 py-6 text-neutral-700 dark:text-neutral-300">{order.supplier}</td>
                                            <td className="px-8 py-6">{order.fabric}</td>
                                            <td className="px-8 py-6">{order.date}</td>
                                            <td className="px-8 py-6">{order.qty}</td>
                                            <td className="px-8 py-6">
                                                <span className={cn("px-4 py-1.5 rounded-sm font-bold min-w-[90px] inline-block text-center", getStatusColor(order.status))}>
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
