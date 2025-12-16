import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Users,
    Package,
    TrendingUp,
    TrendingDown,
    History
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, AreaChart, Area
} from 'recharts';
import TailorSidebar from './TailorSidebar';
import { useTheme } from '../../context/ThemeContext';

const STATS = [
    { label: 'Total User', value: '40,689', change: 8.5, trend: 'up', icon: <Users size={20} className="text-purple-600" />, iconBg: 'bg-purple-100' },
    { label: 'Total Order', value: '10293', change: 1.3, trend: 'up', icon: <Package size={20} className="text-amber-600" />, iconBg: 'bg-amber-100' },
    { label: 'Total Sales', value: '$89,000', change: 4.3, trend: 'down', icon: <TrendingUp size={20} className="text-emerald-600" />, iconBg: 'bg-emerald-100' },
    { label: 'Total Pending', value: '2040', change: 1.8, trend: 'up', icon: <History size={20} className="text-orange-600" />, iconBg: 'bg-orange-100' },
];

const VISITOR_DATA = [
    { name: 'Jan', loyal: 250, new: 180, unique: 150 },
    { name: 'Feb', loyal: 300, new: 220, unique: 190 },
    { name: 'Mar', loyal: 280, new: 200, unique: 170 },
    { name: 'Apr', loyal: 220, new: 150, unique: 130 },
    { name: 'May', loyal: 200, new: 130, unique: 110 },
    { name: 'Jun', loyal: 250, new: 180, unique: 160 },
    { name: 'Jul', loyal: 320, new: 250, unique: 230 },
    { name: 'Sept', loyal: 290, new: 210, unique: 200 },
    { name: 'Oct', loyal: 250, new: 180, unique: 160 },
    { name: 'Nov', loyal: 180, new: 120, unique: 100 },
    { name: 'Dec', loyal: 150, new: 100, unique: 80 },
];

const REVENUE_DATA = [
    { name: 'Monday', online: 14, offline: 12 },
    { name: 'Tuesday', online: 17, offline: 11 },
    { name: 'Wednesday', online: 6, offline: 23 },
    { name: 'Thursday', online: 18, offline: 7 },
    { name: 'Friday', online: 12, offline: 11 },
    { name: 'Saturday', online: 17, offline: 13 },
    { name: 'Sunday', online: 21, offline: 11 },
];

const SATISFACTION_DATA = [
    { value: 50 }, { value: 60 }, { value: 55 }, { value: 70 }, { value: 55 }, { value: 58 }, { value: 65 }, { value: 50 }, { value: 40 }, { value: 80 }
];

const TOP_PRODUCTS = [
    { id: 1, name: 'Bespoke Suit Tailoring', popularity: 45, sales: '45%' },
    { id: 2, name: 'Custom Dress/Gown Orders', popularity: 29, sales: '29%' },
    { id: 3, name: 'Trousers & Skirt Alterations', popularity: 18, sales: '18%' },
    { id: 4, name: 'Luxury Shirt Commissions', popularity: 25, sales: '25%' },
];

export default function TailorDashboard({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <TailorSidebar
                activePage="dashboard"
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

                <div className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-hide">

                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Dashboard</h1>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm font-semibold mt-1">Today's Sales</p>
                            <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">Sales Summery</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-600 font-medium hover:bg-neutral-50">
                            <TrendingUp size={16} /> Export
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                        {STATS.map((stat, i) => (
                            <div key={i} className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-5 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm relative overflow-hidden transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400">{stat.label}</p>
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</h3>
                                    </div>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold">
                                    <span className={stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}>
                                        {stat.trend === 'up' ? <TrendingUp size={12} className="inline mr-1" /> : <TrendingDown size={12} className="inline mr-1" />}
                                        {stat.change}%
                                    </span>
                                    <span className="text-neutral-400 dark:text-neutral-500">{stat.trend === 'up' ? 'Up from yesterday' : 'Down from yesterday'}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Charts Row */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

                        {/* Visitor Insights */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-6">Visitor Insights</h3>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={VISITOR_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} />
                                        <XAxis dataName="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Line type="monotone" dataKey="loyal" stroke="#8b5cf6" strokeWidth={3} dot={false} />
                                        <Line type="monotone" dataKey="new" stroke="#ef4444" strokeWidth={3} dot={false} />
                                        <Line type="monotone" dataKey="unique" stroke="#22c55e" strokeWidth={3} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div> Loyal Customers
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                                    <div className="w-3 h-3 bg-red-500 rounded-sm"></div> New Customers
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div> Unique Customers
                                </div>
                            </div>
                        </div>

                        {/* Total Revenue */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-6">Total Revenue</h3>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={REVENUE_DATA} barGap={8}>
                                        <XAxis dataName="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                        <Bar dataKey="online" fill="#0ea5e9" radius={[4, 4, 4, 4]} barSize={8} />
                                        <Bar dataKey="offline" fill="#22c55e" radius={[4, 4, 4, 4]} barSize={8} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex justify-center gap-6 mt-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                                    <div className="w-2 h-2 rounded-full bg-sky-500"></div> Online Sales
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Offline Sales
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        {/* Customer Satisfaction */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Customer Satisfaction</h3>
                            <div className="h-[200px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={SATISFACTION_DATA}>
                                        <defs>
                                            <linearGradient id="colorSat" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                        <Area type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorSat)" />
                                        {/* Mocking the 'points' on the wave */}
                                        {SATISFACTION_DATA.map((d, i) => (
                                            <circle key={i} cx={`${(i / (SATISFACTION_DATA.length - 1)) * 100}%`} cy={200 - (d.value * 2)} r={4} fill="#0ea5e9" />
                                        ))}
                                        {/* Since I can't easily inject circles into AreaChart without CustomDot, I'll rely on Area's default or simple line */}
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Top Products */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-6">Top Products</h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-12 text-xs text-neutral-400 mb-2 uppercase tracking-wide">
                                    <div className="col-span-1">#</div>
                                    <div className="col-span-5">Name</div>
                                    <div className="col-span-4">Popularity</div>
                                    <div className="col-span-2 text-right">Sales</div>
                                </div>

                                {TOP_PRODUCTS.map((prod) => (
                                    <div key={prod.id} className="grid grid-cols-12 items-center text-sm">
                                        <div className="col-span-1 text-neutral-500 dark:text-neutral-400 font-medium">0{prod.id}</div>
                                        <div className="col-span-5 text-neutral-700 dark:text-neutral-200 font-medium truncate pr-2">{prod.name}</div>
                                        <div className="col-span-4">
                                            <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${prod.id === 1 ? 'bg-sky-500' : prod.id === 2 ? 'bg-emerald-500' : prod.id === 3 ? 'bg-purple-500' : 'bg-orange-500'}`}
                                                    style={{ width: `${prod.popularity}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-bold border ${prod.id === 1 ? 'border-sky-200 text-sky-600 bg-sky-50' :
                                                    prod.id === 2 ? 'border-emerald-200 text-emerald-600 bg-emerald-50' :
                                                        prod.id === 3 ? 'border-purple-200 text-purple-600 bg-purple-50' :
                                                            'border-orange-200 text-orange-600 bg-orange-50'
                                                    }`}
                                            >
                                                {prod.sales}
                                            </span>
                                        </div>
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
