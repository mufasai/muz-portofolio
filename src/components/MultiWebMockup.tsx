import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, LayoutDashboard, Kanban, Calendar } from 'lucide-react';

interface MultiWebMockupProps {
    screens: string[];
    titles?: string[];
    url?: string;
}

const MultiWebMockup: React.FC<MultiWebMockupProps> = ({
    screens,
    titles = ["Dashboard Overview", "Task Management & Kanban", "Calendar Schedule"],
    url = "task-tracker.muzzie.my.id",
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const icons = [LayoutDashboard, Kanban, Calendar];

    return (
        <div className="flex flex-col items-center w-full select-none">
            {/* Top Interactive Feature Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-5 z-20">
                {screens.map((_, index) => {
                    const Icon = icons[index % icons.length];
                    const isActive = activeIndex === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                                isActive
                                    ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/25 scale-105'
                                    : 'bg-white/10 hover:bg-white/20 text-zinc-300 border-white/10 hover:text-white'
                            }`}
                        >
                            <Icon size={14} className={isActive ? 'text-white' : 'text-orange-400'} />
                            <span>{titles[index] || `Screen ${index + 1}`}</span>
                        </button>
                    );
                })}
            </div>

            {/* Modern macOS Browser Window Frame */}
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-950 border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)]">
                {/* Browser Header Bar */}
                <div className="h-12 bg-zinc-900/90 backdrop-blur-md border-b border-white/10 px-4 flex items-center justify-between">
                    {/* Traffic Light Window Buttons */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
                    </div>

                    {/* URL Pill */}
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/10 text-zinc-300 text-xs max-w-sm w-full mx-4 justify-center">
                        <Lock size={11} className="text-emerald-400" />
                        <span className="truncate font-medium">{url}</span>
                    </div>

                    {/* External Link Action */}
                    <div className="w-12 flex justify-end">
                        {url && (
                            <a
                                href={`https://${url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-orange-400 transition-colors p-1"
                                title="Buka website"
                            >
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Screen Content Container with Animated Crossfade */}
                <div className="relative bg-zinc-950 aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeIndex}
                            src={screens[activeIndex]}
                            alt={titles[activeIndex] || "Web Screen"}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="w-full h-full object-cover object-top select-none"
                            draggable={false}
                        />
                    </AnimatePresence>

                    {/* Glass Specular Reflection Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Helper Hint */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
                💡 Klik tab di atas untuk berganti antar tampilan fitur atau buka website langsung untuk mencoba interaksi penuh.
            </p>
        </div>
    );
};

export default MultiWebMockup;
