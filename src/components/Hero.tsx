import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from '@/lib/utils';
import VideoBackground from './VideoBackground';

interface SequentialTypewriterProps {
  text1: string;
  text2: string;
  delay?: number;
}

const SequentialTypewriter = ({ text1, text2, delay = 75 }: SequentialTypewriterProps) => {
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [isPart1Finished, setIsPart1Finished] = useState(false);
  const [showCursorPart1, setShowCursorPart1] = useState(true);
  const [showCursorPart2, setShowCursorPart2] = useState(false);

  useEffect(() => {
    setPart1('');
    setPart2('');
    setIsPart1Finished(false);
    setShowCursorPart1(true);
    setShowCursorPart2(false);

    let idx1 = 0;
    let idx2 = 0;
    let timer2: any = null;

    const timer1 = setInterval(() => {
      if (idx1 < text1.length) {
        const char = text1.charAt(idx1);
        setPart1((prev) => prev + char);
        idx1++;
      } else {
        clearInterval(timer1);
        setShowCursorPart1(false);
        setIsPart1Finished(true);
        setShowCursorPart2(true);
        
        timer2 = setInterval(() => {
          if (idx2 < text2.length) {
            const char = text2.charAt(idx2);
            setPart2((prev) => prev + char);
            idx2++;
          } else {
            clearInterval(timer2);
          }
        }, delay);
      }
    }, delay);

    return () => {
      clearInterval(timer1);
      if (timer2) clearInterval(timer2);
    };
  }, [text1, text2, delay]);

  return (
    <span className="relative inline-block min-h-[5.5rem] md:min-h-[9rem]">
      <span>
        {part1}
        {showCursorPart1 && (
          <span className="animate-pulse border-r-4 border-orange-500 ml-1.5 h-[0.8em] inline-block align-middle">&nbsp;</span>
        )}
      </span>
      {isPart1Finished && (
        <>
          <br />
          <span className="text-gradient">
            {part2}
            {showCursorPart2 && (
              <span className="animate-pulse border-r-4 border-orange-500 ml-1.5 h-[0.8em] inline-block align-middle">&nbsp;</span>
            )}
          </span>
        </>
      )}
    </span>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
      {/* Video Background */}
      <VideoBackground
        src="/gradient_bg_xfade2.mp4"
        opacity={0.4}
      />

      {/* Magic UI Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <GridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          strokeDasharray={"8 4"}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "opacity-20"
          )}
        />

        {/* Floating grid dots */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-500/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            {t.hero.available}
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
            <SequentialTypewriter text1={t.hero.title} text2={t.hero.digital} />
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-4 px-4">
              {[
                { Icon: GithubIcon, href: "https://github.com/mufasai" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/musyafa-fadila/" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="p-3 text-muted-foreground hover:text-orange-500 hover:bg-orange-500/5 rounded-xl transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Decorative frames */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-[40px] rotate-6 scale-105 opacity-20 blur-sm"
            />
            <div
              className="absolute inset-0 border-2 border-orange-500/30 rounded-[40px] -rotate-3"
            />

            <img
              src="/hero.jpeg"
              alt="Profile Avatar"
              className="relative z-10 w-full h-full object-cover rounded-[40px] transition-all duration-500 shadow-2xl"
            />
          </div>

          {/* Experience Badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 z-20 bg-card border border-border p-4 rounded-2xl shadow-xl backdrop-blur-xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
                1+
              </div>
              <div className="text-xs">
                <p className="font-bold text-foreground">{t.hero.experience}</p>
                <p className="text-muted-foreground">Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
