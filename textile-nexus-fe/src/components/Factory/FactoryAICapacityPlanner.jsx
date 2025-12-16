import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    ChevronLeft
} from 'lucide-react';
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import FactorySidebar from './FactorySidebar';
import { cn } from '../../lib/utils';


const GANTT_DATA = [
    { label: "Production Line", id: "ORD-204-001 (5000 units)", start: 4, duration: 60, color: "bg-[#2563EB]" }, // Blue
    { label: "Line A - Denim", id: "ORD-204-003 (4500 units)", start: 4, duration: 52, color: "bg-[#7DD3FC]" }, // Light Blue
    { label: "Line B - Knitwear", id: "ORD-204-002 (8000 units)", start: 4, duration: 46, color: "bg-[#22C55E]" }, // Green
    { label: "Line C - Finishing", id: "ORD-204-004 (10000 units)", start: 4, duration: 50, color: "bg-[#FB923C]" }, // Orange
    { label: "Line D - Specialty", id: "ORD-204-005 (2000 units)", start: 4, duration: 30, color: "bg-[#F87171]" }, // Red
];


const STOCK_DATA = [
    { id: "S1001", item: "RM-001", onHand: 750, reserved: 200, available: 550, lastCount: "2025-11-20" },
    { id: "S1002", item: "RM-002", onHand: 1200, reserved: 500, available: 700, lastCount: "2025-11-20" },
    { id: "S1003", item: "FG-105", onHand: 300, reserved: 0, available: 300, lastCount: "2025-11-19" },
    { id: "S1004", item: "RM-007", onHand: 50, reserved: 50, available: 0, lastCount: "2025-11-20" },
    { id: "S1005", item: "WIP-210", onHand: 250, reserved: 100, available: 150, lastCount: "2025-11-21" },
];

const LABOR_DATA = [
    { name: 'Sewing', val: 80 },
    { name: 'Cutting', val: 50 },
    { name: 'Finishing', val: 90 },
];

