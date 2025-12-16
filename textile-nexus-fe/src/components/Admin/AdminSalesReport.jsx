import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Printer,
    Send
} from 'lucide-react';
import { cn } from '../../lib/utils';
import AdminSidebar from './AdminSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const INVOICE_ITEMS = [
    { serial: 1, description: "Children Toy", quantity: 2, baseCost: "$20", totalCost: "$80" },
    { serial: 2, description: "Makeup", quantity: 2, baseCost: "$50", totalCost: "$100" },
    { serial: 3, description: "Asus Laptop", quantity: 5, baseCost: "$100", totalCost: "$500" },
    { serial: 4, description: "Iphone X", quantity: 4, baseCost: "$1000", totalCost: "$4000" },
];

export default function AdminSalesReport({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [items, setItems] = useState(INVOICE_ITEMS);
    const [searchQuery, setSearchQuery] = useState('');

    // Dynamic Calculations
    const calculateTotal = () => {
        return items.reduce((acc, item) => {
            const cost = parseFloat(item.totalCost.replace('$', '').replace(',', ''));
            return acc + cost;
        }, 0);
    };

    // Handlers
    const handleDeleteItem = (serial) => {
        setItems(items.filter(item => item.serial !== serial));
    };

    const handleUpdateItem = (serial, field, value) => {
        setItems(items.map(item => {
            if (item.serial === serial) {
                const updatedItem = { ...item, [field]: value };
                // Recalculate total if quantity or baseCost changes
                if (field === 'quantity' || field === 'baseCost') {
                    const qty = field === 'quantity' ? parseInt(value) || 0 : item.quantity;
                    const base = field === 'baseCost' ? parseFloat(value.replace('$', '')) || 0 : parseFloat(item.baseCost.replace('$', ''));
                    updatedItem.totalCost = `$${qty * base}`;
                    updatedItem.quantity = qty;
                }
                return updatedItem;
            }
            return item;
        }));
    };

    // Filter Items
    const filteredItems = items.filter(item =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                activePage="sales-report"
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
                            placeholder="Search invoice items..."
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
                                AD
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-neutral-800 leading-tight">Admin User</p>
                                <p className="text-xs text-neutral-400">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Sales Report</h1>

                    {/* Report Card */}
                    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-sm border border-neutral-100 dark:border-white/10 min-h-[600px] relative transition-all duration-300">

                        {/* Invoice Header Info */}
                        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
                            <div className="space-y-4 md:w-1/3">
                                <div className="text-sm">
                                    <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Invoice From :</p>
                                    <h4 className="font-bold text-neutral-900 dark:text-white text-lg">Virginia Walker</h4>
                                    <p className="text-neutral-500 dark:text-neutral-400 mt-1">9694 Krajcik Locks Suite 635</p>
                                </div>
                            </div>

                            <div className="space-y-4 md:w-1/3">
                                <div className="text-sm">
                                    <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Invoice To :</p>
                                    <h4 className="font-bold text-neutral-900 dark:text-white text-lg">Austin Miller</h4>
                                    <p className="text-neutral-500 dark:text-neutral-400 mt-1">Brookview</p>
                                </div>
                            </div>

                            <div className="space-y-2 md:w-1/3 text-left md:text-right">
                                <p className="text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Invoice Date :</span> 12 Nov 2019</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Due Date :</span> 25 Dec 2019</p>
                            </div>
                        </div>

                        {/* Invoice Items Table */}
                        <div className="overflow-x-auto mb-12">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F2F4F8] dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-bold">
                                        <th className="px-8 py-4 rounded-l-xl text-center w-24">Serial No.</th>
                                        <th className="px-8 py-4 w-1/3">Description</th>
                                        <th className="px-8 py-4 text-center">Quantity</th>
                                        <th className="px-8 py-4 text-center">Base Cost</th>
                                        <th className="px-8 py-4 rounded-r-xl text-center">Total Cost</th>
                                        <th className="px-0 py-4 w-10"></th>
                                    </tr>
                                    {/* Spacer row */}
                                </thead>
                                <tbody className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                    {/* Spacer Row */}
                                    <tr className="h-4"></tr>

                                    {filteredItems.map((item) => (
                                        <tr key={item.serial} className="border-b border-neutral-50 dark:border-white/10 last:border-none hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group">
                                            <td className="px-8 py-6 text-center">{item.serial}</td>
                                            <td className="px-8 py-6 text-neutral-800 dark:text-neutral-200 font-semibold">
                                                <input
                                                    type="text"
                                                    value={item.description}
                                                    onChange={(e) => handleUpdateItem(item.serial, 'description', e.target.value)}
                                                    className="w-full bg-transparent outline-none focus:border-b border-neutral-300 dark:border-neutral-600 dark:text-white"
                                                />
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => handleUpdateItem(item.serial, 'quantity', e.target.value)}
                                                    className="w-16 text-center bg-transparent outline-none focus:border-b border-neutral-300 dark:border-neutral-600 dark:text-white"
                                                />
                                            </td>
                                            <td className="px-8 py-6 text-center">{item.baseCost}</td>
                                            <td className="px-8 py-6 text-center text-neutral-800 dark:text-white font-bold">{item.totalCost}</td>
                                            <td className="px-0 py-6 text-center">
                                                <button
                                                    onClick={() => handleDeleteItem(item.serial)}
                                                    className="text-neutral-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all font-bold text-lg"
                                                    title="Remove Item"
                                                >
                                                    &times;
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredItems.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="px-8 py-8 text-center text-neutral-400">
                                                No items found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Total & Actions */}
                        <div className="flex flex-col items-end gap-12">
                            <div className="flex items-center gap-12 text-lg">
                                <span className="font-bold text-neutral-800 dark:text-neutral-300">Total</span>
                                <span className="font-bold text-neutral-900 dark:text-white text-xl">=   ${calculateTotal()}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                                    <Printer size={20} />
                                </button>
                                <button className="flex items-center gap-3 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:bg-neutral-900 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-black/20 dark:shadow-none">
                                    <span>Send</span>
                                    <Send size={18} className="ml-1" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
