import { motion } from 'framer-motion';
import { Layout, Database, Smartphone, Palette, Terminal } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend Dev",
        icon: Layout,
        skills: ["React", "Solid", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Backend Dev",
        icon: Database,
        skills: ["Node.js", "PostgreSQL", "Supabase", "Express", "Rust"],
    },
    {
        title: "Mobile Dev",
        icon: Smartphone,
        skills: ["React Native", "Kotlin", "iOS/Android UI"],
    },
    {
        title: "Design",
        icon: Palette,
        skills: ["Figma"],
    },
];

import { useLanguage } from '@/context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left Side - Text & Stats */}
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                        >
                            {t.skills.title} <br />
                            <span className="text-orange-500">{t.skills.highlight}</span>
                        </motion.h2>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            {t.skills.description}
                        </p>

                        {/* Stats Card */}
                        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-lg max-w-sm mb-12">
                            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                                <Terminal size={24} />
                                <span className="font-bold">{t.skills.completedProjects}</span>
                            </div>
                            <div className="text-3xl font-bold text-foreground">8+ {t.projects.featured}</div>
                        </div>
                    </div>

                    {/* Right Side - Skill Categories */}
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skillCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-card border border-border rounded-3xl hover:bg-secondary transition-all group"
                            >
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    <cat.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-foreground">{cat.title}</h3>

                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-lg border border-border"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;