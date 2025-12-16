import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Users,
    MessageSquare,
    Video,
    Phone,
    Edit2,
    Paperclip,
    Mic,
    Send,
    Smile,
    MoreVertical,
    FileText,
    ChevronRight,
    Circle,
    UserPlus,
    Play
} from 'lucide-react';
import DesignerSidebar from './DesignerSidebar';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

// --- Mock Data ---

const GROUPS = [
    { id: 1, name: 'Assignment 3 : Network', lastMsg: 'Alice: Anyone figured out...', time: '4:27pm', active: true, unread: 2 },
    { id: 2, name: 'IELTS Speaking Practice', lastMsg: 'Let\'s practice Part 2...', time: '4:12pm', active: false, unread: 0 },
    { id: 3, name: 'French Language', lastMsg: 'Petite victoire ! I finally...', time: '3:27pm', active: false, unread: 1 },
    { id: 4, name: 'Physics Finals Cram Room', lastMsg: 'Uploading my summary...', time: '4:00pm', active: false, unread: 0 },
    { id: 5, name: 'Calculus II Crash Course', lastMsg: 'Don\'t forget: Integration...', time: '3:00pm', active: false, unread: 0 },
    { id: 6, name: 'SAT Essay Review Team', lastMsg: 'I posted my essay on...', time: '1:03pm', active: false, unread: 0 },
    { id: 7, name: 'Debate Practice Room', lastMsg: 'Next topic: Should schools...', time: '11:22am', active: false, unread: 1 },
    { id: 8, name: 'Midnight Study Squad', lastMsg: 'Lorem ipsum dolor sit...', time: '11:22am', active: false, unread: 0 },
];

const MESSAGES = [
    {
        id: 1,
        sender: 'Lisa',
        time: '19 October 2025 4:22pm',
        text: "Hey! Has anyone figured out the part where we have to calculate the number of usable IPs for each subnet? 🤔 I'm not sure if I'm supposed to subtract 2 or just use the full range.",
        avatar: 'https://i.pravatar.cc/150?img=5',
        subText: "Let me know asap!"
    },
    {
        id: 2,
        sender: 'Ryan',
        time: '19 October 2025 4:27pm',
        text: "Yeah, I ran into the same thing earlier. You always subtract 2 — one for the network address and one for the broadcast address. So for a /27 subnet, you get 32 total IPs, but only 30 usable ones.",
        avatar: 'https://i.pravatar.cc/150?img=3',
        subText: "Here's the complete explanation",
        audio: { duration: '0:09', played: false }
    },
    {
        id: 3,
        sender: 'Lisa',
        time: '19 October 2025 4:32pm',
        text: "Ahhh got it, that makes sense now. Thanks! Also, did you guys include a VLSM table in your documentation? Not sure if that's required or just optional.",
        avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
        id: 4,
        sender: 'Ryan',
        time: '19 October 2025 4:32pm',
        text: "I think it's expected, especially if you're using different subnet sizes. I added one just to be safe, and I labeled each subnet's purpose (like \"Staff Devices,\" \"Guest Wi-Fi,\" etc.).",
        avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
        id: 5,
        sender: 'Me',
        time: '19 October 2025 4:33pm',
        text: "Perfect — that helps a lot! Just finished my version of the network layout too. Uploading it here if anyone wants to reference or give feedback. 😉",
        avatar: 'https://i.pravatar.cc/150?img=9',
        attachment: 'Sophie_Assignment3_NetworkDiagram.pdf (204 KB)'
    }
];

const GROUP_MEMBERS = [
    { name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jessie', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=8' },
    { name: 'Clara', avatar: 'https://i.pravatar.cc/150?img=4' },
];