export default function FactoryAICapacityPlanner({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Machine Hours Donut Data
    const machineData = [{ name: 'Utilized', value: 75 }, { name: 'Free', value: 25 }];
    const machineColors = ['#F472B6', '#FCE7F3']; // Pinkish

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
                activePage="ai-capacity"
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
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm transition-colors">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">



                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">AI Capacity Planner</h1>

                    <div className="bg-[#F2F1EF] dark:bg-black/5 p-8 rounded-3xl mb-8 min-w-[1000px] overflow-x-auto transition-colors">

                        {/* 1. Production Line Capacity Chart (Custom Gantt) */}
                        <div className="bg-white dark:bg-black/5 rounded-3xl p-8 mb-8 shadow-sm transition-colors ">
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Production Line Capacity and Scheduling Chart</h2>

                            {/* Chart Container */}
                            <div className="relative mt-12 mb-8 pr-10">
                                {/* X-Axis Labels (Top Dates) - Approximate placement */}
                                <div className="absolute -top-8 left-[180px] right-0 flex justify-between text-[10px] font-medium text-neutral-500 dark:text-neutral-400 px-4">
                                    <span>Oct 4</span><span>Oct 4</span><span>Oct 4</span><span>Oct 4</span>
                                    <span>Oct 5</span><span>Oct 6</span><span>Oct 7</span><span>Oct 8</span>
                                    <span>Oct 9</span><span>Oct 10</span><span>Oct 11</span><span>Oct 12</span>
                                    <span>Oct 13</span><span>Oct 14</span><span>Oct 15</span>
                                </div>

                                {/* Main Grid */}
                                <div className="relative border-l border-b border-neutral-300 dark:border-neutral-700 ml-[180px]">

                                    {/* Vertical Grid Lines */}
                                    <div className="absolute inset-0 flex">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className="flex-1 border-r border-neutral-200 dark:border-white/10 last:border-none"></div>
                                        ))}
                                    </div>

                                    {/* Rows */}
                                    <div className="relative z-10 space-y-8 py-4">
                                        {GANTT_DATA.map((row, index) => (
                                            <div key={index} className="relative h-10 flex items-center">
                                                {/* Y-Axis Label */}
                                                <div className="absolute -left-[180px] w-[160px] text-right text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                                    {row.label}
                                                </div>

                                                {/* Bar */}
                                                <div
                                                    className={`absolute h-8 rounded-full flex items-center px-4 text-xs font-bold text-white shadow-sm overflow-hidden whitespace-nowrap ${row.color}`}
                                                    style={{
                                                        left: `${(row.start / 64) * 100}%`,
                                                        width: `${(row.duration / 64) * 100}%`
                                                    }}
                                                >
                                                    {row.id}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* X-Axis Labels (Bottom Numbers) */}
                                <div className="flex ml-[180px] mt-2 justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
                                    <span>0</span><span>4</span><span>8</span><span>12</span><span>16</span>
                                    <span>20</span><span>24</span><span>28</span><span>32</span><span>36</span>
                                    <span>40</span><span>44</span><span>48</span><span>52</span><span>56</span>
                                    <span>60</span><span>64</span>
                                </div>
                            </div>
                        </div>


                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                            {/* Machine Hours */}
                            <div className="bg-white dark:bg-white/5 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center relative transition-colors">
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Machine Hours</h3>
                                <div className="relative w-40 h-40">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie
                                                data={machineData}
                                                innerRadius={55}
                                                outerRadius={70}
                                                startAngle={90}
                                                endAngle={-270}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {machineData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={machineColors[index]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-400">
                                        <span className="text-3xl font-bold">75%</span>
                                    </div>
                                </div>

                                <div className="mt-4 bg-[#F2F1EF] dark:bg-neutral-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-neutral-900 dark:text-white">75%</span>
                                        <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Utilized <ChevronDown size={10} className="inline" /></p>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-3 w-full">
                                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">Available Hours:</span>
                                    <div className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 w-full text-center">120 hrs</div>
                                </div>
                            </div>

                            {/* Labor Hours */}
                            <div className="bg-white dark:bg-white/5 rounded-3xl p-6 shadow-sm flex flex-col items-center transition-colors">
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Labor Hours</h3>
                                <div className="w-full h-32 flex items-end justify-center gap-8 mb-6 border-b border-black/10 dark:border-white/10 pb-2 relative transition-colors">
                                    <div className="w-4 bg-[#2563EB] h-[80%]"></div>
                                    <div className="w-4 bg-[#2563EB] h-[50%]"></div>
                                    <div className="w-4 bg-[#2563EB] h-[90%]"></div>
                                    {/* Axis line */}
                                    <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-neutral-300 dark:bg-neutral-700"></div>
                                </div>
                                <div className="text-center mb-6">
                                    <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Skill Set: Sewing, Cutting</h4>
                                </div>
                                <div className="flex items-center gap-3 w-full mt-auto">
                                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">Available Staff:</span>
                                    <div className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 w-full text-center">35 people</div>
                                </div>
                            </div>

                            {/* Stock Table */}
                            <div className="bg-white dark:bg-white/5 rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col transition-colors">
                                {/* Removing redundant headers if any, using proper table only */}

                                <div className="flex-1 overflow-auto">
                                    <table className="w-full text-center text-[10px]">
                                        <thead className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-bold transition-colors">
                                            <tr>
                                                <th className="py-2">Stock ID</th>
                                                <th className="py-2">Item ID</th>
                                                <th className="py-2">On Hand Qty</th>
                                                <th className="py-2">Reserved Qty</th>
                                                <th className="py-2">Available Qty</th>
                                                <th className="py-2">Last Count Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {STOCK_DATA.map((row, i) => (
                                                <tr key={i} className="border-b border-neutral-100 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                    <td className="py-3 font-medium text-neutral-900 dark:text-neutral-100">{row.id}</td>
                                                    <td className="py-3 text-neutral-600 dark:text-neutral-400">{row.item}</td>
                                                    <td className="py-3 text-neutral-600 dark:text-neutral-400">{row.onHand}</td>
                                                    <td className="py-3 text-neutral-600 dark:text-neutral-400">{row.reserved}</td>
                                                    <td className="py-3 text-neutral-600 dark:text-neutral-400">{row.available}</td>
                                                    <td className="py-3 text-neutral-500 dark:text-neutral-500">{row.lastCount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
