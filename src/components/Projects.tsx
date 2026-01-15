import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Tudoo Task Tracker",
        category: "Web Application",
        image: "/task.png",
        description: "Platform untuk melakukan tracking project atau task dengan canggih bisa melakukan kolaborasi dengan tim",
        tech: ["Next JS", "Node.js", "Tailwind", "Supabase"],
        link: "https://task-tracker.muzzie.my.id/",
    },

];

import { useLanguage } from '@/context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    return (
        <section id="projects" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        {t.projects.featured} <span className="text-orange-500">{t.projects.highlight}</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        {t.projects.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-orange-500/30 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay gradient + buttons */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white text-black rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full border border-border"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;