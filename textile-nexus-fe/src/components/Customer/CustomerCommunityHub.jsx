import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    PenLine,
    Phone,
    Video,
    MoreVertical,
    Smile,
    Mic,
    Paperclip,
    Send,
    Play,
    Pause,
    FileText,
    ChevronRight,
    Users,
    Link as LinkIcon,
    Hash,
    Folder
} from 'lucide-react';
import CustomerSidebar from './CustomerSidebar';
import { useTheme } from '../../context/ThemeContext';

const MOCK_CHATS = [
    { id: 1, name: 'Fabric Deals', time: '4:27pm', preview: 'Update: Fabric choice for Indigo Denim? Looking for ethical source.', avatar: 'https://placehold.co/100/1e3a8a/ffffff?text=FD', unread: true },
    { id: 2, name: 'Customer Support', time: '4:12pm', preview: 'Can I track my custom dress order? Estimated delivery?', avatar: 'https://placehold.co/100/0f172a/ffffff?text=CS', unread: true },
    { id: 3, name: 'Designer: Alex Chen', time: '3:27pm', preview: 'Loving the sketch! Can we try a wider collar variant?', avatar: 'https://i.pravatar.cc/150?img=11', unread: false },
    { id: 4, name: 'Factory Team', time: '4:00am', preview: 'Fitting Request: Ready for virtual fitting of my jacket. Availability next week?', avatar: 'https://placehold.co/100/064e3b/ffffff?text=FT', unread: false },
    { id: 5, name: 'Pending Measurements', time: '3:33pm', preview: 'Fitting Request: Ready for virtual fitting of my jacket. Availability next week?', avatar: 'https://placehold.co/100/374151/ffffff?text=PM', unread: false },
    { id: 6, name: 'Sustainable Tailors Group', time: '1:12pm', preview: 'Any tips for caring for linen-cotton blends sustainably?', avatar: 'https://placehold.co/100/78350f/ffffff?text=ST', unread: false },
    { id: 7, name: 'Job Offer: Need Cutter', time: '11:22am', preview: 'Looking for a local tailor specialized in formal wear alterations.', avatar: 'https://placehold.co/100/1e40af/ffffff?text=JO', unread: false },
    { id: 8, name: 'New Fitting Request', time: '11:22am', preview: 'New AI-powered style recommendations based on your profile!', avatar: 'https://placehold.co/100/111827/ffffff?text=NF', unread: false },
];

const MOCK_MESSAGES = [
    {
        id: 1,
        sender: 'Lisa',
        time: '16 October 2025 4:22pm',
        avatar: 'https://i.pravatar.cc/150?img=5',
        content: 'Hi team! Emily R. is looking for a custom fit on her new dress - she scanned her 3D profile. Any thoughts on how best to adjust the sleeve length to her preference without impacting the puff?\n\nLet me know asap!'
    },
    {
        id: 2,
        sender: 'Ryan',
        time: '16 October 2025 4:27pm',
        avatar: 'https://i.pravatar.cc/150?img=12',
        content: 'Based on her Smart Fit data, we have about 1.5 inches of play for the sleeve. I recommend a slight gather at the cuff to retain the puff while shortening. I\'ll mock up a quick 3D render to show her. Here\'s a quick demo of the corner turn.\n\nHere\'s the complete explanation',
        audio: true
    },
    {
        id: 3,
        sender: 'Ann',
        time: '16 October 2025 4:30pm',
        avatar: 'https://i.pravatar.cc/150?img=9',
        content: 'This sounds promising! I really appreciate the attention to detail. Could we also discuss adding a subtle lining to the skirt part for better drape? I\'m happy to review any 3D mock-ups.'
    },
    {
        id: 4,
        sender: 'Ryan',
        time: '16 October 2025 4:32pm',
        avatar: 'https://i.pravatar.cc/150?img=12',
        content: 'Great point, Emily! I can definitely add a lightweight organic cotton lining. It will improve the drape without adding significant bulk. I\'ll update the 3D render with that detail.'
    },
    {
        id: 5,
        sender: 'Me',
        time: '16 October 2025 4:33pm',
        avatar: 'https://i.pravatar.cc/150?img=32',
        content: 'Perfect collaboration! Once Emily approves the 3D mock-up, we can generate the final design file for the factory. I\'ll ensure the QR garment Passport data reflects these custom changes.',
        file: { name: 'Organic_Trousers_QR_Data.pdf', size: '350 KB' }
    },
];

