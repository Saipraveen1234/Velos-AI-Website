import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-6 py-3 bg-white/10 border ${error ? 'border-red-500' : 'border-white/20'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-smooth ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
