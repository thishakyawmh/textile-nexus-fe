import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter,
    RefreshCw,
    ChevronLeft,
    ChevronRight,
    X
} from 'lucide-react';
import { cn } from '../../lib/utils';
import DesignerSidebar from './DesignerSidebar';

// --- Mock Data ---

const ORDER_LIST = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'T shirt', status: 'Completed' },
    { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Frock', status: 'Processing' },
    { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Skirt', status: 'Rejected' },
    { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Frock', status: 'Completed' },
    { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Dress', status: 'Processing' },
    { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '15 Aug 2019', type: 'Frock', status: 'Completed' },
    { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2019', type: 'Frock', status: 'Processing' },
    { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2019', type: 'Blouse', status: 'On Hold' },
    { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2019', type: 'Trousers', status: 'In Transit' },
];


const STATUS_STYLES = {
    'Completed': 'bg-emerald-100 text-emerald-600',
    'Processing': 'bg-violet-100 text-violet-600',
    'Rejected': 'bg-rose-100 text-rose-600',
    'On Hold': 'bg-orange-100 text-orange-600', // Mock 'On Hold' style
    'In Transit': 'bg-fuchsia-100 text-fuchsia-600' // Mock 'In Transit' style
};

export default function DesignerOrders({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Filters Logic (Reused primarily from SupplierOrders)
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
        <div className="min-h-screen bg-[#F8F9FE] flex font-sans text-neutral-900">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
                activePage="order"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onNavigate={onNavigate}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-neutral-100 flex items-center justify-between px-6 lg:px-10 shrink-0">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-neutral-500">
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center bg-[#F9FAFB] rounded-xl px-4 py-2.5 w-96">
                        <Search size={18} className="text-neutral-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-neutral-400 text-neutral-700"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 cursor-pointer">
                            <div className="w-5 h-5 rounded-full bg-neutral-200 overflow-hidden">
                                <img src="/images/usa.png" alt="US" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                            </div>
                            <span className="text-sm font-semibold text-neutral-600">Eng (US)</span>
                            <ChevronDown size={14} className="text-neutral-400" />
                        </div>
                        <button className="relative p-2 bg-orange-50 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold overflow-hidden border-2 border-white shadow-sm">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-3xl font-bold text-neutral-900 mb-8">Order Lists</h1>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center gap-3 mb-8 bg-[#F8F9FE] sticky top-0 z-10 pb-4">
                        <div className="p-2 bg-white border border-neutral-200 rounded-lg">
                            <Filter size={18} className="text-neutral-500" />
                        </div>
                        <div className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-bold text-neutral-700">Filter By</div>

                        {/* Date Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleFilter('date')}
                                className={cn(
                                    "flex items-center gap-6 px-4 py-2 border rounded-lg text-sm font-semibold min-w-[140px] justify-between transition-colors",
                                    openFilter === 'date' ? "bg-black text-white border-black" : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                                )}
                            >
                                <span>{selectedDate ? selectedDate : "Date"}</span>
                                <ChevronDown size={14} />
                            </button>
                            {openFilter === 'date' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 p-4 z-20 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-bold text-sm">Select Date</span>
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
                                                className="w-full h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 cursor-pointer text-neutral-600 hover:text-black"
                                            >
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Order Type Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleFilter('type')}
                                className={cn(
                                    "flex items-center gap-6 px-4 py-2 border rounded-lg text-sm font-semibold min-w-[140px] justify-between transition-colors",
                                    openFilter === 'type' ? "bg-black text-white border-black" : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                                )}
                            >
                                <span>Order Type</span>
                                <ChevronDown size={14} />
                            </button>
                            {openFilter === 'type' && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-100 p-2 z-20 animate-in fade-in zoom-in-95 duration-200">
                                    {['T shirt', 'Frock', 'Skirt', 'Dress', 'Blouse', 'Trousers'].map(type => (
                                        <div
                                            key={type}
                                            onClick={() => setOpenFilter(null)}
                                            className="px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors"
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Order Status Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleFilter('status')}
                                className={cn(
                                    "flex items-center gap-6 px-4 py-2 border rounded-lg text-sm font-semibold min-w-[160px] justify-between transition-colors",
                                    openFilter === 'status' ? "bg-black text-white border-black" : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                                )}
                            >
                                <span>{selectedStatus.length > 0 ? `${selectedStatus.length} Selected` : "Order Status"}</span>
                                <ChevronDown size={14} />
                            </button>
                            {openFilter === 'status' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 p-2 z-20 animate-in fade-in zoom-in-95 duration-200">
                                    {['Completed', 'Processing', 'Rejected', 'On Hold', 'In Transit'].map(status => (
                                        <div
                                            key={status}
                                            onClick={() => toggleStatus(status)}
                                            className={cn(
                                                "flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium mb-1 transition-colors",
                                                selectedStatus.includes(status) ? "bg-black text-white" : "text-neutral-600 hover:bg-neutral-50"
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
                            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-lg transition-colors ml-auto"
                        >
                            <RefreshCw size={14} /> Reset Filter
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#fff] border-b border-neutral-100 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                                        <th className="px-8 py-5">ID</th>
                                        <th className="px-8 py-5">NAME</th>
                                        <th className="px-8 py-5">ADDRESS</th>
                                        <th className="px-8 py-5">DATE</th>
                                        <th className="px-8 py-5">TYPE</th>
                                        <th className="px-8 py-5">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium text-neutral-600">
                                    {ORDER_LIST.map((order, index) => (
                                        <tr key={order.id} className="border-b border-neutral-50 last:border-none hover:bg-neutral-50 transition-colors">
                                            <td className="px-8 py-5 text-neutral-900 font-semibold">{order.id}</td>
                                            <td className="px-8 py-5 text-neutral-900">{order.name}</td>
                                            <td className="px-8 py-5">{order.address}</td>
                                            <td className="px-8 py-5">{order.date}</td>
                                            <td className="px-8 py-5 text-neutral-900">{order.type}</td>
                                            <td className="px-8 py-5">
                                                <span className={`px-4 py-1.5 rounded-sm text-[10px] font-bold ${STATUS_STYLES[order.status] || 'bg-neutral-100 text-neutral-500'}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="flex items-center justify-between px-8 py-6 border-t border-neutral-100">
                            <p className="text-xs text-neutral-400">Showing 1-09 of 78</p>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 hover:bg-neutral-50 transition-colors">
                                    <ChevronLeft size={14} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 hover:bg-neutral-50 transition-colors">
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
