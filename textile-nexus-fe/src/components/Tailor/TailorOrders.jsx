import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter,
    RefreshCcw,
    ChevronLeft,
    ChevronRight,
    Briefcase,
    Scissors,
    Folder,
    Truck,
    CheckCircle2,
    Calendar,
    Clock
} from 'lucide-react';
import TailorSidebar from './TailorSidebar';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

const STATS = [
    { label: 'Total Orders This Month', value: '128', icon: <img src="" alt="img" className="w-5" />, isTrend: true },
    { label: 'Pending Measurements', value: '15', icon: <Scissors size={20} className="text-neutral-400" /> },
    { label: 'Fabric Not Yet Ordered', value: '8', icon: <Folder size={20} className="text-neutral-400" /> },
    { label: 'Pending Not Yet Ordered', value: '21', icon: <Folder size={20} className="text-neutral-400" /> },
    { label: 'In Production', value: '42', icon: <Briefcase size={20} className="text-neutral-400" /> }, // Icon looks like a dress form actually, using Briefcase as placeholder or better icon if found.
    { label: 'Ready for Pickup/Delivery', value: '5', icon: <Truck size={20} className="text-neutral-400" /> },
];

const ORDERS = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2025', type: 'Formal Blouse', status: 'Completed', statusColor: 'bg-emerald-100 text-emerald-600' },
    { id: '00002', name: 'Rosie Pearson', status: 'Processing', address: '979 Immanuel Ferry Suite 526', date: '28 May 2025', type: 'Tailored Dress Shirt', statusColor: 'bg-purple-100 text-purple-600' },
    { id: '00003', name: 'Darrell Caldwell', status: 'Alteration Request', address: '8587 Frida Ports', date: '23 Nov 2025', type: 'Tailored Trousers', statusColor: 'bg-rose-100 text-rose-600' },
    { id: '00004', name: 'Gilbert Johnston', status: 'Completed', address: '768 Destiny Lake Suite 600', date: '05 Feb 2025', type: 'Party Wear', statusColor: 'bg-emerald-100 text-emerald-600' },
    { id: '00005', name: 'Alan Cain', status: 'Processing', address: '042 Mylene Throughway', date: '29 Jul 2025', type: 'Formal Blouse', statusColor: 'bg-purple-100 text-purple-600' },
    { id: '00006', name: 'Alfred Murray', status: 'Completed', address: '543 Weimann Mountain', date: '15 Aug 2025', type: 'Formal Blouse', statusColor: 'bg-emerald-100 text-emerald-600' },
    { id: '00007', name: 'Maggie Sullivan', status: 'Processing', address: 'New York, USA', date: '21 Sep 2025', type: 'Party Wear', statusColor: 'bg-purple-100 text-purple-600' },
];

const GARMENT_TYPES = [
    'Formal Blouse', 'Saree Jacket', 'Tailored Dress Shirt',
    'Party Wear', 'Lehenga Skirt', 'Tailored Trousers',
    'Custom Skirt', 'Tailored Jacket'
];

const ORDER_STATUSES = [
    'Completed', 'Processing', 'Ready for Delivery',
    'Alteration Request', 'Pending Measurements'
];

const CalendarPopover = ({ onClose }) => (
    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-white/5 rounded-xl shadow-xl border border-neutral-100 dark:border-white/10 p-4 w-72 z-50 animate-in fade-in zoom-in-95 transition-colors">
        <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-sm text-neutral-900 dark:text-white">February 2025</span>
            <div className="flex gap-1">
                <button className="p-1 hover:bg-neutral-100 rounded"><ChevronLeft size={14} /></button>
                <button className="p-1 hover:bg-neutral-100 rounded"><ChevronRight size={14} /></button>
            </div>
        </div>
        <div className="grid grid-cols-7 text-center text-xs mb-2 text-neutral-400 font-medium">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
        </div>
        <div className="grid grid-cols-7 text-center text-xs gap-y-3 font-medium text-neutral-600 dark:text-neutral-300">
            <div className="text-neutral-300 dark:text-neutral-600">27</div>
            <div className="text-neutral-300 dark:text-neutral-600">28</div>
            <div className="text-neutral-300 dark:text-neutral-600">29</div>
            <div className="text-neutral-300 dark:text-neutral-600">30</div>
            <div>1</div><div>2</div><div>3</div>
            <div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
            <div>11</div><div>12</div><div>13</div>
            <div className="bg-black dark:bg-white text-white dark:text-black rounded-full w-6 h-6 flex items-center justify-center mx-auto">14</div>
            <div>15</div><div>16</div><div>17</div>
            <div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div>
            <div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div>31</div>
        </div>
        <div className="mt-4 pt-3 border-t border-neutral-50 dark:border-white/10">
            <p className="text-[10px] text-neutral-400 mb-3">*You can choose multiple date</p>
            <button
                onClick={onClose}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
                Apply Now
            </button>
        </div>
    </div>
);

const GarmentTypePopover = ({ onClose }) => (
    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-white/5 rounded-2xl shadow-xl border border-neutral-100 dark:border-white/10 p-6 w-[400px] z-50 animate-in fade-in zoom-in-95 transition-colors">
        <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-4">Select Garmant Type</h3>
        <div className="flex flex-wrap gap-2 mb-6">
            {GARMENT_TYPES.map((type) => (
                <button
                    key={type}
                    className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                    {type}
                </button>
            ))}
        </div>
        <div className="pt-4 border-t border-neutral-50 dark:border-white/10">
            <p className="text-[10px] text-neutral-400 mb-3">*You can choose multiple Garmant type</p>
            <button
                onClick={onClose}
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
                Apply Now
            </button>
        </div>
    </div>
);

