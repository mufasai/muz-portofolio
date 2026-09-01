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
        { name: t.nav.activities, href: '#activities' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <motion.nav
            initial={false}
            animate={{
                top: isScrolled ? '1rem' : '0',
            }}
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'px-6' : 'px-0'
                }`}
        >
            <div
                className={`transition-all duration-500 ${isScrolled
                        ? 'max-w-4xl mx-auto bg-card/80 backdrop-blur-xl border border-border rounded-full shadow-2xl'
                        : 'container mx-auto bg-transparent'
                    }`}
            >
                <div className={`flex justify-between items-center ${isScrolled ? 'px-6 py-3' : 'px-6 py-6'}`}>
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-bold tracking-tighter"
                        animate={{
                            scale: isScrolled ? 0.9 : 1,
                        }}
                    >
                        MUZ<span className="text-orange-500">ZIEE.</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun size={16} className="text-orange-500" />
                            ) : (
                                <Moon size={16} className="text-orange-500" />
                            )}
                        </button>

                        <button
                            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                            className="flex items-center justify-center px-3 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors font-bold text-xs"
                            aria-label="Toggle language"
                        >
                            <span className={language === 'id' ? 'text-orange-500' : 'text-muted-foreground'}>ID</span>
                            <span className="mx-1 text-border">/</span>
                            <span className={language === 'en' ? 'text-orange-500' : 'text-muted-foreground'}>EN</span>
                        </button>

                        <button
                            className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                        >
                            {t.nav.hireMe}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun size={16} className="text-orange-500" />
                            ) : (
                                <Moon size={16} className="text-orange-500" />
                            )}
                        </button>
                        <button
                            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                            className="flex items-center justify-center px-2 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors font-bold text-xs"
                            aria-label="Toggle language"
                        >
                            <span className={language === 'id' ? 'text-orange-500' : 'text-muted-foreground'}>ID</span>
                            <span className="mx-0.5 text-border">/</span>
                            <span className={language === 'en' ? 'text-orange-500' : 'text-muted-foreground'}>EN</span>
                        </button>
                        <button
                            className="text-foreground p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-2 mx-6 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-muted-foreground hover:text-orange-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <button className="px-5 py-3 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg w-full mt-2">
                                {t.nav.hireMe}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
