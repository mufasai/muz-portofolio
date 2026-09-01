import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

interface MultiPhoneMockupProps {
    screens: string[];
    titles?: string[];
}

const MultiPhoneMockup: React.FC<MultiPhoneMockupProps> = ({
    screens,
    titles = ["Tren Pengeluaran", "Dashboard & Aksi Cepat", "BahScore & AI Insight"],
}) => {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [animationKey, setAnimationKey] = useState(0);
    const [isSeparated, setIsSeparated] = useState(true);

    const replayAnimation = () => {
        setAnimationKey((prev) => prev + 1);
        setIsSeparated(true);
        setFocusedIndex(null);
    };

    const toggleSeparate = () => {
        setIsSeparated((prev) => !prev);
        setFocusedIndex(null);
    };

    // Ensure we have 3 screens: [0: Left, 1: Center, 2: Right]
    const leftScreen = screens[0] || screens[1] || screens[0];
    const centerScreen = screens[1] || screens[0];
    const rightScreen = screens[2] || screens[0];

    const phoneConfigs = [
        {
            id: 0,
            screen: leftScreen,
            title: titles[0] || "Screen 1",
            separated: {
                x: -240,
                y: 15,
                rotate: -8,
                scale: 0.88,
                zIndex: focusedIndex === 0 ? 40 : 10,
            },
            stacked: {
                x: -15,
                y: -10,
                rotate: -4,
                scale: 0.92,
                zIndex: 10,
            },
        },
        {
            id: 1,
            screen: centerScreen,
            title: titles[1] || "Screen 2",
            separated: {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1.0,
                zIndex: focusedIndex === 1 ? 40 : (focusedIndex !== null ? 15 : 25),
            },
            stacked: {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1.0,
                zIndex: 30,
            },
        },
        {
            id: 2,
            screen: rightScreen,
            title: titles[2] || "Screen 3",
            separated: {
                x: 240,
                y: 15,
                rotate: 8,
                scale: 0.88,
                zIndex: focusedIndex === 2 ? 40 : 10,
            },
            stacked: {
                x: 15,
                y: 10,
                rotate: 4,
                scale: 0.92,
                zIndex: 20,
            },
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full py-2 select-none">
            {/* Control Bar / Quick Actions & Helper Hint */}
            <div className="flex flex-col items-center gap-2.5 mb-6 z-30">
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleSeparate}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
                    >
                        <span>{isSeparated ? "Satukan Layar" : "Pisahkan Layar (Spread)"}</span>
                    </button>
                    <button
                        onClick={replayAnimation}
                        className="p-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
                        title="Ulangi Animasi"
                    >
                        <RotateCcw size={14} className="text-orange-400" />
                    </button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                    💡 Klik atau arahkan kursor pada salah satu smartphone untuk melihat detail layar secara fokus.
                </p>
            </div>

            {/* Animation Stage */}
            <div
                key={animationKey}
                className="relative w-full h-[490px] md:h-[550px] flex items-center justify-center overflow-visible mb-2"
            >
                {/* Background Ambient Glow */}
                <div className="absolute w-[450px] h-[300px] bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute w-[350px] h-[250px] bg-orange-500/10 rounded-full blur-[90px] pointer-events-none" />

                {phoneConfigs.map((phone) => {
                    const isFocused = focusedIndex === phone.id;
                    const targetPos = isSeparated ? phone.separated : phone.stacked;

                    return (
                        <motion.div
                            key={phone.id}
                            initial={{
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 0.85,
                                opacity: 0,
                            }}
                            animate={{
                                x: isFocused ? 0 : targetPos.x,
                                y: isFocused ? -20 : targetPos.y,
                                rotate: isFocused ? 0 : targetPos.rotate,
                                scale: isFocused ? 1.06 : targetPos.scale,
                                opacity: 1,
                                zIndex: isFocused ? 50 : targetPos.zIndex,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 22,
                                delay: isSeparated ? (phone.id === 1 ? 0.05 : 0.2) : 0.05,
                            }}
                            whileHover={{
                                y: targetPos.y - 14,
                                scale: (isFocused ? 1.06 : targetPos.scale) * 1.03,
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => setFocusedIndex(isFocused ? null : phone.id)}
                            className="absolute cursor-pointer transform-gpu"
                            style={{
                                width: 'min(270px, 68vw)',
                                maxWidth: '280px',
                            }}
                        >
                            {/* Smartphone Device Frame */}
                            <div
                                className={`relative rounded-[2.6rem] bg-zinc-950 p-2.5 border-[6px] border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 ${
                                    isFocused
                                        ? 'ring-4 ring-orange-500/80 shadow-[0_0_50px_rgba(249,115,22,0.35)]'
                                        : 'ring-1 ring-white/20'
                                }`}
                            >
                                {/* Top Dynamic Island / Sensor */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2.5 shadow-inner">
                                    <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full border border-zinc-800" />
                                </div>

                                {/* Screen Body */}
                                <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/19.5] shadow-inner">
                                    <img
                                        src={phone.screen}
                                        alt={phone.title}
                                        className="w-full h-full object-cover object-top select-none"
                                        draggable={false}
                                    />

                                    {/* Glass Specular Reflection Highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent pointer-events-none z-20" />
                                </div>
                            </div>

                            {/* Floating Screen Title Badge */}
                            <motion.div
                                animate={{ opacity: isSeparated || isFocused ? 1 : 0 }}
                                className="mt-3 text-center"
                            >
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border transition-all ${
                                        isFocused
                                            ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/30'
                                            : 'bg-black/70 text-zinc-300 border-white/10'
                                    }`}
                                >
                                    {phone.title}
                                </span>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default MultiPhoneMockup;
