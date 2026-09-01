import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Eye, X, Award, Presentation, Bookmark, ExternalLink, ArrowUpRight, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type CategoryType = 'all' | 'competition' | 'seminar' | 'certification';

const Activities = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedMedia, setSelectedMedia] = useState<{ image: string; title: string; link?: string; video?: string } | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'competition':
        return <Award size={14} className="text-orange-500" />;
      case 'seminar':
        return <Presentation size={14} className="text-orange-500" />;
      case 'certification':
        return <Bookmark size={14} className="text-orange-500" />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'competition':
        return t.activities.categories.competition;
      case 'seminar':
        return t.activities.categories.seminar;
      case 'certification':
        return t.activities.categories.certification;
      default:
        return '';
    }
  };

  // Filter items based on active category
  const filteredItems = t.activities.items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const categoriesList: { id: CategoryType; label: string }[] = [
    { id: 'all', label: t.activities.categories.all },
    { id: 'competition', label: t.activities.categories.competition },
    { id: 'seminar', label: t.activities.categories.seminar },
    { id: 'certification', label: t.activities.categories.certification },
  ];

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            {t.activities.title} <span className="text-orange-500">{t.activities.highlight}</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.activities.description}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1.5 bg-card/60 backdrop-blur-xl border border-border rounded-2xl md:rounded-full">
            {categoriesList.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-2.5 rounded-xl md:rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-orange-500 rounded-xl md:rounded-full z-0 shadow-md shadow-orange-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full shadow-lg"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative h-56 overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: item.objectPosition || 'center' }}
                    loading="lazy"
                  />

                  {/* Video indicator badge if item has video */}
                  {'video' in item && item.video && (
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                      <Play size={11} className="fill-orange-500 text-orange-500" />
                      <span>Video</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {/* Zoom / Play Button */}
                    <button
                      onClick={() => setSelectedMedia({ image: item.image, title: item.title, link: item.link, video: 'video' in item ? (item.video as string) : undefined })}
                      className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/20 shadow-xl transition-all hover:scale-110 cursor-pointer flex items-center justify-center"
                      title={'video' in item && item.video ? "Play Video" : "Zoom Image"}
                    >
                      {'video' in item && item.video ? (
                        <Play size={20} className="fill-orange-500 text-orange-500 ml-0.5" />
                      ) : (
                        <Eye size={20} className="text-orange-500" />
                      )}
                    </button>

                    {/* Link Button */}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/20 shadow-xl transition-all hover:scale-110 cursor-pointer"
                        title={t.activities.readArticle}
                      >
                        <ExternalLink size={20} className="text-orange-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge & Date */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="flex items-center gap-1.5 text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/10">
                      {getCategoryIcon(item.category)}
                      {getCategoryLabel(item.category)}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
                      <Calendar size={12} className="text-orange-500/70" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Read Article Link at the Bottom */}
                  {item.link && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors group/link"
                      >
                        {t.activities.readArticle}
                        <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Lightbox / Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 z-50 cursor-pointer"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col shadow-2xl cursor-default"
            >
              <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center p-2 min-h-[300px]">
                {selectedMedia.video ? (
                  <video
                    src={selectedMedia.video}
                    controls
                    autoPlay
                    playsInline
                    className="max-w-full max-h-[70vh] rounded-lg shadow-2xl"
                  />
                ) : (
                  <img
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                )}
              </div>
              <div className="bg-card p-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h4 className="text-lg font-bold text-foreground">{selectedMedia.title}</h4>
                {selectedMedia.link && (
                  <a
                    href={selectedMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-orange-500/20"
                  >
                    {t.activities.readArticle}
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

export default Activities;
