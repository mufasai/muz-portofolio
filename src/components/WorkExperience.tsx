import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WorkExperience = () => {
  const { t } = useLanguage();

  return (
    <section id="work-experience" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            {t.workExperience.title} <span className="text-orange-500">{t.workExperience.highlight}</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.workExperience.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/50 via-border to-orange-500/50 -translate-x-1/2 z-0" />

          <div className="space-y-12 relative z-10">
            {t.workExperience.experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <div className={`bg-card border border-border rounded-2xl p-6 hover:border-orange-500/30 transition-all ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        {/* Header */}
                        <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} mb-4`}>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-orange-500 font-semibold mb-3">
                            {exp.company}
                          </p>

                          {/* Meta info */}
                          <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className={`space-y-2 text-muted-foreground text-sm ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className={`text-orange-500 mt-1 ${isLeft ? 'md:order-2' : ''}`}>•</span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-secondary border-4 border-orange-500 rounded-full items-center justify-center shadow-lg z-20">
                      <Briefcase size={22} className="text-orange-500" />
                    </div>

                    {/* Spacer for layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
