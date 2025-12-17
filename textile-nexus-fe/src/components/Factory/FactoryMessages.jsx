import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Plus,
    Inbox,
    Star,
    Send,
    FileText,
    AlertTriangle,
    AlertCircle,
    Trash2,
    MoreVertical,
    Printer,
    Paperclip,
    File,
    Send as SendIcon,
    Mic,
    ChevronLeft
} from 'lucide-react';
import { cn } from '../../lib/utils';
import FactorySidebar from './FactorySidebar';

// --- Mock Data ---

const MESSAGE_LABELS = [
    { name: 'Primary', color: 'bg-emerald-500' },
    { name: 'Social', color: 'bg-blue-500' },
    { name: 'Work', color: 'bg-orange-500' },
    { name: 'Friends', color: 'bg-fuchsia-500' },
];

const MENU_ITEMS = [
    { icon: Inbox, label: 'Inbox', count: 1253, active: true },
    { icon: Star, label: 'Starred', count: 245 },
    { icon: Send, label: 'Sent', count: '24,532' },
    { icon: FileText, label: 'Draft', count: '09' },
    { icon: AlertTriangle, label: 'Spam', count: 14 },
    { icon: AlertCircle, label: 'Important', count: 18 },
    { icon: Trash2, label: 'Bin', count: 9 },
];

// --- Sub Components ---

const MessageBubble = ({ text, time, isSender }) => (
    <div className={cn("flex items-end gap-3 max-w-[80%]", isSender ? "self-end flex-row-reverse" : "self-start")}>
        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0 transition-colors"></div>
        <div className={cn(
            "p-4 rounded-2xl text-sm leading-relaxed relative group transition-colors",
            isSender ? "bg-black dark:bg-blue-600 text-white rounded-br-none" : "bg-[#F3F4F6] dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-none"
        )}>
            {text}
            <div className={cn("absolute bottom-1 text-[10px] opacity-60 flex items-center gap-1", isSender ? "right-2 text-white" : "right-2 text-neutral-500 dark:text-neutral-400")}>
                {time}
                {isSender && <MoreVertical size={10} className="rotate-90" />}
            </div>
        </div>
    </div>
);

const SystemMessage = ({ text }) => (
    <div className="w-full bg-[#F3F4F6] dark:bg-neutral-800 p-4 rounded-xl text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto my-4 relative transition-colors">
        <div className="absolute top-4 -left-12 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 transition-colors"></div>
        {text}
        <div className="absolute bottom-2 right-4 text-[10px] text-neutral-400 dark:text-neutral-500">6.30 pm <MoreVertical size={10} className="inline ml-1" /></div>
    </div>
);


export default function FactoryMessages({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <FactorySidebar
                activePage="messages"
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

                <div className="flex-1 overflow-hidden p-6 lg:p-8 flex gap-6">
                    {/* Left Sidebar (Mail Menu) */}
                    <div className="w-64 shrink-0 hidden lg:flex flex-col h-full bg-white dark:bg-white/5 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-white/10 transition-colors">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Messages</h2>
                        <button className="w-full bg-[#1A1A1E] dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold text-sm mb-8 hover:bg-black dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-black/20 dark:shadow-none flex items-center justify-center gap-2">
                            <Plus size={16} /> Compose
                        </button>
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-neutral-900 dark:text-white mb-4 px-2">My Email</h3>
                            <div className="space-y-1">
                                {MENU_ITEMS.map((item) => (
                                    <div key={item.label} className={cn(
                                        "flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors text-sm font-medium",
                                        item.active ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold" : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-200"
                                    )}>
                                        <div className="flex items-center gap-3">
                                            <item.icon size={18} />
                                            <span>{item.label}</span>
                                        </div>
                                        {item.count && <span className="text-xs">{item.count}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-neutral-900 dark:text-white mb-4 px-2">Label</h3>
                            <div className="space-y-3 px-3">
                                {MESSAGE_LABELS.map(label => (
                                    <div key={label.name} className="flex items-center gap-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer">
                                        <div className={cn("w-3 h-3 rounded border border-neutral-300 dark:border-neutral-600", "flex items-center justify-center")}></div>
                                        <span>{label.name}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 dark:text-neutral-500 mt-4 cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300">
                                    <Plus size={12} /> Create New Label
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col h-full bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-neutral-100 dark:border-white/10 overflow-hidden transition-colors">
                        <div className="px-8 py-5 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between bg-white dark:bg-white/5 shrink-0 transition-colors">
                            <div className="flex items-center gap-4">
                                <button className="p-1 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg lg:hidden transition-colors">
                                    <ChevronLeft size={20} className="text-neutral-600 dark:text-neutral-300" />
                                </button>
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Alpha Fabric Suppliers</h3>
                                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
                                    Supplier
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"><Printer size={18} /></button>
                                <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"><Star size={18} /></button>
                                <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"><Trash2 size={18} /></button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-white dark:bg-white/5 transition-colors">
                            <SystemMessage text={
                                <>
                                    <p className="font-bold mb-1">Incoming Supplier Request.</p>
                                    <p>We have dispatched the 200 units of Grey Cotton Fabric.</p>
                                </>
                            } />
                            <MessageBubble isSender={true} time="6.34 pm" text="Received the notification. Will update once arrived." />
                        </div>
                        <div className="p-6 border-t border-neutral-100 dark:border-white/10 bg-white dark:bg-white/5 shrink-0 transition-colors">
                            <div className="flex items-center gap-4">
                                <button className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"><Mic size={20} /></button>
                                <input type="text" placeholder="Write massage" className="flex-1 bg-transparent border-none outline-none text-sm text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-300 dark:placeholder:text-neutral-600" />
                                <div className="flex items-center gap-4">
                                    <button className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"><Paperclip size={20} /></button>
                                    <button className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"><File size={20} /></button>
                                    <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center gap-2 text-sm font-bold shadow-lg shadow-black/20 dark:shadow-none hover:bg-neutral-900 dark:hover:bg-neutral-200 transition-all">Send <SendIcon size={14} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
