export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/30 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" style={{ animationDelay: "2s" }} />
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent-pink/30 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" style={{ animationDelay: "4s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-slow" />
        </div>
    );
}
