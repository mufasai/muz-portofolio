import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ProjectMockup from './ProjectMockup';
import MultiPhoneMockup from './MultiPhoneMockup';

interface ProjectItem {
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    link?: string;
    mockupType?: string;
    screens?: string[];
    screenTitles?: string[];
}

const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    const projectItems: ProjectItem[] = (t.projects.items as ProjectItem[]) || [];

    return (
        <section id="projects" className="py-24 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
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
                    {projectItems.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full shadow-lg"
                        >
                            <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-4">
                                <ProjectMockup
                                    image={project.image}
                                    alt={project.title}
                                    type={project.mockupType as any}
                                />
                                {/* Overlay gradient + buttons */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="p-2.5 bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md rounded-xl transition-all shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                                            title="Preview Mockup"
                                        >
                                            <Eye size={16} />
                                            <span>Preview</span>
                                        </button>
                                        {project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                                                title={t.projects.viewProject}
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((techItem) => (
                                        <span
                                            key={techItem}
                                            className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full border border-border"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mockup Zoom & Animated Fanning Lightbox */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md cursor-zoom-out overflow-y-auto"
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 z-50 cursor-pointer"
                            onClick={() => setSelectedProject(null)}
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 flex flex-col shadow-2xl cursor-default my-auto"
                        >
                            <div className="relative flex-1 overflow-hidden bg-zinc-950 flex items-center justify-center p-4 md:p-6 min-h-[460px]">
                                {selectedProject.screens && selectedProject.screens.length >= 3 ? (
                                    <MultiPhoneMockup
                                        screens={selectedProject.screens}
                                        titles={selectedProject.screenTitles}
                                    />
                                ) : (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="max-w-full max-h-[75vh] object-contain rounded-xl"
                                    />
                                )}
                            </div>
                            <div className="bg-card p-5 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div>
                                    <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block">
                                        {selectedProject.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-foreground">{selectedProject.title}</h4>
                                </div>
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-orange-500/20"
                                    >
                                        <span>{t.projects.viewProject}</span>
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;