const AI_CREATIONS = [
    { user: 'Lisa', action: 'requested AI mind map —', subject: '"Network Topologies"', time: '21 August 2024 at 5:00 PM', avatar: 'https://i.pravatar.cc/150?img=5' },
    { user: 'Ryan', action: 'created whiteboard —', subject: '"Week 5 Lab Planning"', time: '10 September 2024 at 3:00 PM', avatar: 'https://i.pravatar.cc/150?img=3' },
    { user: 'Alex', action: 'started group quiz —', subject: '"Subnetting Speed Test"', time: '16 October 2024 at 2:00 AM', avatar: 'https://i.pravatar.cc/150?img=8' },
    { user: 'Max', action: 'generated summary —', subject: '"Chapter 4 Notes"', time: '18 October 2024 at 8:00 PM', avatar: 'https://i.pravatar.cc/150?img=11' },
];


export default function DesignerCommunityHub({ onNavigate }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Groups'); // Groups vs AI Chat

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
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
                    {/* Page Title for this view */}
                    <div className="hidden lg:block">
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Community Hub</h1>
                    </div>
                    {/* Search - Reused styling */}
                    <div className="hidden lg:flex items-center bg-[#F9FAFB] dark:bg-neutral-800 rounded-xl px-4 py-2.5 w-96 ml-auto mr-6 transition-colors">
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
                        <button className="relative p-2 bg-orange-50 rounded-xl">
                            <Bell size={20} className="text-orange-400" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer pl-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold overflow-hidden border-2 border-white shadow-sm">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-hidden flex">

                    {/* Left Pane: Groups List */}
                    <div className="w-80 h-full border-r border-neutral-100 dark:border-white/10 bg-white dark:bg-black flex flex-col shrink-0 transition-colors">
                        <div className="p-4 border-b border-neutral-50 dark:border-white/10">
                            <div className="flex p-1 bg-[#1A1A1E] dark:bg-neutral-800 rounded-lg mb-2">
                                <button
                                    onClick={() => setActiveTab('Groups')}
                                    className={cn("flex-1 py-1.5 text-xs font-bold rounded-md transition-colors", activeTab === 'Groups' ? "bg-[#333] text-white" : "text-neutral-400 hover:text-white")}
                                >
                                    Groups
                                </button>
                                <button
                                    onClick={() => setActiveTab('AI Chat')}
                                    className={cn("flex-1 py-1.5 text-xs font-bold rounded-md transition-colors", activeTab === 'AI Chat' ? "bg-[#333] text-white" : "text-neutral-400 hover:text-white")}
                                >
                                    AI Chat
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {GROUPS.map(group => (
                                <div
                                    key={group.id}
                                    className={cn(
                                        "p-4 border-b border-neutral-50 dark:border-white/10 cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors relative flex gap-3",
                                        group.active ? "bg-neutral-50 dark:bg-white/5 border-r-4 border-r-orange-400" : ""
                                    )}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shrink-0">
                                        <Users size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className={cn("text-xs font-bold truncate", group.active ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300")}>{group.name}</h4>
                                            <span className="text-[10px] text-neutral-400">{group.time}</span>
                                        </div>
                                        <p className="text-[10px] text-neutral-500 truncate">{group.lastMsg}</p>
                                    </div>
                                    {group.unread > 0 && <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center Pane: Chat */}
                    <div className="flex-1 flex flex-col min-w-0 relative">
                        {/* Chat Header */}
                        <div className="px-6 py-4 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-white">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Assignment 3 : Network</h3>
                                    <p className="text-xs text-neutral-500 flex items-center gap-1">Alice, Jessie, Alex, Clara...</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-400">
                                <button className="hover:text-neutral-600"><Edit2 size={18} /></button>
                                <button className="hover:text-neutral-600"><Phone size={18} /></button>
                                <button className="hover:text-neutral-600"><Video size={18} /></button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-black transition-colors">
                            {MESSAGES.map(msg => (
                                <div key={msg.id} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <img src={msg.avatar} alt={msg.sender} className="w-10 h-10 rounded-full object-cover" />
                                    </div>
                                    <div className="flex-1 max-w-2xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-bold text-neutral-900 dark:text-white">{msg.sender}</span>
                                            <span className="text-[10px] text-neutral-400">{msg.time}</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-2">{msg.text}</p>
                                        {msg.subText && <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">{msg.subText}</p>}

                                        {/* Audio Player Mock */}
                                        {msg.audio && (
                                            <div className="bg-[#F8FAFC] dark:bg-neutral-800 p-3 rounded-xl border border-neutral-100 dark:border-neutral-700 w-64 flex items-center gap-3">
                                                <button className="w-8 h-8 flex items-center justify-center bg-white dark:bg-black rounded-full text-emerald-500 shadow-sm border border-neutral-100 dark:border-neutral-700">
                                                    <Play size={14} fill="currentColor" className="ml-0.5" />
                                                </button>
                                                <div className="flex-1 h-8 flex items-center gap-0.5">
                                                    {[...Array(20)].map((_, i) => (
                                                        <div key={i} className={`w-1 rounded-full ${i % 3 === 0 ? 'bg-emerald-400 h-6' : 'bg-emerald-200 h-3'}`}></div>
                                                    ))}
                                                </div>
                                                <span className="text-[10px] font-bold text-neutral-500">{msg.audio.duration}</span>
                                            </div>
                                        )}

                                        {/* Attachment Mock */}
                                        {msg.attachment && (
                                            <div className="flex items-center gap-2 text-xs font-medium text-blue-500 hover:underline cursor-pointer">
                                                <Paperclip size={14} />
                                                {msg.attachment}
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ))}
                            {/* "Me" typing... not needed but good for polish */}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-black border-t border-neutral-100 dark:border-white/10 transition-colors">
                            <div className="flex items-center gap-3 bg-[#F8FAFC] dark:bg-neutral-800 px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-700">
                                <button className="text-neutral-400 hover:text-neutral-600"><Smile size={20} /></button>
                                <input
                                    type="text"
                                    placeholder="Type something..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm text-neutral-700 dark:text-white placeholder:text-neutral-400"
                                />
                                <button className="text-neutral-400 hover:text-neutral-600"><Mic size={20} /></button>
                                <button className="text-neutral-400 hover:text-neutral-600"><Paperclip size={20} /></button>
                                <button className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                    <Send size={14} className="-ml-0.5 mt-0.5" />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Right Pane: Info */}
                    <div className="w-80 h-full bg-[#F8FAFC] dark:bg-white/5 border-l border-neutral-100 dark:border-white/10 hidden xl:flex flex-col transition-colors">
                        <div className="p-4 flex items-center justify-between border-b border-neutral-100 dark:border-white/10">
                            <h3 className="text-xs font-bold text-neutral-600 dark:text-neutral-300">Group Information</h3>
                            <button className="text-neutral-400"><MoreVertical size={16} /></button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-1">
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-neutral-500 mb-4">Group Members</h4>
                                <div className="flex items-center gap-2">
                                    <button className="w-10 h-10 rounded-full border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-neutral-500">
                                        <UserPlus size={16} />
                                    </button>
                                    {GROUP_MEMBERS.map(member => (
                                        <div key={member.name} className="flex flex-col items-center gap-1">
                                            <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border border-white shadow-sm object-cover" />
                                            <span className="text-[10px] text-neutral-500">{member.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-neutral-500 mb-4">AI + Group Creations</h4>
                                <div className="space-y-6 relative">
                                    <div className="absolute left-3 top-2 bottom-2 w-px bg-neutral-200"></div>
                                    {AI_CREATIONS.map((item, i) => (
                                        <div key={i} className="relative flex gap-4 pl-0">
                                            <img src={item.avatar} className="w-6 h-6 rounded-full border border-white dark:border-neutral-700 shadow-sm z-10 bg-white" alt={item.user} />
                                            <div>
                                                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                                                    <span className="font-bold">{item.user}</span> <span className="text-neutral-500">{item.action}</span> <br />
                                                    <span className="font-semibold italic">{item.subject}</span>
                                                </p>
                                                <span className="text-[10px] text-neutral-400 mt-1 block">{item.time}</span>
                                            </div>
                                            <ChevronRight size={14} className="text-neutral-400 ml-auto mt-1" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-1">
                                {['Documents', 'Links', 'Channels', 'Groups'].map(link => (
                                    <button key={link} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 text-xs font-bold text-neutral-600 dark:text-neutral-300 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Circle size={8} className="text-neutral-400" />
                                            {link}
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-400" />
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
