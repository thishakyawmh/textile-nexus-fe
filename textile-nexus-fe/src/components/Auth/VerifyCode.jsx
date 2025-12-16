import React, { useState } from 'react';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import AuthLayout, { FloatingLabelInput } from './AuthLayout';

export default function VerifyCode({ onNavigate }) {
    const [showCode, setShowCode] = useState(false);

    return (
        <AuthLayout onNavigate={onNavigate}>
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl animate-fade-in-up transition-colors">
                <button
                    onClick={() => onNavigate('login')}
                    className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6 hover:text-black dark:hover:text-white transition-colors"
                >
                    <ChevronLeft size={14} className="sm:hidden" />
                    <ChevronLeft size={16} className="hidden sm:block" />
                    Back to login
                </button>

                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">Verify code</h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 sm:mb-8 text-xs sm:text-sm">An authentication code has been sent to your email.</p>

                <div className="space-y-6">
                    <FloatingLabelInput
                        label="Enter Code"
                        type={showCode ? "text" : "password"}
                        defaultValue="7789BM6X"
                        icon={showCode ? EyeOff : Eye}
                        onIconClick={() => setShowCode(!showCode)}
                    />

                    <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        Didn't receive a code? <button className="text-rose-500 font-bold hover:underline">Resend</button>
                    </div>

                    <button
                        onClick={() => onNavigate('set-password')}
                        className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-lg font-bold text-sm hover:bg-neutral-900 dark:hover:bg-neutral-200 transform active:scale-[0.98] transition-all shadow-lg shadow-black/20"
                    >
                        Verify
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
}
