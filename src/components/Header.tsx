import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center hover:opacity-80 transition-smooth">
                        <Image
                            src="/logo.png"
                            alt="Velos AI"
                            width={180}
                            height={45}
                            priority
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Navigation
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-gray-300 hover:text-primary transition-smooth">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-gray-300 hover:text-primary transition-smooth">
                            How It Works
                        </Link>
                        <Link href="#faq" className="text-gray-300 hover:text-primary transition-smooth">
                            FAQ
                        </Link>
                    </nav> */}

                    {/* CTA Button */}
                    <Link
                        href="/waitlist"
                        className="px-6 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:scale-105 transition-smooth glow text-sm"
                    >
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </header>
    );
}
