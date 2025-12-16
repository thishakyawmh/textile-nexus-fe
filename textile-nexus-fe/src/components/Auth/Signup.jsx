import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown, CheckSquare, Facebook, Instagram } from 'lucide-react';
import AuthLayout, { FloatingLabelInput } from './AuthLayout';

export default function Signup({ onNavigate }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [role, setRole] = useState('Fabric Supplier');

    const handleSignup = () => {
        // Save role to local storage for the prototype flow to know which dashboard to show later
        localStorage.setItem('userRole', role);
        onNavigate('profile-creation');
    };

    return (
        <AuthLayout>
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl animate-fade-in-up w-[600px] max-w-[90vw] transition-colors">
                {/* Adjusted width/margin to fit larger form if needed, or stick to default layout constraint */}
                {/* Re-using default layout constraint but overriding specific styles if needed. Layout uses max-w-[500px] which might be tight for 2 cols. */}
                {/* Let's keep it single column for mobile, maybe grid for desktop inside the card. */}

                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Sign up</h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-sm">Let's get you all set up so you can access your personal account.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FloatingLabelInput label="First Name" />
                    <FloatingLabelInput label="Last Name" />

                    <FloatingLabelInput label="Email" type="email" />
                    <FloatingLabelInput label="Phone Number" />

                    <div className="md:col-span-2">
                        <FloatingLabelInput
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            icon={showPassword ? EyeOff : Eye}
                            onIconClick={() => setShowPassword(!showPassword)}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <FloatingLabelInput
                            label="Confirm Password"
                            type={showConfirmPassword ? "text" : "password"}
                            icon={showConfirmPassword ? EyeOff : Eye}
                            onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                    </div>

                    <div className="md:col-span-2 relative">
                        <fieldset className="relative border border-neutral-300 dark:border-neutral-600 rounded-lg group focus-within:border-black dark:focus-within:border-white transition-colors bg-white dark:bg-neutral-800/50">
                            <legend className="ml-3 px-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white">
                                Select Your Job Category
                            </legend>
                            <div className="px-4 pb-2.5 pt-0.5">
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full text-sm font-medium text-neutral-900 dark:text-white bg-transparent outline-none appearance-none cursor-pointer"
                                >
                                    <option className="text-black bg-white">Fabric Supplier</option>
                                    <option className="text-black bg-white">Tailor</option>
                                    <option className="text-black bg-white">Factory</option>
                                    <option className="text-black bg-white">Customer</option>
                                </select>
                            </div>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 mt-1 -tranneutral-y-1/2 text-neutral-400 pointer-events-none" />
                        </fieldset>
                    </div>

                    <div className="md:col-span-2 flex items-center gap-2 mt-2">
                        <div
                            className={`relative w-5 h-5 border rounded flex items-center justify-center cursor-pointer transition-colors ${agreed ? 'bg-black dark:bg-white border-black dark:border-white' : 'border-neutral-300 dark:border-neutral-600'}`}
                            onClick={() => setAgreed(!agreed)}
                        >
                            {agreed && <CheckSquare size={14} className="text-white dark:text-black" />}
                        </div>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">I agree to all the <span className="text-rose-500 hover:underline cursor-pointer">Terms</span> and <span className="text-rose-500 hover:underline cursor-pointer">Privacy Policies</span></span>
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        onClick={handleSignup}
                        className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-lg font-bold text-sm hover:bg-neutral-900 dark:hover:bg-neutral-200 transform active:scale-[0.98] transition-all shadow-lg shadow-black/20"
                    >
                        Create account
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                        Already have an account? <button onClick={() => onNavigate('login')} className="text-rose-500 hover:underline font-bold">Login</button>
                    </p>
                </div>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
                    </div>
                    <div className="relative flex items-center justify-center text-xs">
                        <span className="px-4 bg-white dark:bg-transparent text-neutral-400">Or Sign up with</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <button className="flex items-center justify-center py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-600">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                    </button>
                    <button className="flex items-center justify-center py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-600">
                        <Facebook size={20} className="text-blue-600" />
                    </button>
                    <button className="flex items-center justify-center py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-600">
                        <Instagram size={20} className="text-pink-500" />
                    </button>
                </div>

            </div>
        </AuthLayout>
    );
}
