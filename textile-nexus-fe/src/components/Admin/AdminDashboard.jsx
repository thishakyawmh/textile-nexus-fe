import React, { useState } from 'react';
import {
    BarChart3,
    Search,
    Bell,
    ChevronDown,
    Upload,
    TrendingUp,
    TrendingDown,
    Users,
    Package,
    Clock,
    Menu,
    UserPlus,
    Activity,
    Filter,
    RefreshCw,
    Share2
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    AreaChart,
    Area,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';
import { cn } from '../../lib/utils';
import AdminSidebar from './AdminSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

// Overview Data
const VISITOR_DATA = [
    { name: 'Jan', loyal: 250, new: 180, unique: 210 },
    { name: 'Feb', loyal: 270, new: 220, unique: 230 },
    { name: 'Mar', loyal: 240, new: 150, unique: 280 },
    { name: 'Apr', loyal: 210, new: 120, unique: 260 },
    { name: 'May', loyal: 200, new: 190, unique: 240 },
    { name: 'Jun', loyal: 230, new: 240, unique: 200 },
    { name: 'Jul', loyal: 290, new: 210, unique: 180 },
    { name: 'Aug', loyal: 310, new: 250, unique: 210 },
    { name: 'Sep', loyal: 280, new: 230, unique: 240 },
    { name: 'Oct', loyal: 240, new: 180, unique: 270 },
    { name: 'Nov', loyal: 200, new: 150, unique: 240 },
    { name: 'Dec', loyal: 220, new: 190, unique: 210 },
];

const REVENUE_DATA = [
    { name: 'Mon', online: 14, projection: 12 },
    { name: 'Tue', online: 18, projection: 14 },
    { name: 'Wed', online: 6, projection: 22 },
    { name: 'Thu', online: 17, projection: 8 },
    { name: 'Fri', online: 13, projection: 13 },
    { name: 'Sat', online: 17, projection: 14 },
    { name: 'Sun', online: 21, projection: 11 },
];

const CUSTOMER_SATISFACTION_DATA = [
    { name: 'Point 1', v1: 300, v2: 240 },
    { name: 'Point 2', v1: 450, v2: 139 },
    { name: 'Point 3', v1: 200, v2: 980 },
    { name: 'Point 4', v1: 278, v2: 390 },
    { name: 'Point 5', v1: 189, v2: 480 },
    { name: 'Point 6', v1: 239, v2: 380 },
    { name: 'Point 7', v1: 349, v2: 430 },
];

const PRODUCT_PROGRESS = [
    { id: '01', name: "Children's Textiles", percentage: 45, color: '#3b82f6' },
    { id: '02', name: "Sustainable & Eco-Fabrics", percentage: 29, color: '#10b981' },
    { id: '03', name: "Ready-to-Wear Apparel", percentage: 18, color: '#8b5cf6' },
    { id: '04', name: "Winter Seasonal Essentials", percentage: 25, color: '#f59e0b' },
];

// User Analytics Data
const USER_GROWTH_DATA = [
    { name: 'Jan', value: 120 },
    { name: 'Feb', value: 180 },
    { name: 'Mar', value: 220 },
    { name: 'Apr', value: 270 },
    { name: 'May', value: 310 },
    { name: 'Jun', value: 350 },
    { name: 'Jul', value: 380 },
    { name: 'Sep', value: 400 },
    { name: 'Oct', value: 420 },
    { name: 'Nov', value: 410 },
    { name: 'Dec', value: 400 },
];

const USER_DEMOGRAPHY_DATA = [
    { name: '18-24 Yr', value: 30, color: '#10B981' }, // Teal
    { name: '25-35 Yr', value: 45, color: '#3B82F6' }, // Blue
    { name: '35-50 Yr', value: 20, color: '#D946EF' }, // Purple
    { name: '50+ Yr', value: 5, color: '#E2E8F0' },   // Grey
];

const TRAFFIC_SOURCES_DATA = [
    { id: '00001', lastActivity: 'Organic Search', percentage: '80%', status: '4%', type: 75, country: 'Sri Lanka', badge: 'No Issue', badgeColor: 'bg-emerald-100 text-emerald-600' },
    { id: '00002', lastActivity: 'Search', percentage: '60%', status: '0.04%', type: 190, country: 'Nigeria', badge: 'Threat', badgeColor: 'bg-rose-100 text-rose-600' },
];

// Sales Performance Data
const SALES_TREND_DATA = [
    { name: 'Jan', value: 150 }, { name: 'Feb', value: 240 }, { name: 'Feb2', value: 180 }, { name: 'Mar', value: 210 },
    { name: 'Mar2', value: 120 }, { name: 'Apr', value: 330 }, { name: 'Apr2', value: 350 }, { name: 'May', value: 290 },
    { name: 'Jun', value: 310 }, { name: 'Jun2', value: 480 }, { name: 'Jul', value: 320 }, { name: 'Jul2', value: 350 },
    { name: 'Aug', value: 280 }, { name: 'Aug2', value: 250 }, { name: 'Sep', value: 320 }, { name: 'Oct', value: 280 },
    { name: 'Nov', value: 320 }, { name: 'Nov2', value: 250 }, { name: 'Dec', value: 450 }, { name: 'Dec2', value: 500 },
];

// --- Sub-Components ---

const StatCard = ({ title, value, subtext, trend, trendValue, icon: Icon, colorClass, bgClass, customIconBg }) => (
    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-neutral-500 dark:text-neutral-400 font-semibold text-sm mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">{value}</h3>
            </div>
            <div className={cn("p-4 rounded-2xl flex items-center justify-center", customIconBg || bgClass, customIconBg ? "" : "")}>
                <Icon size={24} className={colorClass} />
            </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold">
            {trend === 'up' ? (
                <span className="text-emerald-500 flex items-center gap-1"><TrendingUp size={16} /> {trendValue}</span>
            ) : (
                <span className="text-rose-500 flex items-center gap-1"><TrendingDown size={16} /> {trendValue}</span>
            )}
            <span className="text-neutral-400 dark:text-neutral-500 font-medium">{subtext}</span>
        </div>
    </div>
);

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-neutral-800 text-white text-xs p-2 rounded shadow-lg">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

// 1. Overview Dashboard (Original)
const OverviewDashboard = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total User"
                    value="40,689"
                    subtext="Up from yesterday"
                    trend="up"
                    trendValue="8.5%"
                    icon={Users}
                    colorClass="text-purple-500"
                    bgClass="bg-purple-100"
                />
                <StatCard
                    title="Total Order"
                    value="10,293"
                    subtext="Up from past week"
                    trend="up"
                    trendValue="1.3%"
                    icon={Package}
                    colorClass="text-yellow-500"
                    bgClass="bg-yellow-100"
                />
                <StatCard
                    title="Total Sales"
                    value="$89,000"
                    subtext="Down from yesterday"
                    trend="down"
                    trendValue="4.3%"
                    icon={BarChart3}
                    colorClass="text-emerald-500"
                    bgClass="bg-emerald-100"
                />
                <StatCard
                    title="Total Pending"
                    value="2,040"
                    subtext="Up from yesterday"
                    trend="up"
                    trendValue="1.8%"
                    icon={Clock}
                    colorClass="text-orange-500"
                    bgClass="bg-orange-100"
                />
            </div>

            {/* Two Column Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                {/* Visitor Insights */}
                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6">Visitor Insights</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={VISITOR_DATA}>
                                <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#E2E8F0"} strokeDasharray="3 3" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#F43F5E', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                <Line type="monotone" dataKey="loyal" stroke="#A855F7" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="new" stroke="#F43F5E" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="unique" stroke="#22C55E" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                            <span className="w-3 h-3 rounded-full bg-purple-500"></span> Loyal Customers
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                            <span className="w-3 h-3 rounded-full bg-rose-500"></span> New Customers
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Unique Customers
                        </div>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6">Total Revenue</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={REVENUE_DATA} barGap={8}>
                                <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#E2E8F0"} strokeDasharray="3 3" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="online" fill="#0EA5E9" radius={[4, 4, 4, 4]} barSize={12} />
                                <Bar dataKey="projection" fill="#10B981" radius={[4, 4, 4, 4]} barSize={12} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                            <span className="w-3 h-3 rounded-full bg-sky-500"></span> Online Sales
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Target/Projection
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Customer Satisfaction */}
                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-neutral-800 mb-4">Customer Satisfaction</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={CUSTOMER_SATISFACTION_DATA}>
                                <defs>
                                    <linearGradient id="colorV1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorV2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip />
                                <Area type="monotone" dataKey="v1" stroke="#818cf8" fillOpacity={1} fill="url(#colorV1)" strokeWidth={3} />
                                <Area type="monotone" dataKey="v2" stroke="#34d399" fillOpacity={1} fill="url(#colorV2)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Target Reality */}
                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 shadow-sm flex flex-col justify-between transition-all duration-300">
                    <div className="space-y-6">
                        {PRODUCT_PROGRESS.map((product) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <span className="text-xs font-bold text-neutral-400 w-6">{product.id}</span>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-neutral-700 mb-2">{product.name}</h4>
                                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{ width: `${product.percentage}%`, backgroundColor: product.color }}
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="px-3 py-1 rounded-lg text-xs font-bold border"
                                    style={{ color: product.color, borderColor: product.color, backgroundColor: `${product.color}10` }}
                                >
                                    {product.percentage}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// 2. User Analytical Dashboard
const UserAnalyticalDashboard = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-neutral-900">Today's User Engagement</h2>
                <button className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-xl text-neutral-600 font-medium hover:bg-neutral-50">
                    <Upload size={16} />
                    <span>Export</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Total User"
                    value="40,689"
                    trend="up" trendValue="8.5%"
                    subtext="Up from yesterday"
                    icon={Users}
                    colorClass="text-purple-600"
                    customIconBg="bg-purple-100"
                />
                <StatCard
                    title="New Signups"
                    value="1,293"
                    trend="up" trendValue="1.3%"
                    subtext="Up from past week"
                    icon={UserPlus}
                    colorClass="text-pink-600"
                    customIconBg="bg-pink-100"
                />
                <StatCard
                    title="Active Users Today"
                    value="12,356"
                    trend="down" trendValue="4.3%"
                    subtext="Down from yesterday"
                    icon={Activity}
                    colorClass="text-emerald-600"
                    customIconBg="bg-emerald-100"
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                <div className="xl:col-span-2 bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-8 rounded-3xl border border-neutral-100 dark:border-white/10 shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                        Daily User Growth Trend
                    </h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={USER_GROWTH_DATA}>
                                <defs>
                                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#F43F5E" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#E2E8F0"} strokeDasharray="3 3" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="value" stroke="#F43F5E" strokeWidth={4} fill="url(#colorGrowth)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-8 rounded-3xl border border-neutral-100 dark:border-white/10 shadow-sm flex flex-col items-center justify-center transition-all duration-300">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6 w-full text-left">User Demography By Age Groups</h3>
                    <div className="w-56 h-56 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={USER_DEMOGRAPHY_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={0}
                                    dataKey="value"
                                >
                                    {USER_DEMOGRAPHY_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-32 h-32 rounded-full border-4 border-neutral-50"></div>
                        </div>
                    </div>
                    <div className="w-full mt-6 space-y-3">
                        {USER_DEMOGRAPHY_DATA.map((item, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                                    <span className="font-medium text-neutral-600">{item.name}</span>
                                </div>
                                <span className="font-bold text-neutral-900">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl border border-neutral-100 dark:border-white/10 shadow-sm overflow-hidden transition-all duration-300">
                <div className="p-6 border-b border-neutral-100 dark:border-white/10">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-white">Traffic Sources</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-neutral-50 dark:bg-white/5/50 text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase transition-colors">
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Last Activity</th>
                                <th className="px-6 py-4">Subscription Status</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Country</th>
                                <th className="px-6 py-4 text-right">Status Badge</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {TRAFFIC_SOURCES_DATA.map((row) => (
                                <tr key={row.id} className="border-b border-neutral-100 dark:border-white/10 last:border-none hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-neutral-500">{row.id}</td>
                                    <td className="px-6 py-4 font-bold text-neutral-800 flex items-center gap-12">
                                        <span>{row.lastActivity}</span>
                                        <span className="text-xs text-neutral-400 font-normal">{row.percentage}</span>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">{row.status}</td>
                                    <td className="px-6 py-4 text-neutral-800 font-bold">{row.type}</td>
                                    <td className="px-6 py-4 text-neutral-600">{row.country}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={cn("px-3 py-1 rounded text-xs font-bold", row.badgeColor)}>
                                            {row.badge}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

// 3. Sales Performance Dashboard
const SalesPerformanceDashboard = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl font-bold text-neutral-900">Today's Sales</h2>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-neutral-200 rounded-xl">
                        <Filter size={16} className="text-neutral-500" />
                        <span className="text-sm font-semibold text-neutral-700">Filter By</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-xl cursor-pointer">
                        <span className="text-sm font-bold text-neutral-700">Date</span>
                        <ChevronDown size={14} className="text-neutral-400" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-xl cursor-pointer">
                        <span className="text-sm font-bold text-neutral-700">Region</span>
                        <ChevronDown size={14} className="text-neutral-400" />
                    </div>
                    <button className="flex items-center gap-2 text-rose-500 font-bold text-xs px-2 hover:bg-rose-50 rounded-lg py-2 transition-colors">
                        <RefreshCw size={14} />
                        Reset
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-xl text-neutral-600 font-medium hover:bg-neutral-50 ml-2">
                        <Upload size={16} />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Total Sells"
                    value="40,689"
                    trend="up" trendValue="8.5%"
                    subtext="Up from yesterday"
                    icon={BarChart3}
                    colorClass="text-blue-500"
                    customIconBg="bg-blue-100"
                />
                <StatCard
                    title="Average Order Value"
                    value="1,293"
                    trend="up" trendValue="1.3%"
                    subtext="Up from past week"
                    icon={TrendingUp}
                    colorClass="text-rose-500"
                    customIconBg="bg-rose-100"
                />
                <StatCard
                    title="Conversion Rate"
                    value="12,356"
                    trend="down" trendValue="4.3%"
                    subtext="Down from yesterday"
                    icon={TrendingDown}
                    colorClass="text-emerald-500"
                    customIconBg="bg-emerald-100"
                />
            </div>

            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 p-8 rounded-3xl border border-neutral-100 dark:border-white/10 shadow-sm mb-8 transition-all duration-300">
                <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-6">Daily User Growth Trend (Sales)</h3>
                <div className="h-80 w-full mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={SALES_TREND_DATA}>
                            <defs>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke={isDark ? "#334155" : "#E2E8F0"} strokeDasharray="3 3" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} dy={10} interval={1} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} fill="url(#colorSales)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-8">
                    <h4 className="text-center font-bold text-neutral-800 mb-4">Sales By Region</h4>
                    <div className="w-full h-8 rounded-full overflow-hidden flex max-w-4xl mx-auto">
                        <div className="h-full bg-blue-500 w-[40%] flex items-center justify-center text-white text-xs font-bold hover:opacity-90 transition-opacity tooltip-trigger">North America</div>
                        <div className="h-full bg-emerald-400 w-[30%] flex items-center justify-center text-white text-xs font-bold hover:opacity-90 transition-opacity">Asia</div>
                        <div className="h-full bg-neutral-300 w-[20%] flex items-center justify-center text-neutral-600 text-xs font-bold hover:opacity-90 transition-opacity">Europe</div>
                        <div className="h-full bg-red-500 w-[10%] flex items-center justify-center text-white text-xs font-bold hover:opacity-90 transition-opacity">Other</div>
                    </div>
                    <div className="flex justify-between max-w-4xl mx-auto mt-2 px-1">
                        <span className="text-blue-600 font-bold text-sm">North America</span>
                        <span className="text-emerald-500 font-bold text-sm">Asia</span>
                        <span className="text-neutral-500 font-bold text-sm">Europe</span>
                        <span className="text-red-500 font-bold text-sm">Other</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function AdminDashboard({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview'); // overview, analytics, sales

    const [searchQuery, setSearchQuery] = useState('');

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
            <AdminSidebar
                activePage="dashboard"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onNavigate={onNavigate}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white dark:bg-black border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-6 lg:px-10 shrink-0 transition-colors">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-neutral-500">
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center bg-[#F9FAFB] dark:bg-white/5 rounded-xl px-4 py-2.5 w-96 transition-colors">
                        <Search size={18} className="text-neutral-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
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

                {/* Content Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    {/* Header & Tabs */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                            {activeTab === 'overview' && "Dashboard"}
                            {activeTab === 'analytics' && "User Analytical Overview"}
                            {activeTab === 'sales' && "Sales Performance Dashboard"}
                        </h1>
                        <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 text-sm text-neutral-500">
                                <span>Home</span>
                                <span className="text-neutral-300">/</span>
                                <span className="font-medium text-neutral-800">
                                    {activeTab === 'overview' && "Dashboard"}
                                    {activeTab === 'analytics' && "Analytics"}
                                    {activeTab === 'sales' && "Sales Performance"}
                                </span>
                            </div>

                            {/* Dashboard Switcher Tabs */}
                            <div className="flex p-1 bg-white dark:bg-black/5 border border-neutral-200 rounded-xl shadow-sm">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                                        activeTab === 'overview' ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                                    )}
                                >
                                    Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('analytics')}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                                        activeTab === 'analytics' ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                                    )}
                                >
                                    User Analytics
                                </button>
                                <button
                                    onClick={() => setActiveTab('sales')}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                                        activeTab === 'sales' ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                                    )}
                                >
                                    Sales Performance
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Content Render */}
                    <div className="animate-fade-in-up">
                        {activeTab === 'overview' && <OverviewDashboard />}
                        {activeTab === 'analytics' && <UserAnalyticalDashboard />}
                        {activeTab === 'sales' && <SalesPerformanceDashboard />}
                    </div>

                </div>
            </main>
        </div>
    );
}
