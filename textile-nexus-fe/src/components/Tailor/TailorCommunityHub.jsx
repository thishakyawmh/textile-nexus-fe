import React, { useState, useMemo } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Phone,
    Video,
    MoreVertical,
    Smile,
    Mic,
    Paperclip,
    Send,
    Play,
    Pause,
    ChevronRight,
    Users,
    FileText,
    Link as LinkIcon,
    Hash,
    Plus
} from 'lucide-react';
import TailorSidebar from './TailorSidebar';
import { cn } from '../../lib/utils';

const GROUPS = [
    { id: 1, name: 'Fabric Deals', time: '4:27pm', msg: 'Is the Indigo Linen stock part of the deal? I need 200 yards.', unread: 2, avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Customer Support', time: '4:12pm', msg: 'I need the delivery deadline moved up by 4 days. Can this be done?', unread: 1, avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Designer: Alex Chen', time: '3:27pm', msg: 'Petite victoire! I finally got the final sketch approved. Sending the PDF now. 🎉', unread: 0, avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Factory Team', time: '4:30pm', msg: 'Uploading the final instructions for the next batch — feel free to add measurements.', unread: 0, avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Pending Measurements', time: '3:33pm', msg: 'Don\'t forget: Measurement update is pending. Let\'s go over the AI scan again.', unread: 0, avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Sustainable Tailors Group', time: '1:23pm', msg: 'I posted my essay on the challenge of textile waste from last week.', unread: 0, avatar: 'https://i.pravatar.cc/150?img=6' },
    { id: 7, name: 'Job Offer: Need Cutter', time: '11:22am', msg: 'Next topic: Need a skilled seamstress for temporary contract work next week?', unread: 1, avatar: 'https://i.pravatar.cc/150?img=7' },
    { id: 8, name: 'New Fitting Request', time: '11:22am', msg: 'Lorem ipsum dolor sit amet, consectetur. Eleifend condimentum mauris consequat...', unread: 0, avatar: 'https://i.pravatar.cc/150?img=8' },
];

export default function TailorCommunityHub({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('groups'); // groups | ai-chat

    const audioBarHeights = useMemo(() => Array.from({ length: 30 }, () => Math.random() * 10 + 5), []);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F12] flex font-sans text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <TailorSidebar
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

                <div className="flex-1 flex overflow-hidden">
                    {/* Left Panel: Groups List */}
                    <div className="w-80 border-r border-neutral-100 dark:border-white/10 flex flex-col bg-white dark:bg-white/5 shrink-0 transition-colors">
                        <div className="p-4">
                            <div className="bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl flex font-bold text-xs transition-colors">
                                <button
                                    className={cn("flex-1 py-2 rounded-lg transition-colors", activeTab === 'groups' ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400")}
                                    onClick={() => setActiveTab('groups')}
                                >
                                    Groups
                                </button>
                                <button
                                    className={cn("flex-1 py-2 rounded-lg transition-colors", activeTab === 'ai-chat' ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400")}
                                    onClick={() => setActiveTab('ai-chat')}
                                >
                                    AI Chat
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {GROUPS.map((group) => (
                                <div key={group.id} className="flex gap-3 p-4 border-b border-neutral-50 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors relative group">
                                    <div className="relative shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                                            <img src={group.avatar} alt="img" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-neutral-900 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 truncate">{group.name}</h4>
                                            <span className="text-[10px] text-neutral-400">{group.time}</span>
                                        </div>
                                        <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">{group.msg}</p>
                                    </div>
                                    {group.unread > 0 && (
                                        <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                            {group.unread}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Panel: Chat */}
                    <div className="flex-1 flex flex-col bg-neutral-50 dark:bg-[#0F0F12] transition-colors">
                        {/* Chat Header */}
                        <div className="h-16 bg-white dark:bg-white/5 border-b border-neutral-100 dark:border-white/10 px-6 flex items-center justify-between shrink-0 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-black dark:bg-neutral-800 text-white dark:text-white flex items-center justify-center font-bold text-lg">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h2 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">Fabric Deals</h2>
                                    <p className="text-xs text-neutral-500">Alice, Jessie, Alex, Clara,...</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-400">
                                <button className="hover:text-neutral-600"><Phone size={20} /></button>
                                <button className="hover:text-neutral-600"><Video size={20} /></button>
                                <button className="hover:text-neutral-600"><MoreVertical size={20} /></button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8">

                            {/* Message 1 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0">
                                    <img src="/images/Customer/Tailor/p1.jpeg" alt="img" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Lisa</span>
                                        <span className="text-[10px] text-neutral-400">16 October 2024 4:23pm</span>
                                    </div>
                                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-700 dark:text-neutral-200 max-w-xl leading-relaxed transition-colors">
                                        Hi everyone! Has anyone figured out the best technique for upcycling very thick denim with minimal fraying at the seams? I'm not sure if I should use flat felled or a bias tape finish. Let me know asap! 🙏
                                        <br /><br />
                                        Let me know asap!
                                    </div>
                                </div>
                            </div>

                            {/* Message 2 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0">
                                    <img src="/images/Customer/Tailor/p2.jpeg" alt="img" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Ryan</span>
                                        <span className="text-[10px] text-neutral-400">16 October 2024 4:27pm</span>
                                    </div>
                                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-700 dark:text-neutral-200 max-w-xl leading-relaxed mb-3 transition-colors">
                                        Yeah, I ran into the same issue last month. You usually want to use a double-stitched, full bias tape it keeps the structure and minimizes bulk. Here's a quick demo of the corner turn.
                                        <br /><br />
                                        Here's the complete explanation
                                    </div>
                                    {/* Audio Player Fake */}
                                    <div className="bg-black dark:bg-neutral-950 text-white p-3 rounded-xl flex items-center gap-4 w-80 transition-colors">
                                        <button className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center shrink-0">
                                            <Play size={14} fill="currentColor" />
                                        </button>
                                        <div className="flex-1 h-8 flex items-center gap-0.5">
                                            {audioBarHeights.map((height, i) => (
                                                <div key={i} className="w-1 bg-neutral-500 rounded-full" style={{ height: `${height}px`, opacity: i < 10 ? 1 : 0.5 }}></div>
                                            ))}
                                        </div>
                                        <span className="text-xs font-mono">0:09</span>
                                    </div>
                                </div>
                            </div>

                            {/* Message 3 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden shrink-0">
                                    <img src="/images/Customer/Tailor/p1.jpeg" alt="img" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Lisa</span>
                                        <span className="text-[10px] text-neutral-400">16 October 2025 4:30pm</span>
                                    </div>
                                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-700 dark:text-neutral-200 max-w-xl leading-relaxed transition-colors">
                                        Ahhh got it, that makes sense now. Thanks! Also, did anyone in this group attend the recent virtual seminar on Natural Dye Fixing? Was it worth the cost, or is the info available online?
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-white/5 border-t border-neutral-100 dark:border-white/10 transition-colors">
                            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center px-4 py-2 gap-3 transition-colors">
                                <button className="text-neutral-400 hover:text-neutral-600"><Smile size={20} /></button>
                                <input
                                    type="text"
                                    placeholder="Type something..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm h-10 placeholder:text-neutral-500"
                                />
                                <button className="text-neutral-400 hover:text-neutral-600"><Mic size={20} /></button>
                                <button className="text-neutral-400 hover:text-neutral-600"><Paperclip size={20} /></button>
                                <button className="bg-neutral-400 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Group Info */}
                    <div className="w-72 bg-neutral-50 dark:bg-white/5 border-l border-neutral-100 dark:border-white/10 hidden xl:flex flex-col transition-colors">
                        <div className="h-16 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between px-6 shrink-0 transition-colors">
                            <span className="font-bold text-sm text-neutral-700 dark:text-neutral-200">Group Information</span>
                            <button className="text-neutral-400"><MoreVertical size={16} /></button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">

                            {/* Group Members */}
                            <div>
                                <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-4">Group Members</h4>
                                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    <button className="w-10 h-10 rounded-full border border-dashed border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-neutral-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white shrink-0 transition-colors">
                                        <Plus size={16} />
                                    </button>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden ring-2 ring-white dark:ring-neutral-900 transition-colors">
                                                <img src={`https://i.pravatar.cc/150?img=${20 + i}`} alt="img" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-[10px] text-neutral-500">User</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI + Group Creations */}
                            <div>
                                <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-4">AI + Group Creations</h4>
                                <div className="space-y-3">
                                    {/* Item 1 */}
                                    <div className="bg-white dark:bg-neutral-800 p-3 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex gap-3 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-700 overflow-hidden shrink-0">
                                            <img src="/images/Customer/Tailor/p1.jpeg" alt="img" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">Lisa</p>
                                            <p className="text-[10px] text-neutral-400 mb-1">21 August 2024 at 5:00 PM</p>
                                            <p className="text-[10px] text-neutral-600 italic">requested very heavy denim...</p>
                                            <p className="text-[10px] text-neutral-500 mt-1">"Fabric Deals"</p>
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-300 ml-auto self-center" />
                                    </div>
                                    {/* Item 2 */}
                                    <div className="bg-white dark:bg-neutral-800 p-3 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex gap-3 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-700 overflow-hidden shrink-0">
                                            <img src="/images/Customer/Tailor/p2.jpeg" alt="img" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">Ryan</p>
                                            <p className="text-[10px] text-neutral-400 mb-1">10 September 2024 at 3:00 PM</p>
                                            <p className="text-[10px] text-neutral-600 italic">created whiteboard...</p>
                                            <p className="text-[10px] text-neutral-500 mt-1">"Week 5 Lab Planning"</p>
                                        </div>
                                        <ChevronRight size={14} className="text-neutral-300 ml-auto self-center" />
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Menu */}
                            <div className="space-y-1">
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-bold transition-colors">
                                    <div className="p-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-md"><FileText size={14} /></div>
                                    Documents
                                    <ChevronRight size={14} className="ml-auto" />
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-bold transition-colors">
                                    <div className="p-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-md"><LinkIcon size={14} /></div>
                                    Links
                                    <ChevronRight size={14} className="ml-auto" />
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-bold transition-colors">
                                    <div className="p-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-md"><Hash size={14} /></div>
                                    Channels
                                    <ChevronRight size={14} className="ml-auto" />
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-bold transition-colors">
                                    <div className="p-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-md"><Users size={14} /></div>
                                    Groups
                                    <ChevronRight size={14} className="ml-auto" />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