const OrderStatusPopover = ({ onClose }) => (
    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-white/5 rounded-2xl shadow-xl border border-neutral-100 dark:border-white/10 p-6 w-[400px] z-50 animate-in fade-in zoom-in-95 transition-colors">
        <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-4">Select Order Status</h3>
        <div className="flex flex-wrap gap-2 mb-6">
            {ORDER_STATUSES.map((status) => (
                <button
                    key={status}
                    className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                    {status}
                </button>
            ))}
        </div>
        <div className="pt-4 border-t border-neutral-50 dark:border-white/10">
            <p className="text-[10px] text-neutral-400 mb-3">*You can choose multiple Order Status</p>
            <button
                onClick={onClose}
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
                Apply Now
            </button>
        </div>
    </div>
);

export default function TailorOrders({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showGarmentType, setShowGarmentType] = useState(false);
    const [showOrderStatus, setShowOrderStatus] = useState(false);

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <TailorSidebar
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
                            <div className="w-5 h-5 rounded-full bg-neutral-200 overflow-hidden">
                                <img src="/images/usa.png" alt="US" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                            </div>
                            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">Eng (US)</span>
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

                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Order Dashboard Overview</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {STATS.map((stat, i) => (
                            <div key={i} className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm flex items-center justify-between relative transition-colors">
                                <div>
                                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{stat.label}</p>
                                </div>
                                <div>
                                    {stat.isTrend ? (
                                        <TrendingUp size={24} className="text-neutral-400" />
                                    ) : ( // Reusing TrendingUp temporarily if no icon, but I used specific icons in STATS array.
                                        stat.icon
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Order Lists</h2>

                    <div className="bg-white dark:bg-white/5 rounded-3xl border border-neutral-100 dark:border-white/10 shadow-sm overflow-hidden transition-colors">

                        {/* Filter Bar */}
                        <div className="p-4 border-b border-neutral-100 dark:border-white/10 flex flex-wrap items-center gap-4 bg-[#F9FAFB] dark:bg-neutral-800 transition-colors">
                            <button className="p-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <Filter size={18} />
                            </button>

                            <div className="flex items-center px-4 py-2 bg-[#F3F4F6] dark:bg-neutral-700 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-300 transition-colors">
                                Filter By
                            </div>

                            {/* Delivery Deadline Dropdown with Calendar */}
                            <div className="relative">
                                <button
                                    onClick={() => { setShowCalendar(!showCalendar); setShowGarmentType(false); setShowOrderStatus(false); }}
                                    className="flex items-center gap-8 px-4 py-2 bg-[#F3F4F6] dark:bg-neutral-700 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                                >
                                    Delivery Deadline <ChevronDown size={14} />
                                </button>
                                {showCalendar && <CalendarPopover onClose={() => setShowCalendar(false)} />}
                            </div>

                            {/* Garment Type Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => { setShowGarmentType(!showGarmentType); setShowCalendar(false); setShowOrderStatus(false); }}
                                    className="flex items-center gap-8 px-4 py-2 bg-[#F3F4F6] dark:bg-neutral-700 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                                >
                                    Garmant Type <ChevronDown size={14} />
                                </button>
                                {showGarmentType && <GarmentTypePopover onClose={() => setShowGarmentType(false)} />}
                            </div>

                            {/* Order Status Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => { setShowOrderStatus(!showOrderStatus); setShowCalendar(false); setShowGarmentType(false); }}
                                    className="flex items-center gap-8 px-4 py-2 bg-[#F3F4F6] dark:bg-neutral-700 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                                >
                                    Order Status <ChevronDown size={14} />
                                </button>
                                {showOrderStatus && <OrderStatusPopover onClose={() => setShowOrderStatus(false)} />}
                            </div>

                            <button className="flex items-center gap-2 px-4 py-2 text-rose-500 font-bold text-xs hover:bg-rose-50 rounded-lg ml-auto">
                                <RefreshCcw size={14} /> Reset Filter
                            </button>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-neutral-100 dark:border-white/10">
                                        <th className="px-6 py-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Address</th>
                                        <th className="px-6 py-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Delivery Date</th>
                                        <th className="px-6 py-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Garmant Type</th>
                                        <th className="px-6 py-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ORDERS.map((order, i) => (
                                        <tr key={i} className="border-b border-neutral-50 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                            <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400 font-medium">{order.id}</td>
                                            <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white font-bold">{order.name}</td>
                                            <td className="px-6 py-4 text-xs text-neutral-600 dark:text-neutral-400 font-medium max-w-[200px] truncate">{order.address}</td>
                                            <td className="px-6 py-4 text-xs text-neutral-600 dark:text-neutral-400 font-medium">{order.date}</td>
                                            <td className="px-6 py-4 text-xs text-neutral-600 dark:text-neutral-400 font-medium">{order.type}</td>
                                            <td className="px-6 py-4">
                                                <span className={cn("px-3 py-1 rounded text-[10px] font-bold inline-block min-w-[80px] text-center", order.statusColor)}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="p-4 flex items-center justify-between border-t border-neutral-100 dark:border-white/10">
                            <span className="text-xs text-neutral-400 font-medium">Showing 1-09 of 78</span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                                    <ChevronLeft size={16} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

// Helper icons needed imports
function TrendingUp({ size, className }) { return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> }
