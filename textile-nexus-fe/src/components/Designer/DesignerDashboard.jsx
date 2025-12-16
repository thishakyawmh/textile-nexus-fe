import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Download,
    Users,
    ShoppingBag,
    TrendingUp,
    TrendingDown,
    RotateCcw
} from 'lucide-react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Legend
} from 'recharts';
import DesignerSidebar from './DesignerSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const VISITOR_INSIGHTS_DATA = [
    { name: 'Jan', loyal: 250, new: 300, unique: 200 },
    { name: 'Feb', loyal: 280, new: 250, unique: 220 },
    { name: 'Mar', loyal: 220, new: 200, unique: 280 },
    { name: 'Apr', loyal: 180, new: 130, unique: 230 },
    { name: 'May', loyal: 200, new: 160, unique: 180 },
    { name: 'Jun', loyal: 250, new: 220, unique: 240 },
    { name: 'Jul', loyal: 300, new: 360, unique: 280 }, // Peak
    { name: 'Sept', loyal: 280, new: 300, unique: 310 }, // typo in image 'Sept' after Jul? Maybe Aug skipped or just mock labels
    { name: 'Oct', loyal: 240, new: 280, unique: 260 },
    { name: 'Nov', loyal: 180, new: 210, unique: 200 },
    { name: 'Dec', loyal: 150, new: 180, unique: 160 },
];

const REVENUE_DATA = [
    { name: 'Monday', online: 14000, offline: 12000 },
    { name: 'Tuesday', online: 17000, offline: 11000 },
    { name: 'Wednesday', online: 6000, offline: 23000 },
    { name: 'Thursday', online: 16000, offline: 7000 },
    { name: 'Friday', online: 12000, offline: 11000 },
    { name: 'Saturday', online: 17000, offline: 14000 },
    { name: 'Sunday', online: 21000, offline: 11000 },
];

const SATISFACTION_DATA = [
    { x: 1, y: 70 },
    { x: 2, y: 65 },
    { x: 3, y: 72 },
    { x: 4, y: 60 },
    { x: 5, y: 55 },
    { x: 6, y: 80 },
    { x: 7, y: 65 },
    { x: 8, y: 90 },
];

const POPULAR_DESIGNS = [
    { id: '01', name: 'Garden Whisper', popularity: 70, sales: '70%' },
    { id: '02', name: 'Misty Motion', popularity: 65, sales: '65%' },
    { id: '03', name: 'Floral Breeze', popularity: 52, sales: '52%' },
    { id: '04', name: 'Rose Mist', popularity: 25, sales: '25%' },
];

