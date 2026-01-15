import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-4 bg-black/80 dark:bg-black/80 light:bg-white/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-black/10'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tighter"
                >
                    MUZ<span className="text-orange-500">ZIEE.</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    {/* Theme Toggle */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-zinc-800 dark:bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun size={18} className="text-orange-500" />
                        ) : (
                            <Moon size={18} className="text-orange-500" />
                        )}
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-800 hover:bg-zinc-700 transition-colors font-bold text-xs"
                        aria-label="Toggle language"
                    >
                        <span className={language === 'id' ? 'text-orange-500' : 'text-zinc-400'}>ID</span>
                        <span className="mx-0.5 text-zinc-600">/</span>
                        <span className={language === 'en' ? 'text-orange-500' : 'text-zinc-400'}>EN</span>
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                    >
                        {t.nav.hireMe}
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun size={18} className="text-orange-500" />
                        ) : (
                            <Moon size={18} className="text-orange-500" />
                        )}
                    </button>
                    <button
                        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors font-bold text-xs"
                        aria-label="Toggle language"
                    >
                        <span className={language === 'id' ? 'text-orange-500' : 'text-zinc-400'}>ID</span>
                        <span className="mx-0.5 text-zinc-600">/</span>
                        <span className={language === 'en' ? 'text-orange-500' : 'text-zinc-400'}>EN</span>
                    </button>
                    <button
                        className="text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-900 dark:bg-zinc-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-zinc-300 hover:text-orange-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <button className="px-5 py-3 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] w-full mt-4">
                                {t.nav.hireMe}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;