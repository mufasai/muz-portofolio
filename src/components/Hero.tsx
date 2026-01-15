import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Animated gradient overlay moving across grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle 400px at var(--x, 50%) var(--y, 50%), rgba(249, 115, 22, 0.15), transparent 70%)',
          }}
          animate={{
            '--x': ['20%', '80%', '50%', '20%'],
            '--y': ['20%', '50%', '80%', '20%'],
          } as any}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Floating grid dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
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

      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-900/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            {t.hero.available}
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
            {t.hero.title} <br />
            <span className="text-gradient">{t.hero.digital}</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">

            <div className="flex items-center gap-4 px-4">
              {[
                { Icon: Github, href: "https://github.com/mufasai" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/musyafa-fadila/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-3 text-muted-foreground hover:text-orange-500 hover:bg-orange-500/5 rounded-xl transition-all"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Decorative frames */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-[40px] rotate-6 scale-105 opacity-20 blur-sm" />
            <div className="absolute inset-0 border-2 border-orange-500/30 rounded-[40px] -rotate-3" />

            <img
              src="/hero.jpeg"
              alt="Profile Avatar"
              className="relative z-10 w-full h-full object-cover rounded-[40px] transition-all duration-500 shadow-2xl"
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 z-20 bg-card border border-border p-4 rounded-2xl shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white">1+</div>
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