const StatCard = ({ title, value, subIcon: Icon, subColor, trend, trendVal, trendLabel }) => (
    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-50 dark:border-white/10 flex flex-col justify-between h-40 transition-all duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xs font-semibold text-neutral-500 mb-2">{title}</h3>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</h2>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${subColor}`}>
                <Icon size={20} className="text-white opacity-80" />
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
            {trend === 'up' ?
                <TrendingUp size={16} className="text-emerald-500" /> :
                <TrendingDown size={16} className="text-rose-500" />
            }
            <span className={`text-xs font-bold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {trendVal}
            </span>
            <span className="text-xs text-neutral-400 font-medium">{trendLabel}</span>
        </div>
    </div>
);


export default function DesignerDashboard({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F9FE] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
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

                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">Dashboard</h1>
                            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-300">Today's Sales</p>
                            <p className="text-xs text-neutral-400">Sales Summery</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg text-sm font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors">
                            <Download size={16} /> Export
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                            title="Total Designs Uploaded"
                            value="40,689"
                            subIcon={Users}
                            subColor="bg-indigo-100 text-indigo-500"
                            trend="up"
                            trendVal="8.5%"
                            trendLabel="Up from yesterday"
                        />
                        <StatCard
                            title="Total Order"
                            value="10293"
                            subIcon={ShoppingBag}
                            subColor="bg-amber-100 text-amber-500"
                            trend="up"
                            trendVal="1.3%"
                            trendLabel="Up from past week"
                        />
                        <StatCard
                            title="Total Sales"
                            value="$89,000"
                            subIcon={TrendingUp}
                            subColor="bg-emerald-100 text-emerald-500"
                            trend="down"
                            trendVal="4.3%"
                            trendLabel="Down from yesterday"
                        />
                        <StatCard
                            title="Total Pending"
                            value="2040"
                            subIcon={RotateCcw}
                            subColor="bg-orange-100 text-orange-500"
                            trend="up"
                            trendVal="1.8%"
                            trendLabel="Up from yesterday"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Visitor Insights */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-50 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Visitor Insights</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={VISITOR_INSIGHTS_DATA}>
                                        <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                        <Line type="monotone" dataKey="loyal" stroke="#8b5cf6" strokeWidth={3} dot={false} name="Loyal Customers" />
                                        <Line type="monotone" dataKey="new" stroke="#ef4444" strokeWidth={3} dot={false} name="New Customers" />
                                        <Line type="monotone" dataKey="unique" stroke="#22c55e" strokeWidth={3} dot={false} name="Unique Customers" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex items-center justify-center gap-6 mt-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                                    <div className="w-3 h-3 bg-violet-500 rounded"></div> Loyal Customers
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                                    <div className="w-3 h-3 bg-red-500 rounded"></div> New Customers
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                                    <div className="w-3 h-3 bg-emerald-500 rounded"></div> Unique Customers
                                </div>
                            </div>
                        </div>

                        {/* Total Revenue */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-50 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Total Revenue</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={REVENUE_DATA} barGap={8}>
                                        <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                        <Bar dataKey="online" fill="#0ea5e9" radius={[4, 4, 4, 4]} barSize={8} name="Online Sales" />
                                        <Bar dataKey="offline" fill="#22c55e" radius={[4, 4, 4, 4]} barSize={8} name="Offline Sales" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex items-center justify-center gap-6 mt-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                                    <div className="w-2 h-2 rounded-full bg-sky-500"></div> Online Sales
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Offline Sales
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
                        {/* Customer Satisfaction */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-50 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Customer Satisfaction</h3>
                            <div className="h-48 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={SATISFACTION_DATA}>
                                        <defs>
                                            <linearGradient id="colorSat" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2} />
                                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>

                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                        <Area type="monotone" dataKey="y" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorSat)" />
                                        <Line type="monotone" dataKey="y" stroke="#22c55e" strokeWidth={2} /> {/* The green line overlaid? or just one line? Image shows green dots and blue area line. */}
                                    </AreaChart>
                                </ResponsiveContainer>
                                {/* Custom overlay dots/lines to match exact "double wave" look might be hard with simple AreaChart, 
                                     The image shows a teal line with area and a separate green line? 
                                     I will accept the approximation for now. */}
                            </div>
                        </div>

                        {/* Most Viewed Design */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-50 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Most Viewed Design</h3>

                            <div className="flex items-center justify-between text-xs text-neutral-400 font-medium mb-4 px-2">
                                <span className="w-8">#</span>
                                <span className="flex-1">Name</span>
                                <span className="w-32">Popularity</span>
                                <span className="w-16 text-right">Sales</span>
                            </div>

                            <div className="space-y-6">
                                {POPULAR_DESIGNS.map((item) => (
                                    <div key={item.id} className="flex items-center text-sm font-medium text-neutral-600 px-2 group hover:bg-neutral-50 p-2 rounded-lg transition-colors">
                                        <span className="w-8 text-xs">{item.id}</span>
                                        <span className="flex-1 font-bold text-neutral-800 dark:text-neutral-200">{item.name}</span>
                                        <div className="w-32 pr-4">
                                            <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${item.id === '01' ? 'bg-sky-500' :
                                                        item.id === '02' ? 'bg-emerald-400' :
                                                            item.id === '03' ? 'bg-violet-400' : 'bg-amber-400'
                                                        }`}
                                                    style={{ width: `${item.popularity}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <span className={`w-16 text-right text-xs px-2 py-0.5 rounded border ${item.id === '01' ? 'border-sky-200 text-sky-500 bg-sky-50' :
                                            item.id === '02' ? 'border-emerald-200 text-emerald-500 bg-emerald-50' :
                                                item.id === '03' ? 'border-violet-200 text-violet-500 bg-violet-50' : 'border-amber-200 text-amber-500 bg-amber-50'
                                            }`}>
                                            {item.sales}
                                        </span>
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
