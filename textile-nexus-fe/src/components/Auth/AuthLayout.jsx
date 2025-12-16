import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthLayout({ children, onNavigate }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (onNavigate) {
            onNavigate('landing');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#111111] flex items-center justify-center px-3 py-16 sm:p-4 relative overflow-hidden font-sans">
            {/* Background Abstract Shapes - Dark wavy pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 V100 H100 V0 Z" fill="#111111" />
                    <path d="M0 50 Q 25 20 50 50 T 100 50 V 100 H 0 Z" fill="#151515" opacity="0.5" />
                    <path d="M0 70 Q 25 40 50 70 T 100 70 V 100 H 0 Z" fill="#1a1a1a" opacity="0.5" />
                </svg>
                {/* Custom glowing blobs for that 'fluid' look */}
                <div className="absolute top-[-10%] left-[-10%] w-[70vw] sm:w-[50vw] h-[70vw] sm:h-[50vw] bg-white/5 rounded-full blur-[80px] sm:blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] sm:w-[50vw] h-[70vw] sm:h-[50vw] bg-white/5 rounded-full blur-[80px] sm:blur-[100px]" />
            </div>

            {/* Logo - clickable to go to landing page */}
            <button
                onClick={handleLogoClick}
                className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 sm:gap-3 z-50 hover:opacity-80 transition-opacity"
            >
                <img src="/images/logo.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-white rounded-lg p-0.5 sm:p-1" />
                <span className="text-white text-base sm:text-xl font-bold tracking-wide hidden xs:inline sm:inline">Textile Nexus</span>
            </button>

            {/* Content Card */}
            <div className="relative z-10 w-full max-w-[500px] mt-8 sm:mt-0">
                {children}
            </div>
        </div>
    );
}

export const FloatingLabelInput = ({ label, type = "text", value, onChange, icon: Icon, onIconClick, ...props }) => {
    return (
        <fieldset className="relative border border-neutral-300 dark:border-neutral-600 rounded-lg group focus-within:border-black dark:focus-within:border-white transition-colors bg-white dark:bg-neutral-800/50">
            <legend className="ml-3 px-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white">
                {label}
            </legend>
            <div className="flex items-center px-3 sm:px-4 pb-2.5 pt-0.5">
                <input
                    type={type}
                    className="w-full text-sm font-medium text-neutral-900 dark:text-white bg-transparent outline-none placeholder:text-transparent"
                    placeholder=" "
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                {Icon && (
                    <button type="button" onClick={onIconClick} className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 ml-2">
                        <Icon size={18} />
                    </button>
                )}
            </div>
        </fieldset>
    );
};
