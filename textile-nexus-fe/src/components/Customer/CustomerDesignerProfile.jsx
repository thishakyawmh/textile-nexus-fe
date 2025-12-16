import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Camera,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import CustomerSidebar from './CustomerSidebar';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

// Icons wrapper for social media since lucide might not have all specific brand icons perfectly matching the design
const SocialIcon = ({ type }) => {
    // Using generic text/emoji for simplicity if exact brand icon isn't in lucide default set or use generic shapes
    // Lucide has Facebook, Instagram, Twitter. Tiktok might need a custom svg or placeholder.
    if (type === 'tiktok') {
        return (
            <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
            </div>
        );
    }
    if (type === 'whatsapp') {
        return (
            <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.47 14.39c-.23-.12-1.39-.68-1.59-.76s-.36-.12-.51.12-.58.74-.72.89-.26.18-.51.06c-.24-.12-1.03-.38-1.96-1.21-.73-.65-1.22-1.45-1.36-1.69s-.02-.37.11-.49c.11-.1.23-.26.35-.41.11-.12.15-.21.23-.37s.04-.28-.02-.38-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.89.87-.89 2.12c0 1.25.91 2.46 1.04 2.64s1.81 2.76 4.38 3.87c.61.26 1.09.42 1.46.54.62.2 1.18.17 1.63.1.49-.07 1.52-.62 1.73-1.23.21-.61.21-1.13.15-1.24s-.24-.19-.49-.31zM12.05 2.05C6.48 2.05 1.95 6.58 1.95 12.15c0 1.79.46 3.49 1.27 4.99L2 22l5.01-1.31c1.45.79 3.1 1.26 4.84 1.26 5.57 0 10.1-4.53 10.1-10.1s-4.53-10.1-10.1-10.1z" /></svg>
            </div>
        )
    }
    return (
        <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
            {type === 'facebook' && <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.803h4.245l-.872 3.667h-3.373v7.98h-4.844Z" /></svg>}
            {type === 'instagram' && <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.011-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.846-10.405a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Z" /></svg>}
        </div>
    );
};

const CHART_DATA = [
    { name: '5k', value: 25 },
    { name: '10k', value: 30 },
    { name: '15k', value: 35 },
    { name: '20k', value: 64.366, label: '64,3664.77' }, // Spiked point
    { name: '25k', value: 45 },
    { name: '30k', value: 50 },
    { name: '35k', value: 55 },
    { name: '40k', value: 35 },
    { name: '45k', value: 65 },
    { name: '50k', value: 70 },
    { name: '55k', value: 45 },
    { name: '60k', value: 55 },
];

export default function CustomerDesignerProfile({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Profile');

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <CustomerSidebar
                activePage="designer-explore"
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
                            <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                                <img src="/images/usa.png" alt="US" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                            </div>
                            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">Eng (US)</span>
                            <ChevronDown size={14} className="text-neutral-400" />
                        </div>
                        <button className="relative p-2 bg-orange-50 dark:bg-white/10 rounded-xl transition-colors">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm transition-colors">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    {/* Profile Header Card */}
                    <div className="bg-white dark:bg-white/5 rounded-[40px] border border-neutral-100 dark:border-white/10 shadow-sm overflow-hidden mb-8 relative transition-colors">
                        {/* Cover Image - Aesthetic Background */}
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80')` }}
                        >
                            <div className="w-full h-full bg-black/20"></div> {/* Subtle overlay */}
                        </div>

                        <div className="px-10 pb-8 pt-0 relative">
                            {/* Profile Image */}
                            <div className="absolute -top-16 left-10">
                                <div className="w-32 h-32 rounded-full p-1 bg-white shadow-md">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <img src="" alt="img" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <button className="absolute bottom-1 right-1 bg-black dark:bg-white text-white dark:text-black p-2 rounded-full border-4 border-white dark:border-white/10 shadow-sm hover:scale-105 transition-transform">
                                    <Camera size={16} />
                                </button>
                            </div>

                            <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                <div className="md:ml-36">
                                    <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">Asha Perera</h1>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-bold text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">PRO</span>
                                        <p className="text-neutral-500 dark:text-neutral-400 font-medium text-lg">Senior Fashion Designer</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-3">
                                    <div className="flex gap-3">
                                        <SocialIcon type="whatsapp" />
                                        <SocialIcon type="facebook" />
                                        <SocialIcon type="instagram" />
                                        <SocialIcon type="tiktok" />
                                    </div>
                                    <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">asha.design@studio.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-[#F3F4F6] dark:bg-neutral-800 p-1.5 rounded-full mb-8 max-w-4xl mx-auto shadow-inner transition-colors">
                        {['Profile', 'Performance', 'Designs'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all",
                                    activeTab === tab
                                        ? "bg-black dark:bg-white text-white dark:text-black shadow-lg transform scale-100"
                                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-neutral-700/50"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="bg-white dark:bg-white/5 rounded-[2rem] border border-neutral-100 dark:border-white/10 shadow-sm p-8 min-h-[400px] transition-colors">

                        {activeTab === 'Profile' && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 border-b border-neutral-100 dark:border-white/10 pb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Full Name</label>
                                        <div className="bg-[#F9FAFB] dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl p-4 text-sm font-bold text-neutral-900 dark:text-white">
                                            Asha Perera
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Email Address</label>
                                        <div className="bg-[#F9FAFB] dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl p-4 text-sm font-bold text-neutral-900 dark:text-white">
                                            asha.design@studio.com
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Phone Number</label>
                                        <div className="bg-[#F9FAFB] dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl p-4 text-sm font-bold text-neutral-900 dark:text-white">
                                            +94 77 850 6442
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Job Category</label>
                                        <div className="bg-[#F9FAFB] dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl p-4 text-sm font-bold text-neutral-900 dark:text-white">
                                            Senior Fashion Designer
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Bio</label>
                                    <div className="bg-[#F9FAFB] dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl p-4 text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        Passionate fashion designer with over 5 years of experience in creating sustainable and modern clothing lines. Specializing in bespoke tailoring and ready-to-wear collections that blend traditional craftsmanship with contemporary aesthetics.
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Performance' && (
                            <div className="animate-fade-in-up">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Sales Analytics</h3>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                                        October 2024 <ChevronDown size={16} />
                                    </button>
                                </div>
                                <div className="h-[400px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={CHART_DATA}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor={isDark ? "#ffffff" : "#000000"} stopOpacity={0.1} />
                                                    <stop offset="95%" stopColor={isDark ? "#ffffff" : "#000000"} stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid vertical={false} stroke={isDark ? "#374151" : "#E5E7EB"} strokeDasharray="3 3" />
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: isDark ? '#9CA3AF' : '#6B7280', fontWeight: 500 }}
                                                interval={0}
                                                dy={10}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 12, fill: isDark ? '#9CA3AF' : '#6B7280', fontWeight: 500 }}
                                                tickFormatter={(val) => `${val}%`}
                                                dx={-10}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#000"
                                                strokeWidth={3}
                                                fillOpacity={1}
                                                fill="url(#colorValue)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Designs' && (
                            <div className="flex items-center relative py-8 animate-fade-in-up">
                                <button className="absolute left-4 z-20 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-neutral-100 hover:bg-white hover:scale-110 transition-all text-neutral-700">
                                    <ArrowLeft size={24} />
                                </button>

                                <div className="flex gap-6 overflow-x-auto scrollbar-hide w-full px-12 py-4">
                                    {/* Design 1 - Blue Dress like reference */}
                                    <div
                                        onClick={() => onNavigate('customer-order-details')}
                                        className="min-w-[30%] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative group cursor-pointer"
                                    >
                                        <img src="" alt="img" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <h4 className="text-white font-bold text-lg">Royal Blue Evening Gown</h4>
                                            <p className="text-white/80 text-sm mt-1">Click to order</p>
                                        </div>
                                    </div>

                                    {/* Design 2 - Elegant Mannequin Dress */}
                                    <div
                                        onClick={() => onNavigate('customer-order-details')}
                                        className="min-w-[30%] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative group scale-105 shadow-2xl z-10 border-4 border-white cursor-pointer"
                                    >
                                        <img src="" alt="img" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <h4 className="text-white font-bold text-lg">Classic Red Silhouette</h4>
                                            <p className="text-white/80 text-sm mt-1">Click to order</p>
                                        </div>
                                    </div>

                                    {/* Design 3 - Sketch/Design */}
                                    <div
                                        onClick={() => onNavigate('customer-order-details')}
                                        className="min-w-[30%] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative group cursor-pointer"
                                    >
                                        <img src="" alt="img" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <h4 className="text-white font-bold text-lg">Bridal Concept</h4>
                                            <p className="text-white/80 text-sm mt-1">Click to order</p>
                                        </div>
                                    </div>

                                    {/* Design 4 - Detailed Dress */}
                                    <div
                                        onClick={() => onNavigate('customer-order-details')}
                                        className="min-w-[30%] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative group cursor-pointer"
                                    >
                                        <img src="" alt="img" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <h4 className="text-white font-bold text-lg">Emerald Green Gown</h4>
                                            <p className="text-white/80 text-sm mt-1">Click to order</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="absolute right-4 z-20 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-neutral-100 hover:bg-white hover:scale-110 transition-all text-neutral-700">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        )}

                    </div>

                </div>
            </main>
        </div>
    );
}
