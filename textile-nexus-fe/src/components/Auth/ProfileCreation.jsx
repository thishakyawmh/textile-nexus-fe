import React, { useState } from 'react';
import { Camera, UploadCloud } from 'lucide-react';
import AuthLayout, { FloatingLabelInput } from './AuthLayout';

// Specific fields for different roles
const ROLE_FIELDS = {
    'Factory': [
        { label: 'Where is your factory located?', type: 'text' },
        { label: 'What is your company name?', type: 'text' },
        { label: 'What is your business license or tax ID?', type: 'text' },
        { label: 'Upload your certificates refer to industry', type: 'file' }
    ],
    'Fabric Supplier': [
        { label: 'Do you provide wholesale, retail, or both?', type: 'text' },
        { label: 'What products do you supply?', type: 'text' },
        { label: 'What is your business registration number?', type: 'text' },
        { label: 'Any certifications or quality standards?', type: 'file' }
    ],
    'Tailor': [
        { label: 'Where is your shop located?', type: 'text' },
        { label: 'Years of experience?', type: 'text' },
        { label: 'Specialization (Suits, Dresses, etc.)', type: 'text' },
        { label: 'Upload portfolio images', type: 'file' }
    ]
};

export default function ProfileCreation({ onNavigate }) {
    const [role, setRole] = useState(() => {
        const storedRole = localStorage.getItem('userRole');
        return storedRole || 'Factory';
    });

    const extraFields = ROLE_FIELDS[role] || ROLE_FIELDS['Factory'];

    return (
        <AuthLayout onNavigate={onNavigate}>
            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl dark:border dark:border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl animate-fade-in-up w-full sm:w-[800px] max-w-[95vw] sm:max-w-[90vw] transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 sm:mb-8">Create Your Profile</h2>

                {/* Photo Upload */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer transition-colors border border-neutral-200 dark:border-neutral-700">
                        <Camera size={24} className="sm:hidden" />
                        <Camera size={28} className="hidden sm:block" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">Upload Profile Photo</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <FloatingLabelInput label="Profile Name" />
                    <FloatingLabelInput label="Email Address" />
                    <FloatingLabelInput label="Phone Number" />
                    <FloatingLabelInput label="Job Category" value={role} readOnly />

                    {extraFields.map((field, idx) => (
                        <div key={idx} className="md:col-span-2">
                            {field.type === 'file' ? (
                                <div className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border-dashed">
                                    <UploadCloud size={18} className="text-neutral-400 sm:hidden" />
                                    <UploadCloud size={20} className="text-neutral-400 hidden sm:block" />
                                    <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">{field.label.includes('Upload') ? field.label : `Upload ${field.label}`}</span>
                                </div>
                            ) : (
                                <FloatingLabelInput label={field.label} />
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => onNavigate('profile-review')}
                    className="w-full bg-black dark:bg-white text-white dark:text-black py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-neutral-900 dark:hover:bg-neutral-200 transform active:scale-[0.99] transition-all shadow-xl shadow-black/20 mt-6 sm:mt-10"
                >
                    Create Profile
                </button>
            </div>
        </AuthLayout>
    );
}