const MOCK_MEMBERS = [
    { name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jessie', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Clara', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Ryan', avatar: 'https://i.pravatar.cc/150?img=12' },
];

const MOCK_CREATIONS = [
    { author: 'Lisa', avatar: 'https://i.pravatar.cc/150?img=5', date: '21 August 2024 at 5.00 PM', title: 'requested very thick denim —', subtitle: '"Fabric Deals"' },
    { author: 'Ryan', avatar: 'https://i.pravatar.cc/150?img=12', date: '10 September 2024 at 3.00 PM', title: 'created whiteboard —', subtitle: '"Week 5 Lab Planning"' },
    { author: 'Alex', avatar: 'https://i.pravatar.cc/150?img=11', date: '16 October 2024 at 2.00 AM', title: 'started group quiz —', subtitle: '"Subnetting Speed Test"' },
    { author: 'Max', avatar: 'https://i.pravatar.cc/150?img=13', date: '18 October 2024 at 8.00 PM', title: 'Uploaded new design —', subtitle: '"Summer Collection"' },
];

export default function CustomerCommunityHub({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Groups'); // Groups | AI Chat
    const [messageInput, setMessageInput] = useState('');

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <CustomerSidebar
                activePage="community-hub"
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
                        <button className="relative p-2 bg-orange-50 dark:bg-white/10 rounded-xl">
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
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-hidden p-6 lg:p-8">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Community Hub</h1>

                    <div className="bg-white dark:bg-black dark:border-white/10 rounded-2xl shadow-sm border border-neutral-100 flex h-[calc(100%-3rem)] overflow-hidden transition-colors">
                        {/* LEFT: Chat List */}
                        <div className="w-80 border-r border-neutral-100 dark:border-white/10 flex flex-col shrink-0 bg-white dark:bg-black transition-colors">
                            <div className="p-4 flex gap-2">
                                <button
                                    onClick={() => setActiveTab('Groups')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'Groups' ? 'bg-[#F9FAFB] dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'}`}
                                >
                                    Groups
                                </button>
                                <button
                                    onClick={() => setActiveTab('AI Chat')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'AI Chat' ? 'bg-[#F9FAFB] dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'}`}
                                >
                                    AI Chat
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                {MOCK_CHATS.map((chat) => (
                                    <div key={chat.id} className={`p-4 flex gap-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 cursor-pointer border-b border-neutral-50 dark:border-white/10 ${chat.id === 1 ? 'bg-neutral-50 dark:bg-neutral-800/30' : ''}`}>
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
                                                <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                                            </div>
                                            {chat.unread && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-baseline mb-0.5">
                                                <h3 className="text-sm font-bold text-neutral-900 dark:text-white truncate">{chat.name}</h3>
                                                <span className="text-[10px] text-neutral-400 shrink-0">{chat.time}</span>
                                            </div>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">{chat.preview}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MIDDLE: Chat Area */}
                        <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-black transition-colors">
                            {/* Chat Header */}
                            <div className="h-16 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-6 shrink-0 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center text-white text-xs font-bold">
                                        FD
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-bold text-neutral-900 dark:text-white">Fabric Deals</h2>
                                        <p className="text-xs text-neutral-500 truncate max-w-md">Alice, Jessie, Alex, Clara,...</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <PenLine size={18} className="cursor-pointer hover:text-neutral-600" />
                                    <Phone size={18} className="cursor-pointer hover:text-neutral-600" />
                                    <Video size={18} className="cursor-pointer hover:text-neutral-600" />
                                    <MoreVertical size={18} className="cursor-pointer hover:text-neutral-600" />
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-black transition-colors">
                                {MOCK_MESSAGES.map((msg) => (
                                    <div key={msg.id} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden shrink-0 mt-1">
                                            <img src={msg.avatar} alt={msg.sender} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 max-w-2xl">
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="text-sm font-bold text-neutral-900 dark:text-white">{msg.sender}</span>
                                                <span className="text-[10px] text-neutral-400">{msg.time}</span>
                                            </div>

                                            <div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                                                {msg.content}
                                            </div>

                                            {msg.audio && (
                                                <div className="mt-3 bg-black rounded-lg p-3 flex items-center gap-3 w-72">
                                                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center cursor-pointer">
                                                        <Play size={14} className="text-white fill-white ml-0.5" />
                                                    </div>
                                                    <div className="flex-1 h-8 flex items-center gap-0.5">
                                                        {/* Fake Audio Visualizer */}
                                                        {[...Array(20)].map((_, i) => (
                                                            <div key={i} className="w-1 bg-white/50 rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
                                                        ))}
                                                    </div>
                                                    <span className="text-[10px] text-white font-mono">0:09</span>
                                                </div>
                                            )}

                                            {msg.file && (
                                                <div className="mt-2 flex items-center gap-2">
                                                    <Paperclip size={14} className="text-blue-500" />
                                                    <a href="#" className="text-sm text-blue-500 hover:underline">{msg.file.name}</a>
                                                    <span className="text-xs text-neutral-400">({msg.file.size})</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-center">
                                    <span className="text-xl">👌</span>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-neutral-100 dark:border-white/10 bg-neutral-50 dark:bg-white/5 transition-colors">
                                <div className="bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center px-4 py-3 shadow-sm">
                                    <input
                                        type="text"
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        placeholder="Type something..."
                                        className="flex-1 bg-transparent outline-none text-sm text-neutral-700 dark:text-white placeholder:text-neutral-400"
                                    />
                                    <div className="flex items-center gap-3 text-neutral-400">
                                        <Smile size={18} className="cursor-pointer hover:text-neutral-600" />
                                        <Mic size={18} className="cursor-pointer hover:text-neutral-600" />
                                        <Paperclip size={18} className="cursor-pointer hover:text-neutral-600" />
                                        <button className="w-8 h-8 bg-neutral-400 hover:bg-neutral-600 rounded-full flex items-center justify-center text-white transition-colors">
                                            <Send size={14} className="ml-0.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Info Panel */}
                        <div className="w-72 bg-[#F9FAFB] dark:bg-white/5 border-l border-neutral-100 dark:border-white/10 hidden xl:flex flex-col transition-colors">
                            <div className="p-4 border-b border-neutral-200 dark:border-white/10 flex items-center justify-between">
                                <span className="text-sm font-bold text-neutral-900 dark:text-white">Group Information</span>
                                <MoreVertical size={16} className="text-neutral-400 cursor-pointer" />
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                                {/* Members */}
                                <div>
                                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-300 mb-3">Group Members</h4>
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                                        <div className="flex flex-col items-center gap-1 min-w-[50px]">
                                            <div className="w-10 h-10 rounded-full border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:bg-neutral-200">
                                                <Users size={18} className="text-neutral-500" />
                                            </div>
                                        </div>
                                        {MOCK_MEMBERS.map((m) => (
                                            <div key={m.name} className="flex flex-col items-center gap-1 min-w-[50px]">
                                                <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
                                                    <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
                                                </div>
                                                <span className="text-[10px] text-neutral-600 dark:text-neutral-300">{m.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Creations */}
                                <div>
                                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-300 mb-3">AI + Group Creations</h4>
                                    <div className="space-y-3">
                                        {MOCK_CREATIONS.map((c, i) => (
                                            <div key={i} className="bg-white dark:bg-black p-3 rounded-xl border border-neutral-100 dark:border-white/10 shadow-sm transition-colors">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden">
                                                            <img src={c.avatar} alt={c.author} className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="text-xs font-bold text-neutral-900 dark:text-white">{c.author}</span>
                                                    </div>
                                                    <ChevronRight size={14} className="text-neutral-400" />
                                                </div>
                                                <div className="pl-8">
                                                    <p className="text-[10px] text-neutral-400 mb-0.5">{c.date}</p>
                                                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-tight">
                                                        {c.title} <br />
                                                        <span className="text-neutral-500">{c.subtitle}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links & Files */}
                                <div className="space-y-1">
                                    <button className="w-full flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center">
                                                <FileText size={12} className="text-neutral-600 dark:text-white" />
                                            </div>
                                            <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Documents</span>
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-400" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center">
                                                <LinkIcon size={12} className="text-neutral-600 dark:text-white" />
                                            </div>
                                            <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Links</span>
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-400" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center">
                                                <Hash size={12} className="text-neutral-600 dark:text-white" />
                                            </div>
                                            <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Channels</span>
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-400" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center">
                                                <Folder size={12} className="text-neutral-600 dark:text-white" />
                                            </div>
                                            <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Groups</span>
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-400" />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
