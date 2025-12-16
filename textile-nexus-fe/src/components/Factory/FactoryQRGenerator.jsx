import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Calendar,
    Search as SearchIcon,
    QrCode
} from 'lucide-react';
import FactorySidebar from './FactorySidebar';

const LOG_DATA = [
    { id: 'ORD-2023-01-A', units: 1200, date: '2023-10-08', status: 'Active' },
    { id: 'ORD-2023-02-A', units: 500, date: '2023-10-09', status: 'Active' },
    { id: 'ORD-2023-03-B', units: 1320, date: '2023-11-01', status: 'Pending' },
    { id: 'ORD-2023-05-A', units: 450, date: '2023-11-02', status: 'Pending' },
    { id: 'ORD-2023-02-C', units: 1250, date: '2023-11-05', status: 'Active' },
];

export default function FactoryQRGenerator({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [approvalRequired, setApprovalRequired] = useState(true);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
                activePage="qr-generator"
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
                            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm transition-colors">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">QR Generator</h1>

                    <div className="flex flex-col xl:flex-row gap-8">

                        {/* Left Panel: Create Passport */}
                        <div className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-white/10 flex-1 xl:max-w-xl transition-colors">
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 pb-4 border-b border-neutral-100 dark:border-white/10">Create New Garment Passport</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Order ID</label>
                                    <input type="text" placeholder="EX: ORD-2023-11-C" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Material Sourcing</label>
                                    <input type="text" placeholder="EX: Organic Cotton, Supplier X" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Production Date</label>
                                    <div className="relative">
                                        <input type="text" placeholder="mm/dd/yyyy" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors" />
                                        <Calendar size={18} className="absolute right-4 top-3.5 text-neutral-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Certifications (EX: GOTS, OEKO-TEX)</label>
                                    <div className="relative">
                                        <textarea placeholder="Enter list of certification" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors min-h-[100px] resize-none"></textarea>
                                        <SearchIcon size={18} className="absolute right-4 bottom-4 text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-full p-0.5" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 pb-6 border-b border-neutral-100 dark:border-white/10 transition-colors">
                                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Designer Approval Required</span>
                                    <div
                                        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${approvalRequired ? 'bg-black dark:bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}
                                        onClick={() => setApprovalRequired(!approvalRequired)}
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${approvalRequired ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 py-4">
                                    <div className="w-32 h-32 bg-neutral-900 dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black">
                                        {/* Mock QR */}
                                        <QrCode size={80} />
                                    </div>
                                    <span className="text-xs text-neutral-400">Sample QR Code Preview</span>
                                </div>

                                <button className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-sm shadow-lg shadow-blue-500/25 transition-all">
                                    Generate QR Code
                                </button>

                            </div>
                        </div>

                        {/* Right Panel: Bulk Log */}
                        <div className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-white/10 flex-1 transition-colors">
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 pb-4 border-b border-neutral-100 dark:border-white/10">Bulk Generation & Log</h2>

                            <div className="flex flex-col md:flex-row gap-6 mb-8 items-end">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Number of Units</label>
                                    <input type="text" placeholder="1200" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Number of Bulk</label>
                                    <input type="text" placeholder="5" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors" />
                                </div>
                                <div className="flex-1 md:flex-none">
                                    <button className="w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-sm shadow-lg shadow-blue-500/25 transition-all whitespace-nowrap">
                                        Generate Code
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Generated Passports Log</h3>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#f0f0f0] dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-bold border-none rounded-lg transition-colors">
                                            <th className="px-6 py-4 first:rounded-l-lg">Order ID</th>
                                            <th className="px-6 py-4 text-center">Number of Units</th>
                                            <th className="px-6 py-4 text-center">Date</th>
                                            <th className="px-6 py-4 last:rounded-r-lg">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                        {LOG_DATA.map((item, index) => (
                                            <tr key={index} className="border-b border-neutral-50 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                <td className="px-6 py-6 font-semibold text-neutral-800 dark:text-neutral-200">{item.id}</td>
                                                <td className="px-6 py-6 text-center">{item.units}</td>
                                                <td className="px-6 py-6 text-center">{item.date}</td>
                                                <td className="px-6 py-6">
                                                    <span className={item.status === 'Active' ? 'text-green-500 font-bold' : 'text-orange-400 font-bold'}>
                                                        {item.status}
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
