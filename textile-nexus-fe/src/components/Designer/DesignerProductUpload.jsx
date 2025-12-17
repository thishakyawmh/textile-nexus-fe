import React, { useState, useRef } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Menu,
    Image as ImageIcon
} from 'lucide-react';
import DesignerSidebar from './DesignerSidebar';

export default function DesignerProductUpload({ onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen bg-[#fff] dark:bg-black flex font-sans text-neutral-900 dark:text-white transition-colors duration-300">
            {/* Sidebar */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <DesignerSidebar
                activePage="products"
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

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Products</h1>

                    <div className="border border-dashed border-neutral-300 dark:border-neutral-600 rounded-3xl p-10 min-h-[600px] relative bg-white dark:bg-white/5 dark:backdrop-blur-xl transition-colors">

                        <div className="max-w-xl mx-auto">
                            {/* Image Upload */}
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-24 h-24 bg-[#E2E8F0] dark:bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 dark:text-neutral-500">
                                    {selectedFile ? (
                                        <img src={URL.createObjectURL(selectedFile)} alt="img" className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                        <ImageIcon size={32} />
                                    )}
                                </div>
                                <div>
                                    <p className="text-xs italic text-neutral-500 dark:text-neutral-400 mb-3">Please upload square image, size less than 100KB</p>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="px-4 py-2 border border-[#000000] text-[#000000] dark:text-white dark:border-white font-bold text-sm rounded cursor-pointer hover:bg-black/10 dark:hover:bg-white/5 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                        <span className="text-sm text-neutral-400 dark:text-neutral-300 font-medium">
                                            {selectedFile ? selectedFile.name : "No File Chosen"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-2">Product Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-neutral-200 dark:border-neutral-600 py-2 text-sm bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-2">Category</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-neutral-200 dark:border-neutral-600 py-2 text-sm bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-2">Suitable Materials</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-neutral-200 dark:border-neutral-600 py-2 text-sm bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-2">Price</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-neutral-200 dark:border-neutral-600 py-2 text-sm bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="absolute bottom-10 right-10">
                            <button className="bg-black text-white dark:text-black dark:bg-white px-8 py-2.5 rounded-lg font-bold shadow-md transition-colors">
                                Save
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
