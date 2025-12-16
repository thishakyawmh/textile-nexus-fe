import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import AuthLayout, { FloatingLabelInput } from './AuthLayout';
import { toast } from 'sonner';

export default function SetPassword({ onNavigate }) {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSetPassword = () => {
        toast.success("Password reset successfully!");
        onNavigate('login');
    };

    return (
        <AuthLayout onNavigate={onNavigate}>
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl animate-fade-in-up transition-colors">
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">Set a password</h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 sm:mb-8 text-xs sm:text-sm">Your previous password has been reseted. Please set a new password for your account.</p>

                <div className="space-y-5">
                    <FloatingLabelInput
                        label="Create Password"
                        type={showPass ? "text" : "password"}
                        defaultValue="7789BM6X@@H&$K_"
                        icon={showPass ? EyeOff : Eye}
                        onIconClick={() => setShowPass(!showPass)}
                    />

                    <FloatingLabelInput
                        label="Re-enter Password"
                        type={showConfirm ? "text" : "password"}
                        defaultValue="7789BM6X@@H&$K_"
                        icon={showConfirm ? EyeOff : Eye}
                        onIconClick={() => setShowConfirm(!showConfirm)}
                    />

                    <button
                        onClick={handleSetPassword}
                        className="w-full bg-black dark:bg-white text-white dark:text-black py-3 sm:py-3.5 rounded-lg font-bold text-sm hover:bg-neutral-900 dark:hover:bg-neutral-200 transform active:scale-[0.98] transition-all shadow-lg shadow-black/20 mt-4"
                    >
                        Set password
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
}
