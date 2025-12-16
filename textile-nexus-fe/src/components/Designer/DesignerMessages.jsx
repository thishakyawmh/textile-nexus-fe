import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Inbox,
    Star,
    Send,
    FileText,
    AlertOctagon,
    AlertCircle,
    Trash2,
    Plus,
    MoreVertical,
    Printer,
    Paperclip,
    Mic,
    Send as SendIcon
} from 'lucide-react';
import { cn } from '../../lib/utils';
import DesignerSidebar from './DesignerSidebar';

const EMAIL_FOLDERS = [
    { id: 'inbox', label: 'Inbox', icon: <Inbox size={18} />, count: 1253 },
    { id: 'starred', label: 'Starred', icon: <Star size={18} />, count: 245 },
    { id: 'sent', label: 'Sent', icon: <Send size={18} />, count: 24532 },
    { id: 'draft', label: 'Draft', icon: <FileText size={18} />, count: '09' },
    { id: 'spam', label: 'Spam', icon: <AlertOctagon size={18} />, count: 14 },
    { id: 'important', label: 'Important', icon: <AlertCircle size={18} />, count: 18 },
    { id: 'bin', label: 'Bin', icon: <Trash2 size={18} />, count: 9 },
];

const LABELS = [
    { id: 'primary', label: 'Primary', color: 'bg-emerald-400' },
    { id: 'social', label: 'Social', color: 'bg-blue-400' },
    { id: 'work', label: 'Work', color: 'bg-orange-400' },
    { id: 'friends', label: 'Friends', color: 'bg-purple-400' },
];

export default function DesignerMessages({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeFolder, setActiveFolder] = useState('inbox');

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Main Sidebar (Navigation) */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
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
                        <button className="relative p-2 bg-orange-50 dark:bg-orange-500/10 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold overflow-hidden border-2 border-white dark:border-neutral-700 shadow-sm">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden p-6 lg:px-10 lg:pb-10 lg:pt-6 gap-6">

                    {/* Left Panel: Folders & Labels */}
                    <div className="w-64 bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-2xl border border-neutral-100 dark:border-white/10 hidden lg:flex flex-col shrink-0 h-full overflow-y-auto scrollbar-hide transition-colors">
                        <div className="p-6">
                            <button className="w-full bg-[#111] dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-neutral-200 transition-colors mb-6 shadow-lg">
                                <Plus size={16} /> Compose
                            </button>

                            <h3 className="text-xs font-bold text-neutral-900 dark:text-white mb-4 px-2">My Email</h3>
                            <div className="space-y-1 mb-8">
                                {EMAIL_FOLDERS.map(folder => (
                                    <button
                                        key={folder.id}
                                        onClick={() => setActiveFolder(folder.id)}
                                        className={cn(
                                            "w-full flex items-centerjustify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                                            activeFolder === folder.id ? "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-neutral-800 dark:hover:text-neutral-200"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            {folder.icon}
                                            <span>{folder.label}</span>
                                        </div>
                                        <span className="text-xs font-bold opacity-60 group-hover:opacity-100">{folder.count}</span>
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-xs font-bold text-neutral-900 dark:text-white mb-4 px-2">Label</h3>
                            <div className="space-y-1 mb-4">
                                {LABELS.map(label => (
                                    <button
                                        key={label.id}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                                    >
                                        <div className={cn("w-3 h-3 rounded border-2", label.color ? label.color.replace('bg-', 'border-').replace('400', '500') : "border-neutral-300")} />
                                        <div className={cn("w-3 h-3 rounded-sm border-2",
                                            label.id === 'primary' ? 'border-emerald-400' :
                                                label.id === 'social' ? 'border-blue-400' :
                                                    label.id === 'work' ? 'border-orange-400' :
                                                        'border-purple-400'
                                        )} />
                                        <span>{label.label}</span>
                                    </button>
                                ))}
                                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 mt-2">
                                    <Plus size={14} /> Create New Label
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Message View */}
                    <div className="flex-1 bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-2xl border border-neutral-100 dark:border-white/10 flex flex-col h-full overflow-hidden shadow-sm relative transition-colors">
                        {/* Message Header */}
                        <div className="h-16 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-6 shrink-0">
                            <div className="flex items-center gap-3">
                                <button className="lg:hidden mr-2 p-1 bg-neutral-100 dark:bg-neutral-800 rounded">
                                    <Menu size={16} />
                                </button>
                                <h2 className="font-bold text-neutral-900 dark:text-white">Minerva Barnett</h2>
                                <span className="bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] px-2 py-0.5 rounded font-bold">Friends</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <button className="p-2 hover:bg-neutral-50 dark:hover:bg-white/5 rounded-lg transition-colors"><Printer size={18} /></button>
                                <button className="p-2 hover:bg-neutral-50 dark:hover:bg-white/5 rounded-lg transition-colors"><Star size={18} /></button>
                                <button className="p-2 hover:bg-neutral-50 dark:hover:bg-white/5 rounded-lg transition-colors"><Trash2 size={18} /></button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#FAFAFA] dark:bg-black/50">
                            {/* Received Message */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0"></div>
                                <div className="max-w-[80%]">
                                    <div className="bg-[#F3F4F6] dark:bg-neutral-800 p-4 rounded-r-2xl rounded-bl-2xl text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-1 shadow-sm">
                                        Hi! I love your Floral Breeze pattern. Can you tell me how long it will take to receive the final files after I place the order
                                    </div>
                                    <div className="text-[10px] text-neutral-400 font-medium text-right flex items-center justify-end gap-1">
                                        6:30 pm <MoreVertical size={10} />
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message */}
                            <div className="flex flex-row-reverse gap-4">
                                <div className="max-w-[80%]">
                                    <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-l-2xl rounded-br-2xl text-sm leading-relaxed mb-1 shadow-md">
                                        Hello! Thank you so much for your interest in my Floral Breeze pattern ✨!
                                        Once you place the order, I will prepare and deliver the final high-quality files within 24 hours.
                                    </div>
                                    <div className="text-[10px] text-neutral-400 font-medium flex items-center gap-1">
                                        6:34 pm <MoreVertical size={10} />
                                    </div>
                                </div>
                            </div>

                            {/* Received Message Long */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0"></div>
                                <div className="max-w-[80%]">
                                    <div className="bg-[#F3F4F6] dark:bg-neutral-800 p-4 rounded-r-2xl rounded-bl-2xl text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-1 shadow-sm">
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.
                                        Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.
                                    </div>
                                    <div className="text-[10px] text-neutral-400 font-medium text-right flex items-center justify-end gap-1">
                                        6:38 pm <MoreVertical size={10} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-neutral-100 dark:border-white/10 bg-white dark:bg-black/50 transition-colors">
                            <div className="flex items-center gap-4 bg-white dark:bg-neutral-800 px-2 rounded-lg">
                                <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"><Mic size={20} /></button>
                                <input
                                    type="text"
                                    placeholder="Write massage"
                                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-neutral-400 text-neutral-900 dark:text-white h-10"
                                />
                                <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"><Paperclip size={20} /></button>
                                <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"><FileText size={20} /></button>
                                <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                                    Send <SendIcon size={12} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
