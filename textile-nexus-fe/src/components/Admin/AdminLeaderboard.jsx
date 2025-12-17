import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu
} from 'lucide-react';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceDot,
    Cell,
    Legend
} from 'recharts';
import { cn } from '../../lib/utils';
import AdminSidebar from './AdminSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data for Charts ---

const SALES_LEADERBOARD_DATA = [
    { name: '5k', value: 22 },
    { name: '10k', value: 25 },
    { name: '15k', value: 30 },
    { name: '20k', value: 85, label: 'Brandex' }, // Peak point
    { name: '25k', value: 45 },
    { name: '30k', value: 55 },
    { name: '35k', value: 68, label: 'Brandex' }, // Another peak
    { name: '40k', value: 50 },
    { name: '45k', value: 75, label: 'Brandex' }, // Another peak
    { name: '50k', value: 60 },
    { name: '55k', value: 55 },
    { name: '60k', value: 50 },
];

const TARGET_VS_REALITY_DATA = [
    { name: 'Jan', reality: 8200, target: 12000 },
    { name: 'Feb', reality: 9800, target: 11500 },
    { name: 'Mar', reality: 5500, target: 8000 },
    { name: 'Apr', reality: 11500, target: 10500 },
    { name: 'May', reality: 10200, target: 9000 },
    { name: 'June', reality: 6800, target: 12500 },
    { name: 'July', reality: 9500, target: 10000 },
];

const VOLUME_SERVICE_DATA = [
    { name: 'Volume', value: 1135, color: '#4F80FF' },
    { name: 'Services', value: 635, color: '#22C55E' },
];

// Custom tooltip for area chart
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-neutral-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm">
                <p className="font-bold">{label}</p>
                <p>{payload[0].value}%</p>
            </div>
        );
    }
    return null;
};

// Custom dot for the area chart to show brand labels
const CustomDot = (props) => {
    const { cx, cy, payload } = props;
    if (payload.label) {
        return (
            <g>
                <circle cx={cx} cy={cy} r={4} fill="#4F80FF" stroke="#fff" strokeWidth={2} />
                <foreignObject x={cx - 35} y={cy - 35} width={70} height={28}>
                    <div className="bg-[#1e293b] text-white text-[10px] font-bold px-2 py-1 rounded-md text-center">
                        {payload.label}
                    </div>
                </foreignObject>
            </g>
        );
    }
    return <circle cx={cx} cy={cy} r={3} fill="#4F80FF" stroke="#fff" strokeWidth={2} />;
};

export default function AdminLeaderboard({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('October');

    return (
        <div className="min-h-screen bg-[#F8F9FE] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <AdminSidebar
                activePage="leaderboard"
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
                            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                <img
                                    src="/images/Customer/Admin/AD.jpg"
                                    alt="Admin avatar"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-neutral-800 leading-tight">Admin User</p>
                                <p className="text-xs text-neutral-400">Super Admin</p>
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Leaderboard</h1>

                    {/* Sales Leaderboard Chart */}
                    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-white/10 mb-8 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Sales Leaderboard</h2>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 border-2 border-neutral-400 rounded-full"></div>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                                    {selectedPeriod}
                                    <ChevronDown size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={SALES_LEADERBOARD_DATA} margin={{ top: 40, right: 20, left: 20, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4F80FF" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#4F80FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334155" : "#E5E7EB"} vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                                        tickFormatter={(value) => `${value}%`}
                                        dx={-10}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#4F80FF"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorSales)"
                                        dot={<CustomDot />}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bottom Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Target vs Reality */}
                        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-white/10 transition-all duration-300">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Target vs Reality</h3>
                            <div className="h-[200px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={TARGET_VS_REALITY_DATA} barGap={2}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 10, fill: '#9CA3AF' }}
                                        />
                                        <YAxis hide />
                                        <Tooltip />
                                        <Bar dataKey="reality" fill="#22C55E" radius={[4, 4, 0, 0]} barSize={12} />
                                        <Bar dataKey="target" fill="#FBBF24" radius={[4, 4, 0, 0]} barSize={12} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex items-center justify-center gap-8 mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-neutral-900 dark:text-white">Reality Sales</p>
                                        <p className="text-[10px] text-neutral-400">Global</p>
                                    </div>
                                    <span className="text-sm font-bold text-teal-500 ml-2">8,823</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-neutral-900 dark:text-white">Target Sales</p>
                                        <p className="text-[10px] text-neutral-400">Commercial</p>
                                    </div>
                                    <span className="text-sm font-bold text-yellow-500 ml-2">12,122</span>
                                </div>
                            </div>
                        </div>

                        {/* Volume vs Service Level */}
                        <div className="bg-white dark:bg-white/5 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-white/10 dark:backdrop-blur-xl">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Volume vs Service Level</h3>
                            <div className="h-[200px] flex items-center justify-center">
                                <div className="flex items-end gap-8 h-full">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="w-16 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                                            style={{ height: '160px' }}
                                        ></div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="w-16 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg"
                                            style={{ height: '100px' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-8 mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-neutral-600">Volume</span>
                                    <span className="text-sm font-bold text-neutral-900 ml-2 dark:text-white">1,135</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-neutral-600">Services</span>
                                    <span className="text-sm font-bold text-neutral-900 ml-2 dark:text-white">635</span>
                                </div>
                            </div>
                        </div>

                        {/* Sales Mapping by Country */}
                        <div className="bg-white dark:bg-white/5 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-white/10 dark:backdrop-blur-xl">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">
                                Sales Mapping by Country
                            </h3>

                            <div className="h-[200px] flex items-center justify-center">
                                <img
                                    src="/images/Customer/Admin/world-map.jpg"
                                    alt="Sales mapping by country"
                                    className="max-h-full w-auto object-contain opacity-90 dark:opacity-80"
                                />
                            </div>
                        </div>


                    </div>

                </div>
            </main>
        </div>
    );
}
