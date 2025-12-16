import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    PenSquare,
    Star,
    Send,
    File,
    Trash2,
    AlertTriangle,
    Archive,
    Plus,
    MoreVertical,
    Smile,
    Paperclip,
    FileText,
    Printer
} from 'lucide-react';
import TailorSidebar from './TailorSidebar';
import { cn } from '../../lib/utils';

export default function TailorMessages({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <TailorSidebar
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
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-white/10 shadow-sm transition-colors">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden">

                    {/* Inbox Sidebar */}
                    <div className="w-64 bg-white dark:bg-white/5 border-r border-neutral-100 dark:border-white/10 overflow-y-auto hidden md:block transition-colors">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Messages</h1>
                            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                <Plus size={18} /> Compose
                            </button>
                        </div>

                        <div className="px-4">
                            <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-2 px-2">My Email</h4>
                            <ul className="space-y-1">
                                {['Inbox', 'Starred', 'Sent', 'Draft', 'Spam', 'Important', 'Bin'].map((item, i) => (
                                    <li key={item}>
                                        <button className={cn(
                                            "w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors",
                                            i === 0 ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                                        )}>
                                            <div className="flex items-center gap-3">
                                                {i === 0 && <div className="p-1"><div className="w-3 h-3 border border-neutral-500 rounded-sm flex items-center justify-center"><div className="w-1.5 h-1 bg-neutral-500"></div></div></div>}
                                                {/* Using icons based on index would be better but keeping it simple as per previous mockups or generic icon logic */}
                                                {item === 'Inbox' && <span className="text-lg">📥</span>}
                                                {item === 'Starred' && <Star size={14} />}
                                                {item === 'Sent' && <Send size={14} />}
                                                {item === 'Draft' && <File size={14} />}
                                                {item === 'Spam' && <AlertTriangle size={14} />}
                                                {item === 'Important' && <Archive size={14} />}
                                                {item === 'Bin' && <Trash2 size={14} />}
                                                <span className={i === 0 ? "font-bold" : ""}>{item}</span>
                                            </div>
                                            {['1253', '245', '24,532', '09', '14', '18', '9'][i] && (
                                                <span className="text-[10px] text-neutral-400">{['1253', '245', '24,532', '09', '14', '18', '9'][i]}</span>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-4 mt-8">
                            <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-2 px-2">Label</h4>
                            <ul className="space-y-1">
                                {['Primary', 'Social', 'Work', 'Friends'].map((label, i) => (
                                    <li key={label}>
                                        <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                                            <div className={cn(
                                                "w-3 h-3 rounded border-2",
                                                i === 0 ? "border-emerald-500" : i === 1 ? "border-blue-500" : i === 2 ? "border-orange-500" : "border-purple-500"
                                            )}></div>
                                            {label}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-400 dark:text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                                        <Plus size={14} /> Create New Label
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col bg-white dark:bg-[#0F0F12] transition-colors">
                        {/* Chat Header */}
                        <div className="h-16 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-8 shrink-0 transition-colors">
                            <div className="flex items-center gap-3">
                                <button className="md:hidden mr-2 text-neutral-400"><Menu size={20} /></button>
                                <ChevronDown size={16} className="text-neutral-400" />
                                <h2 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">Minerva Barnett</h2>
                                <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded">Friends</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"><Printer size={16} /></button>
                                <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"><Star size={16} /></button>
                                <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"><Trash2 size={16} /></button>
                            </div>
                        </div>

                        {/* Messages Content */}
                        <div className="flex-1 overflow-y-auto p-8 bg-white dark:bg-[#0F0F12] transition-colors">
                            {/* Message 1 */}
                            <div className="flex items-start gap-4 mb-8">
                                <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0">
                                    <img src="" alt="img" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="bg-[#F3F4F6] dark:bg-neutral-800 p-5 rounded-2xl rounded-tl-none max-w-2xl text-xs text-neutral-600 dark:text-neutral-200 leading-relaxed relative group transition-colors">
                                        Hello! I was just calling about the Grey Linen Trousers order. I know we approved the pattern, but I'm nervous about the timeline. Is the fabric here yet and pre-treated? I need them ready for my business trip on the 10th of next month and I would like a final fitting a few days before.
                                        <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><MoreVertical size={14} className="text-neutral-400" /></button>
                                        <span className="absolute bottom-2 right-4 text-[10px] text-neutral-400">6.30 pm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Message 2 (Sent) */}
                            <div className="flex flex-col items-end gap-1 mb-8">
                                <div className="bg-black dark:bg-neutral-700 text-white p-5 rounded-2xl rounded-tr-none max-w-2xl text-xs leading-relaxed relative transition-colors">
                                    Hi Minerva! Great news the Linen fabric arrived this morning and is now pre shrunk. We are ready to start cutting tomorrow.
                                    <button className="absolute top-2 right-2 text-white/50"><MoreVertical size={14} /></button>
                                    <span className="absolute bottom-2 right-4 text-[10px] text-white/50">6.34 pm</span>
                                </div>
                            </div>

                            {/* Message 3 */}
                            <div className="flex items-start gap-4 mb-8">
                                <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0">
                                    <img src="" alt="img" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="bg-[#F3F4F6] dark:bg-neutral-800 p-5 rounded-2xl rounded-tl-none max-w-2xl text-xs text-neutral-600 dark:text-neutral-200 leading-relaxed relative group transition-colors">
                                        Wonderful! Just one thing. I lost a little weight over the past two weeks, mainly around my waist and hips. Could you please make sure the AI Measurement system is updated with my latest body scan data? It's crucial that you check the difference against the original 3D scan we took last month before the fabric is actually cut. I don't want the new trousers to be too loose absolute precision is vital for a perfect fit this time, as these are needed urgently for a major presentation next week. Thanks!
                                        <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><MoreVertical size={14} className="text-neutral-400" /></button>
                                        <span className="absolute bottom-2 right-4 text-[10px] text-neutral-400">6.38 pm</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Compose Area */}
                        <div className="p-6 border-t border-neutral-100 dark:border-white/10 transition-colors">
                            <div className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl p-2 flex items-center gap-3 shadow-sm transition-colors">
                                <button className="text-neutral-400 hover:text-neutral-600 p-2"><MoreVertical size={18} /></button>
                                <input
                                    type="text"
                                    placeholder="Write massage"
                                    className="flex-1 bg-transparent border-none outline-none text-sm h-10 placeholder:text-neutral-400 text-neutral-900 dark:text-neutral-100"
                                />
                                <button className="text-neutral-400 hover:text-neutral-600 p-2"><Paperclip size={18} /></button>
                                <button className="text-neutral-400 hover:text-neutral-600 p-2"><FileText size={18} /></button>
                                <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                    Send <Send size={12} />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
