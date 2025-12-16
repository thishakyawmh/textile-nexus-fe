import React from 'react';
import { ChevronLeft } from 'lucide-react';
import AuthLayout, { FloatingLabelInput } from './AuthLayout';

export default function ForgotPassword({ onNavigate }) {
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

                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">Forgot password?</h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 sm:mb-8 text-xs sm:text-sm">Don't worry! It happens. Please enter the email associated with your account.</p>

                <div className="space-y-6">
                    <FloatingLabelInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <button
                        onClick={() => onNavigate('verify-code')}
                        className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-lg font-bold text-sm hover:bg-neutral-900 dark:hover:bg-neutral-200 transform active:scale-[0.98] transition-all shadow-lg shadow-black/20"
                    >
                        Send code
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
}
