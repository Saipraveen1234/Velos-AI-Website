'use client';

import Image from 'next/image';
import { Header } from '@/components/Header';
import { Brain, FileText, Search, Users, BarChart2, Zap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { DynamicBackground } from '@/components/DynamicBackground';
import { motion } from 'framer-motion';
import { WaitlistModal } from '@/components/WaitlistModal';
import { useState } from 'react';

export default function HomePage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <main className="min-h-screen">
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
            <Header />

            {/* Hero Section - Dark with Purple Accents - Full Screen */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <DynamicBackground />


                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >


                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight">
                            Meetings, Clarified.<br />
                            {/* <span className="gradient-text">For Your Meetings</span> */}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Velos AI captures every discussion, decision, and follow-up instantly.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => setIsWaitlistOpen(true)}
                                className="btn-primary px-10 py-5 text-lg glow-purple transform hover:scale-105 transition-transform duration-200"
                            >
                                Get Started
                                <ArrowRight className="inline-block ml-2 w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsWaitlistOpen(true)}
                                className="btn-secondary px-10 py-5 text-lg transform hover:scale-105 transition-transform duration-200"
                            >
                                Join Waitlist
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 text-sm mt-12">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                <span>Free tier available</span>
                            </div>
                        </div>

                        {/* Powered by AI Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-purple-500/20"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300">Powered by Advanced AI</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof - Light Background
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-gray-500 mb-12 text-lg font-medium">
                        Trusted by professionals at leading companies
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                        {['Google', 'Microsoft', 'Amazon', 'Meta'].map((company) => (
                            <div key={company} className="text-center text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Features Section - Light Background */}
            <section className="py-32 bg-light">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to supercharge your meeting productivity
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain className="w-8 h-8 text-purple-600" />,
                                title: 'Real-time AI Coaching',
                                description: 'Get live suggestions and insights during your meetings'
                            },
                            {
                                icon: <FileText className="w-8 h-8 text-purple-600" />,
                                title: 'Instant Meeting Summaries',
                                description: 'Automatically generated summaries with key takeaways'
                            },
                            {
                                icon: <Search className="w-8 h-8 text-purple-600" />,
                                title: 'Searchable History',
                                description: 'Find any conversation, decision, or action item instantly'
                            },
                            {
                                icon: <Users className="w-8 h-8 text-purple-600" />,
                                title: 'Team Collaboration',
                                description: 'Share insights and collaborate with your team seamlessly'
                            },
                            {
                                icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
                                title: 'Analytics Dashboard',
                                description: 'Track meeting patterns and productivity metrics'
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-purple-600" />,
                                title: '200+ Integrations',
                                description: 'Connect with your favorite tools and workflows'
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card-premium group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                                    {feature.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Showcase 1: Real-time Transcription - Light Background */}
            <section className="py-32 bg-light">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Real-time AI Transcription
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Get accurate, real-time transcripts of all your meetings. Our AI automatically identifies speakers, timestamps conversations, and highlights action items as they happen.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '95%+ transcription accuracy',
                                    'Automatic speaker identification',
                                    'Real-time action item detection',
                                    'Support for 100+ languages'
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-200 rounded-3xl blur-3xl opacity-20" />
                            <Image
                                src="/meeting-transcript-v2.png"
                                alt="Real-time meeting transcription interface"
                                width={600}
                                height={450}
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase 2: AI Summaries - White Background */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-purple-200 rounded-3xl blur-3xl opacity-20" />
                            <Image
                                src="/meeting-summary-v2.png"
                                alt="AI-powered meeting summary dashboard"
                                width={600}
                                height={450}
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Comprehensive AI Summaries
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Get detailed, AI-generated summaries instantly after every meeting. Key decisions, action items, and participant insights—all organized and ready to share.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Instant AI-generated summaries',
                                    'Automatic action item extraction',
                                    'Participant engagement insights',
                                    'One-click sharing with your team'
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase 3: Analytics - Light Background */}
            <section className="py-32 bg-light">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Powerful Analytics & Insights
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Track meeting patterns, productivity metrics, and team collaboration. Understand how your time is spent and optimize your meeting culture.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Meeting time and productivity tracking',
                                    'Team collaboration network analysis',
                                    'Speaking time distribution insights',
                                    'Customizable reports and dashboards'
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-200 rounded-3xl blur-3xl opacity-20" />
                            <Image
                                src="/analytics-dashboard-v2.png"
                                alt="Meeting analytics and insights dashboard"
                                width={600}
                                height={450}
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Dark Background */}
            <section className="py-32 bg-dark-gradient">

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Three simple steps to transform your meetings
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                step: '1',
                                title: 'Connect Your Calendar',
                                description: 'Link your Google or Microsoft calendar in seconds'
                            },
                            {
                                step: '2',
                                title: 'AI Joins & Takes Notes',
                                description: 'Our AI assistant automatically joins and records your meetings'
                            },
                            {
                                step: '3',
                                title: 'Get Instant Insights',
                                description: 'Receive summaries, action items, and searchable transcripts'
                            },
                        ].map((item, index) => (
                            <div key={item.step} className="text-center relative">
                                {/* Connecting line */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500 to-purple-600/20" />
                                )}

                                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold glow-purple relative z-10">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - Light Background */}
            <section className="py-32 bg-light">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-gray-900">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {[
                            { q: 'How much does it cost?', a: 'We offer a free tier for individuals and paid plans starting at $10/month.' },
                            { q: 'What makes Velos AI different?', a: 'Unlike other tools, Velos AI provides real-time coaching during meetings and deeply understands context across all your conversations.' },
                            { q: 'Is my data secure?', a: 'Absolutely. We\'re SOC 2 compliant and use enterprise-grade encryption. You own your data, and we never train our models on it.' },
                            { q: 'Which calendars do you support?', a: 'We support Google Calendar, Microsoft Outlook, and Apple Calendar.' },
                        ].map((faq) => (
                            <div key={faq.q} className="card-premium border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Dark Background */}
            <section className="py-32 bg-dark-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_70%)]" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                        Ready to Transform<br />Your Meetings?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Join thousands of professionals using Velos AI today.
                    </p>

                    <button
                        onClick={() => setIsWaitlistOpen(true)}
                        className="btn-primary px-12 py-6 text-xl glow-purple-strong animate-pulse-glow"
                    >
                        Get Started Now
                        <ArrowRight className="inline-block ml-2 w-6 h-6" />
                    </button>

                    <p className="text-sm text-gray-400 mt-8">
                        No credit card required for free tier.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <Image
                                src="/logo.png"
                                alt="Velos AI"
                                width={400}
                                height={40}
                                className="h-12 w-auto mb-6"
                            />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The AI meeting assistant that actually understands you.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-white text-lg">Product</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-white text-lg">Company</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-white text-lg">Legal</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                        © 2026 Velos AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
