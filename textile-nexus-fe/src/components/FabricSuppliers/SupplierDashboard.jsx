import React, { useState } from 'react';
import {
    Bell,
    ChevronDown,
    Menu,
    Search,
    AlertTriangle,
    Package,
    TrendingUp,
    Clock,
    TrendingDown,
    Truck,
    CheckCircle,
    XCircle,
    Upload
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { cn } from '../../lib/utils';
import SupplierSidebar from './SupplierSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const ORDER_STATUS_DATA = [
    { name: 'Delivered', value: 4200, color: '#10B981' }, // Green
    { name: 'Shipped', value: 120, color: '#3B82F6' }, // Blue
    { name: 'Pending', value: 120, color: '#fbbf24' }, // Yellow
    { name: 'Cancelled', value: 240, color: '#F43F5E' }, // Red
];

const RECENT_ACTIVITY = [
    { id: 1, text: "Order #56781 shipped", time: "2h ago", icon: Truck, color: "text-blue-500", bg: "bg-blue-100" },
    { id: 2, text: "Order #56782 delivered", time: "5h ago", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-100" },
    { id: 3, text: "New order #56783 received", time: "8h ago", icon: Package, color: "text-yellow-500", bg: "bg-yellow-100" },
    { id: 4, text: "Order #56780 cancelled", time: "1d ago", icon: XCircle, color: "text-red-500", bg: "bg-red-100" },
];

const BLACK_CARD_DATA = [
    { value: 20 }, { value: 40 }, { value: 30 }, { value: 50 }, { value: 40 },
    { value: 60 }, { value: 30 }, { value: 50 }, { value: 70 }, { value: 40 }, { value: 80 }
];

const MAIN_GRAPH_DATA = [
    { name: '1', value: 150 }, { name: '5', value: 200 }, { name: '10', value: 180 },
    { name: '15', value: 280 }, { name: '20', value: 250 }, { name: '25', value: 350 }, { name: '30', value: 320 }
];

// --- Sub Components ---

const StatCard = ({ title, value, subtext, trend, trendValue, icon: Icon, colorClass, bgClass }) => (
    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-neutral-500 dark:text-neutral-400 font-semibold text-xs mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</h3>
            </div>
            <div className={cn("p-3 rounded-full flex items-center justify-center", bgClass)}>
                <Icon size={20} className={colorClass} />
            </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold">
            {trend === 'up' ? (
                <span className="text-emerald-500 flex items-center gap-1"><TrendingUp size={14} /> {trendValue}</span>
            ) : (
                <span className="text-rose-500 flex items-center gap-1"><TrendingDown size={14} /> {trendValue}</span>
            )}
            <span className="text-neutral-400 dark:text-neutral-500 font-medium">{subtext}</span>
        </div>
    </div>
);

export default function SupplierDashboard({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F9FE] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <SupplierSidebar
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

                    <div className="hidden lg:block text-2xl font-bold text-neutral-800 dark:text-white">
                        Dashboard
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 cursor-pointer">
                            <img src="" alt="img" className="w-5 h-5 rounded-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                            <span className="text-sm font-semibold text-neutral-600">Eng (US)</span>
                            <ChevronDown size={14} className="text-neutral-400" />
                        </div>
                        <button className="relative p-2 bg-orange-50 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold overflow-hidden">
                                <img src="" alt="img" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = 'SP' }} />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-hide">

                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <h1 className="text-lg font-bold text-neutral-800 dark:text-white">Today's Sales</h1>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">Sales Summery</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-600 dark:text-neutral-300 text-xs font-bold hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm transition-colors">
                                <Upload size={14} />
                                <span>Export</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                        <StatCard
                            title="Low Stock Alerts"
                            value="12"
                            trend="up" trendValue="8.5%" subtext="Up from yesterday"
                            icon={AlertTriangle} colorClass="text-purple-500" bgClass="bg-purple-100"
                        />
                        <StatCard
                            title="Total Order"
                            value="13"
                            trend="up" trendValue="1.3%" subtext="Up from past week"
                            icon={Package} colorClass="text-yellow-500" bgClass="bg-yellow-100"
                        />
                        <StatCard
                            title="Total Sales"
                            value="LKR 89,000"
                            trend="down" trendValue="4.3%" subtext="Down from yesterday"
                            icon={TrendingUp} colorClass="text-emerald-500" bgClass="bg-emerald-100"
                        />
                        <StatCard
                            title="Pending Orders"
                            value="25"
                            trend="up" trendValue="1.8%" subtext="Up from yesterday"
                            icon={Clock} colorClass="text-orange-500" bgClass="bg-orange-100"
                        />
                    </div>

                    {/* Middle Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

                        {/* Order Status Overview */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6">Order Status Overview</h3>
                            <div className="flex items-center">
                                <div className="w-48 h-48 relative flex-shrink-0">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={ORDER_STATUS_DATA}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={0}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {ORDER_STATUS_DATA.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-2xl font-bold text-neutral-900 dark:text-white">4,560</span>
                                        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Total Orders</span>
                                    </div>
                                </div>
                                <div className="ml-6 space-y-4 flex-1">
                                    {ORDER_STATUS_DATA.map((item) => (
                                        <div key={item.name} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                                                <span className="font-bold text-neutral-700 dark:text-neutral-300">{item.name}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block font-bold text-neutral-900 dark:text-white">{item.value}</span>
                                                <span className="text-xs text-neutral-400">({((item.value / 4560) * 100).toFixed(0)}%)</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Performance Card */}
                        <div className="relative flex flex-col justify-end min-h-[250px] p-0 
                                        rounded-3xl overflow-hidden shadow-lg
                                        bg-white dark:bg-white/5
                                        dark:backdrop-blur-xl dark:border dark:border-white/10"
                        >
                            {/* Text */}
                            <div className="absolute top-6 left-6 z-10">
                                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                                    +15%
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-white/70">
                                    in the last 30 days
                                </p>
                            </div>

                            {/* Chart */}
                            <div className="h-48 w-full mt-auto">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={BLACK_CARD_DATA}>
                                        <defs>
                                            {/* Light Mode Gradient (Black) */}
                                            <linearGradient id="lightGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#000" stopOpacity={0.25} />
                                                <stop offset="100%" stopColor="#000" stopOpacity={0} />
                                            </linearGradient>

                                            {/* Dark Mode Gradient (White) */}
                                            <linearGradient id="darkGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#fff" stopOpacity={0.35} />
                                                <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>

                                        {/* Light Mode Area */}
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="transparent"
                                            fill="url(#lightGradient)"
                                            className="dark:hidden"
                                        />

                                        {/* Dark Mode Area */}
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="transparent"
                                            fill="url(#darkGradient)"
                                            className="hidden dark:block"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>



                        {/* Recent Activity */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6">Recent Activity</h3>
                            <div className="space-y-6">
                                {RECENT_ACTIVITY.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", item.bg)}>
                                            <item.icon size={18} className={item.color} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-neutral-800 dark:text-white">{item.text}</p>
                                            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Graph */}
                    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                        <div className="flex flex-col mb-6">
                            <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">This Month</span>
                            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white">220,342,123</h2>
                            <span className="text-xs text-neutral-400 font-medium">May</span>
                        </div>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={MAIN_GRAPH_DATA}>
                                    <defs>
                                        <linearGradient id="mainGraphGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} strokeDasharray="3 3" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#mainGraphGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
