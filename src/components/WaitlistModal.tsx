'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                                        <p className="text-gray-600 mb-6">
                                            Thanks for joining. We'll verify your spot and be in touch soon.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="btn-primary w-full py-3"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                                            <p className="text-gray-600">
                                                Be the first to experience the future of meeting productivity.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-shadow"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full btn-primary py-3 relative overflow-hidden"
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center justify-center">
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    </div>
                                                ) : (
                                                    'Join Waitlist'
                                                )}
                                            </button>
                                            <p className="text-xs text-center text-gray-500 mt-4">
                                                No spam, ever. Unsubscribe anytime.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
