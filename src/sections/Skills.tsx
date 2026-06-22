import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { skillsData } from '../data/portfolioData';
import type { Skill } from '../data/portfolioData';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  // Define categories in order
  const categories: Skill['category'][] = [
    'Languages',
    'Computer Fundamentals',
    'Frameworks',
    'Tools'
  ];

  // Helper to get icon for category
  const getCategoryIcon = (category: Skill['category']) => {
    switch (category) {
      case 'Languages': return '💻';
      case 'Computer Fundamentals': return '🧠';
      case 'Frameworks': return '⚙️';
      case 'Tools': return '🛠️';
      default: return '⚡';
    }
  };

  const getCategoryColorClass = (category: Skill['category']) => {
    switch (category) {
      case 'Languages': return 'bg-accent-blue';
      case 'Computer Fundamentals': return 'bg-accent-indigo';
      case 'Frameworks': return 'bg-accent-cyan';
      case 'Tools': return 'bg-accent-teal';
      default: return 'bg-accent-blue';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Glows */}
      <div className="bg-glow-spot top-1/3 right-1/10" style={{ animationDelay: '1s' }} />
      <div className="bg-glow-spot bottom-1/3 left-1/10" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <SectionHeader 
          title="Skills & Expertise" 
          subtitle="Categorized breakdown of programming languages, computer fundamentals, frameworks, and modern tools." 
        />
        
        {/* Skills Layout - 2x2 Grid on large screens, 1 Column on smaller screens */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {categories.map((category) => {
            const skillsInCat = skillsData.filter(skill => skill.category === category);
            return (
              <motion.div key={category} variants={cardVariants}>
                <GlassCard className="h-full p-6 sm:p-8 border border-white/10 dark:border-white/5 flex flex-col hover:border-accent-blue/30 dark:hover:border-accent-cyan/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-200/50 dark:border-white/5 pb-4">
                    <span className="text-3xl select-none" role="img" aria-label={category}>
                      {getCategoryIcon(category)}
                    </span>
                    <h3 className="font-display font-extrabold text-slate-800 dark:text-white text-lg md:text-xl tracking-tight">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3.5 content-start flex-grow">
                    {skillsInCat.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2.5 rounded-xl bg-slate-100/40 dark:bg-navy-950/40 border border-slate-200/50 dark:border-white/5 text-slate-700 dark:text-slate-300 font-display font-extrabold text-sm flex items-center justify-center gap-2.5 hover:bg-slate-200/50 dark:hover:bg-navy-950/70 hover:border-accent-blue/30 dark:hover:border-accent-cyan/20 hover:text-slate-800 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md cursor-default shrink-0"
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${getCategoryColorClass(category)}`} />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
