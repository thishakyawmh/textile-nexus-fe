import React, { useState } from 'react';
import { Eye, EyeOff, Facebook, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import AuthLayout, { FloatingLabelInput } from './AuthLayout';

export default function Login({ onNavigate, onLogin }) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Credential Helper Map
        const credentials = {
            'customer@textilenexus.com': { pass: 'customer123', role: 'Customer' },
            'tailor@textilenexus.com': { pass: 'tailor123', role: 'Tailor' },
            'factory@textilenexus.com': { pass: 'factory123', role: 'Factory' },
            'supplier@textilenexus.com': { pass: 'supplier123', role: 'Fabric Supplier' },
            'admin@textilenexus.com': { pass: 'admin123', role: 'Admin' },
            'designer@textilenexus.com': { pass: 'designer123', role: 'Designer' },
        };

        const user = credentials[email];

        if (user && user.pass === password) {
            localStorage.setItem('userRole', user.role);
            localStorage.setItem('isLoggedIn', 'true');
            // toast.success(`Welcome back, ${user.role}!`);
            onLogin && onLogin();
        } else {
            toast.error('Invalid email or password');
        }
    };

    return (
        <AuthLayout onNavigate={onNavigate}>
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl animate-fade-in-up transition-colors">
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">Login</h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 sm:mb-8 text-xs sm:text-sm">Login to access your Textile Nexus account</p>

                <div className="space-y-5">
                    <FloatingLabelInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FloatingLabelInput
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={showPassword ? EyeOff : Eye}
                        onIconClick={() => setShowPassword(!showPassword)}
                    />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-black focus:ring-black bg-white dark:bg-neutral-800" />
                            <label htmlFor="remember" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 cursor-pointer">Remember me</label>
                        </div>
                        <button onClick={() => onNavigate('forgot-password')} className="text-xs font-bold text-rose-500 hover:underline">
                            Forgot Password
                        </button>
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full bg-black dark:bg-white dark:text-black text-white py-3.5 rounded-lg font-bold text-sm hover:bg-neutral-900 dark:hover:bg-neutral-200 transform active:scale-[0.98] transition-all shadow-lg shadow-black/20"
                    >
                        Login
                    </button>

                    <div className="text-center">
                        <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Don't have an account? </span>
                        <button onClick={() => onNavigate('signup')} className="text-xs font-bold text-rose-500 hover:underline">Sign up</button>
                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
                        </div>
                        <div className="relative flex items-center justify-center text-xs">
                            <span className="px-4 bg-white dark:bg-transparent text-neutral-400">Or login with</span>
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
            </div>
        </AuthLayout>
    );
}
