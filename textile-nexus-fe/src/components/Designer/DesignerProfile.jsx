import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    GraduationCap,
    Trophy,
    Award,
    Shirt,
    ChevronRight,
    Medal
} from 'lucide-react';
import DesignerSidebar from './DesignerSidebar';

export default function DesignerProfile({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fff] flex font-sans text-neutral-900">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
                activePage="profile"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onNavigate={onNavigate}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-neutral-100 flex items-center justify-between px-6 lg:px-10 shrink-0">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-neutral-500">
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center bg-[#F9FAFB] rounded-xl px-4 py-2.5 w-96">
                        <Search size={18} className="text-neutral-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-neutral-400 text-neutral-700"
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
                            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold overflow-hidden border-2 border-white shadow-sm">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 hidden md:block" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-8">Profile</h1>

                    {/* Profile Bio Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                        <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg">
                            <img src="" alt="img" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Michel Perere</h2>
                            <p className="text-neutral-600 leading-relaxed max-w-3xl font-medium">
                                A passionate textile designer creating modern, clean, and stylish patterns inspired by nature, culture, and everyday life. I love blending colors, textures, and creativity to bring unique design ideas to life.
                            </p>
                        </div>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-50 flex items-center justify-between min-h-[140px]">
                            <p className="font-bold text-sm text-neutral-800 pr-4">Bachelor's Degree in Textile & Apparel Design <br /><span className="text-neutral-500 font-normal">AoD University</span></p>
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                                <GraduationCap size={20} />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-50 flex items-center justify-between min-h-[140px]">
                            <p className="font-bold text-sm text-neutral-800 pr-4">Winner of Multiple Fashion Design Competitions</p>
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                                <Trophy size={20} />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-50 flex items-center justify-between min-h-[140px]">
                            {/* Empty/Placeholder Content usually, but let's add something based on usual designs or keep it minimal if image is empty. 
                                The image shows an empty card with just an icon. I'll improvise text or leave blank.
                                Actually image has no text for 3rd card, just icon. Wait, it might be a specific award.*/}
                            <p className="font-bold text-sm text-neutral-800 pr-4 opacity-0">Hidden Text</p>
                            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center shrink-0">
                                <Shirt size={20} />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-50 flex items-center justify-between min-h-[140px]">
                            <p className="font-bold text-sm text-neutral-800 pr-4">Four-time Academy Award Winner</p>
                            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                                <Award size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Most View Design */}
                    <div>
                        <h3 className="text-lg font-bold text-blue-900 mb-6">Most view design</h3>
                        <div className="flex gap-6 items-center justify-between">
                            <div className="w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                                <img src="" alt="img" className="w-full h-full object-cover" />
                            </div>
                            <button className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
