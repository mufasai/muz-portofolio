import { motion } from 'framer-motion';
import { Layout, Database, Smartphone, Palette } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const skillCategories = [
    {
        title: "Frontend Dev",
        icon: Layout,
        skills: ["React", "Solid", "Next.js", "Tailwind CSS", "Laravel"],
    },
    {
        title: "Backend Dev",
        icon: Database,
        skills: ["Node.js", "PostgreSQL", "Supabase", "Express", "Rust", "Golang"],
    },
    {
        title: "Mobile Dev",
        icon: Smartphone,
        skills: ["React Native", "Flutter"],
    },
    {
        title: "Design",
        icon: Palette,
        skills: ["Figma"],
    },
];

const Skills = () => {
    const { t } = useLanguage();
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background">
            {/* Background Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Centered Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
                            Tech Stack
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                            {t.skills.title} <span className="text-orange-500">{t.skills.highlight}</span>
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {t.skills.description}
                        </p>
                    </motion.div>
                </div>

                {/* 4-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="p-7 bg-card border border-border rounded-3xl hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                        >
                            {/* Subtle Ambient Glow on Hover */}
                            <div className="absolute -top-10 -right-10 w-28 h-28 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/15 transition-all duration-500 pointer-events-none" />

                            <div>
                                {/* Icon Badge */}
                                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <cat.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-orange-400 transition-colors">
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-medium text-muted-foreground bg-secondary/80 hover:text-foreground hover:bg-secondary hover:border-orange-500/30 px-3 py-1.5 rounded-xl border border-border transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;