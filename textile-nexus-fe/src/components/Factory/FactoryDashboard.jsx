import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Download,
    Users,
    Package,
    Activity,
    Clock
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    LineChart,
    Line,
    Legend
} from 'recharts';
import FactorySidebar from './FactorySidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const STATS_DATA = [
    { title: "Production Output", value: "45,196 Units", change: "+9.5%", isPositive: true, icon: Users, color: "bg-indigo-100 text-indigo-600" },
    { title: "Overall Equipment Effectiveness", value: "78.5% OEE", change: "+2.3%", isPositive: true, icon: Package, color: "bg-amber-100 text-amber-600" },
    { title: "Defect Rate", value: "100 Units", change: "-4.3%", isPositive: false, icon: Activity, color: "bg-emerald-100 text-emerald-600" }, // Negative defect is good? UI shows red arrow down. Usually down defect is good (green), but here it seems color coded with red arrow. Wait, Image shows Red Arrow Down for Defect Rate, and Green arrow UP for Downtime?
    // Let's look at image carefully:
    // Defect Rate: 100 Units. Red arrow down -4.3% Down from yesterday. Icon is Green Graph.
    // Machine Downtime: 2040 Minutes. Green arrow up 1.8% Up from yesterday. Icon is Orange Timer.
    { title: "Machine Downtime", value: "2040 Minutes", change: "+1.8%", isPositive: true, icon: Clock, color: "bg-orange-100 text-orange-600" },
];

const CAPACITY_DATA = [
    { name: 'Jan', available: 320, actual: 240, target: 280 },
    { name: 'Feb', available: 350, actual: 260, target: 300 },
    { name: 'Mar', available: 300, actual: 200, target: 280 },
    { name: 'Apr', available: 250, actual: 180, target: 220 },
    { name: 'May', available: 280, actual: 220, target: 260 },
    { name: 'Jun', available: 320, actual: 260, target: 300 },
    { name: 'Jul', available: 380, actual: 320, target: 350 },
    { name: 'Sept', available: 350, actual: 280, target: 320 },
    { name: 'Oct', available: 300, actual: 240, target: 280 },
    { name: 'Nov', available: 250, actual: 180, target: 220 },
    { name: 'Dec', available: 220, actual: 160, target: 200 },
];

const PRODUCTION_MIX_DATA = [
    { name: 'Product A', val1: 400, val2: 500, val3: 450 },
    { name: 'Product B', val1: 300, val2: 250, val3: 200 },
    { name: 'Product C', val1: 700, val2: 650, val3: 300 },
    { name: 'Product D', val1: 400, val2: 450, val3: 500 },
    { name: 'Product E', val1: 250, val2: 220, val3: 200 },
];

const QUALITY_DATA = [
    { name: 'Day 1', ok: 20, defect: 5 },
    { name: 'Day 2', ok: 30, defect: 10 },
    { name: 'Day 3', ok: 25, defect: 8 },
    { name: 'Day 4', ok: 40, defect: 15 },
    { name: 'Day 5', ok: 35, defect: 12 },
    { name: 'Day 6', ok: 50, defect: 20 },
    { name: 'Day 7', ok: 45, defect: 18 },
];

const ALERTS_DATA = [
    { name: "Cutting Machine 3", issue: "Bearing Temp High", priority: "95%", color: "text-blue-500 border-blue-200 bg-blue-50" },
    { name: "Weaving Loom 18", issue: "Vibration Spike", priority: "75%", color: "text-emerald-500 border-emerald-200 bg-emerald-50" },
    { name: "Assembly Line 5 Motor", issue: "Run Hours Exceeded", priority: "50%", color: "text-purple-500 border-purple-200 bg-purple-50" },
    { name: "Packaging Robot 7", issue: "Pneumatic Pressure Drop", priority: "65%", color: "text-orange-500 border-orange-200 bg-orange-50" },
];

export default function FactoryDashboard({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F9FE] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Apps Header (Mobile) & Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

            <FactorySidebar
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

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Dashboard</h1>
                            <p className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">Today's Sales</p>
                            <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">Sales Summary</p>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm">
                            <Download size={16} /> Export
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                        {STATS_DATA.map((stat, index) => (
                            <div key={index} className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-white/10 flex flex-col justify-between h-40 transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">{stat.title}</h3>
                                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                                    </div>
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                                        <stat.icon size={24} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4 text-xs font-bold">
                                    <span className={stat.isPositive ? "text-emerald-500" : "text-rose-500"}>
                                        {stat.isPositive ? "↗" : "↘"} {stat.change}
                                    </span>
                                    <span className="text-neutral-400 font-medium">Up from yesterday</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* Capacity Utilization */}
                        <div className="lg:col-span-2 bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
                                Capacity Utilization Trend
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={CAPACITY_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                        <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                        <Line type="monotone" dataKey="available" name="Available Capacity" stroke="#22c55e" strokeWidth={3} dot={false} />
                                        <Line type="monotone" dataKey="actual" name="Actual Output" stroke="#ef4444" strokeWidth={3} dot={false} />
                                        <Line type="monotone" dataKey="target" name="Target Capacity" stroke="#a855f7" strokeWidth={3} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Production Mix */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                                Production Mix & Performance
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={PRODUCTION_MIX_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#94a3b8' }} interval={0} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                        <Bar dataKey="val1" fill="#5b8cba" radius={[4, 4, 0, 0]} barSize={12} />
                                        <Bar dataKey="val2" fill="#c3d79b" radius={[4, 4, 0, 0]} barSize={12} />
                                        <Bar dataKey="val3" fill="#f4bb7d" radius={[4, 4, 0, 0]} barSize={12} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Charts Row 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Quality Control Trend */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                                Quality Control Trend
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={QUALITY_DATA}>
                                        <defs>
                                            <linearGradient id="colorOk" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorDefect" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#334155" : "#f1f5f9"} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                        <Area type="monotone" dataKey="ok" stroke="#2dd4bf" strokeWidth={3} fillOpacity={1} fill="url(#colorOk)" />
                                        <Area type="monotone" dataKey="defect" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorDefect)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Maintenance Alerts */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-red-500 rounded-full"></span>
                                High-Priority Maintenance Alerts
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-xs text-neutral-400 font-medium border-b border-neutral-100">
                                            <th className="pb-3 px-2">#</th>
                                            <th className="pb-3 px-2">Name</th>
                                            <th className="pb-3 px-2">Health Status</th>
                                            <th className="pb-3 px-2 text-right">Priority</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        {ALERTS_DATA.map((alert, i) => (
                                            <tr key={i} className="border-b border-neutral-50 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group">
                                                <td className="py-4 px-2 text-neutral-400">{String(i + 1).padStart(2, '0')}</td>
                                                <td className="py-4 px-2 text-neutral-700 dark:text-neutral-200 font-semibold">{alert.name}</td>
                                                <td className="py-4 px-2 text-neutral-500">{alert.issue}</td>
                                                <td className="py-4 px-2 text-right">
                                                    <span className={`px-2 py-1 rounded-md text-xs font-bold border ${alert.color}`}>
                                                        {alert.priority}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
