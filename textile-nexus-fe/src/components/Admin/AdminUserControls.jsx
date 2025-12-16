import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Filter,
    RefreshCw,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import AdminSidebar from './AdminSidebar';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const USER_REQUESTS = [
    { id: '00001', name: "Christine Brooks", qualification: "089 Kitch Green Apt. 448", date: "04 Sep 2019", type: "Designer", status: "Pending" },
    { id: '00002', name: "Rosie Pearson", qualification: "979 Immanuel Ferry Suite 526", date: "28 May 2019", type: "Designer", status: "Pending" },
    { id: '00003', name: "Darrell Caldwell", qualification: "8587 Frida Ports", date: "23 Nov 2019", type: "Tailor", status: "Pending" },
    { id: '00004', name: "Gilbert Johnston", qualification: "768 Destiny Lake Suite 600", date: "05 Feb 2019", type: "Factory", status: "Pending" },
    { id: '00005', name: "Alan Cain", qualification: "042 Mylene Throughway", date: "29 Jul 2019", type: "Designer", status: "Pending" },
    { id: '00006', name: "Alfred Murray", qualification: "543 Weimann Mountain", date: "15 Aug 2019", type: "Factory", status: "Pending" },
    { id: '00007', name: "Maggie Sullivan", qualification: "New Scottieberg", date: "21 Dec 2019", type: "Tailor", status: "Accepted" },
    { id: '00008', name: "Rosie Todd", qualification: "New Jon", date: "30 Apr 2019", type: "Factory", status: "Rejected" },
    { id: '00009', name: "Dollie Hines", qualification: "124 Lyla Forge Suite 975", date: "09 Jan 2019", type: "Fabric Supplier", status: "Accepted" },
];

const ITEMS_PER_PAGE = 7;

export default function AdminUserControls({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All'); // All, Pending, Accepted, Rejected
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState(USER_REQUESTS);

    // Filter Logic
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Handle Status Update
    const handleStatusUpdate = (id, newStatus) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, status: newStatus } : user
        ));
    };

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
                activePage="user-controls"
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
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
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
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-neutral-900 mb-1 dark:text-white">User Requests</h1>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-white dark:bg-white/5 rounded-t-2xl border-b border-neutral-100 dark:border-white/10 dark:backdrop-blur-xl p-4 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 px-3">
                            <Filter size={20} className="text-neutral-500" />
                            <span className="font-bold text-neutral-700 dark:text-white text-sm">Filter By</span>
                        </div>

                        {/* Filter Dropdowns */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] dark:bg-black/5 rounded-xl cursor-pointer min-w-[120px] justify-between relative group">
                            <span className="text-sm font-bold text-neutral-700 dark:text-white">Date</span>
                            <ChevronDown size={16} className="text-neutral-400" />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] dark:bg-black/5 rounded-xl cursor-pointer min-w-[140px] justify-between">
                            <span className="text-sm font-bold text-neutral-700 dark:text-white ">Role Type</span>
                            <ChevronDown size={16} className="text-neutral-400" />
                        </div>

                        {/* Status Filter Dropdown */}
                        <div className="relative dark:bg-black/5">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] dark:bg-black/5 rounded-xl cursor-pointer min-w-[160px] justify-between group">
                                <select
                                    value={statusFilter}
                                    onChange={(e) => {
                                        setStatusFilter(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                >
                                    <option value="All">All Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                <span className="text-sm font-bold text-neutral-700 dark:text-neutral-200">
                                    {statusFilter === 'All' ? 'Acceptance Status' : statusFilter}
                                </span>
                                <ChevronDown size={16} className="text-neutral-400" />
                            </div>
                        </div>

                        {/* Reset Filter */}
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setStatusFilter('All');
                                setCurrentPage(1);
                            }}
                            className="flex items-center gap-2 text-rose-500 font-bold text-sm ml-auto px-4 hover:text-rose-600"
                        >
                            <RefreshCw size={16} />
                            <span>Reset Filter</span>
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 rounded-b-3xl shadow-sm overflow-hidden mb-6 transition-all duration-300 border border-t-0 border-neutral-100 dark:border-white/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F9FAFB] dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider border-b border-neutral-100 dark:border-white/10">
                                        <th className="px-6 py-5">ID</th>
                                        <th className="px-6 py-5">Name</th>
                                        <th className="px-6 py-5">Qualification</th>
                                        <th className="px-6 py-5">Date</th>
                                        <th className="px-6 py-5">Type</th>
                                        <th className="px-6 py-5">Status</th>
                                        <th className="px-6 py-5 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {paginatedUsers.length > 0 ? (
                                        paginatedUsers.map((user) => (
                                            <tr key={user.id} className="hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors border-b border-neutral-100 dark:border-white/10 last:border-none group">
                                                <td className="px-6 py-4 font-medium text-neutral-500 dark:text-neutral-400">{user.id}</td>
                                                <td className="px-6 py-4 font-bold text-neutral-800 dark:text-white">{user.name}</td>
                                                <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">{user.qualification}</td>
                                                <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">{user.date}</td>
                                                <td className="px-6 py-4 text-neutral-800 dark:text-white font-medium">{user.type}</td>
                                                <td className="px-6 py-4">
                                                    {user.status === 'Pending' && <span className="text-neutral-500 font-medium">Pending</span>}
                                                    {user.status === 'Accepted' && <span className="text-emerald-500 font-bold">Accepted</span>}
                                                    {user.status === 'Rejected' && <span className="text-rose-500 font-bold">Rejected</span>}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <ActionButtons
                                                            status={user.status}
                                                            onAccept={() => handleStatusUpdate(user.id, 'Accepted')}
                                                            onReject={() => handleStatusUpdate(user.id, 'Rejected')}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-8 text-center text-neutral-500">
                                                No users found matching your filters.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between">
                        <p className="text-neutral-400 text-sm font-medium">
                            Showing {Math.min(startIndex + 1, filteredUsers.length)}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredUsers.length)} of {filteredUsers.length}
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

