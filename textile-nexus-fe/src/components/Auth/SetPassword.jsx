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
        <AuthLayout>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl animate-fade-in-up">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Set a password</h2>
                <p className="text-neutral-500 mb-8 text-sm">Your previous password has been reseted. Please set a new password for your account.</p>

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
                        className="w-full bg-black text-white py-3.5 rounded-lg font-bold text-sm hover:bg-neutral-900 transform active:scale-[0.98] transition-all shadow-lg shadow-black/20 mt-4"
                    >
                        Set password
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
}
