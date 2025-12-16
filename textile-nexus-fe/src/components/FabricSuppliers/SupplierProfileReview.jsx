import React from 'react';
import { Lock, Check } from 'lucide-react';

export default function SupplierProfileReview() {
    return (
        <div className="relative min-h-screen w-full bg-[#0F0F12] overflow-hidden font-sans flex items-center justify-center p-6">
            {/* Background Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[#1A1A1E] rounded-full blur-3xl opacity-60 mix-blend-screen animate-pulse" />
                <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-[#151518] rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-[#18181b] rounded-full blur-3xl opacity-40" />
            </div>

            {/* Logo Top Left */}
            <div className="absolute top-8 left-8 flex items-center gap-3 z-10 transition-transform hover:scale-105 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center p-1 border border-white/10">
                    <img
                        src=""
                        alt="img"
                        className="w-full h-full object-contain filter invert"
                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<svg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><link width=\'10\' height=\'10\' x=\'10\' y=\'10\'></link><path d=\'m10 14 3.388 3.388a2 2 0 0 0 2.828 0l1.414-1.414a2 2 0 0 0 0-2.828L14 9.465\'></path><path d=\'m16.828 17.172 1.415-1.415\'></path></svg>' }}
                    />
                </div>
                <span className="text-white text-xl font-bold tracking-wide">Textile Nexus</span>
            </div>

            {/* Content Centered */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg animate-fade-in-up">

                {/* 3D Shield/Lock Icon Representation */}
                <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
                    {/* Glowing Effect Background */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

                    {/* Placeholder for complex 3D icon - Using composited Lucide icons to approximate */}
                    <div className="relative w-32 h-32 bg-gradient-to-br from-neutral-800 to-black rounded-[2.5rem] flex items-center justify-center border border-neutral-700 shadow-2xl">
                        <Lock size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" strokeWidth={1.5} />

                        {/* Checkmark Badge */}
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-[#0F0F12] shadow-lg">
                            <Check size={24} className="text-white font-bold" strokeWidth={4} />
                        </div>
                    </div>
                </div>

                <h2 className="text-white text-2xl font-bold mb-4">Great!!!</h2>
                <p className="text-neutral-300 text-lg leading-relaxed font-medium">
                    your profile is under review. Once approved by our admin, your services will appear on the site.
                </p>

            </div>
        </div>
    );
}