// Override button rendering logic inside the component based on closer inspection of image for rows 7 & 8
// Row 7 (Accepted): Accept button is Grey logic, Reject button is Red (Active-looking).
// Row 8 (Rejected): Accept button is Green (Active-looking), Reject button is Grey logic.
// This matches "Undo" capability.


function ActionButtons({ status, onAccept, onReject }) {
    if (status === 'Pending') {
        return (
            <>
                <button
                    onClick={onAccept}
                    className="px-5 py-1.5 bg-[#d1fadf] text-[#10b981] rounded text-xs font-bold hover:bg-[#a7f3d0] transition-colors min-w-[70px]"
                >
                    Accept
                </button>
                <div className="w-2"></div>
                <button
                    onClick={onReject}
                    className="px-5 py-1.5 bg-[#fee2e2] text-[#ef4444] rounded text-xs font-bold hover:bg-[#fecaca] transition-colors min-w-[70px]"
                >
                    Reject
                </button>
            </>
        )
    }
    if (status === 'Accepted') {
        // Accepted: Accept is disabled (grey), Reject is enabled (red) - "Undo" logic to reject
        return (
            <>
                <button className="px-5 py-1.5 bg-neutral-200 text-neutral-400 rounded text-xs font-bold cursor-not-allowed min-w-[70px]">
                    Accept
                </button>
                <div className="w-2"></div>
                <button
                    onClick={onReject}
                    className="px-5 py-1.5 bg-[#fee2e2] text-[#ef4444] rounded text-xs font-bold hover:bg-[#fecaca] transition-colors min-w-[70px]"
                >
                    Reject
                </button>
            </>
        )
    }
    if (status === 'Rejected') {
        // Rejected: Accept is enabled (green), Reject is disabled (grey) - "Undo" logic to accept
        return (
            <>
                <button
                    onClick={onAccept}
                    className="px-5 py-1.5 bg-[#d1fadf] text-[#10b981] rounded text-xs font-bold hover:bg-[#a7f3d0] transition-colors min-w-[70px]"
                >
                    Accept
                </button>
                <div className="w-2"></div>
                <button className="px-5 py-1.5 bg-neutral-200 text-neutral-400 rounded text-xs font-bold cursor-not-allowed min-w-[70px]">
                    Reject
                </button>
            </>
        )
    }
}
