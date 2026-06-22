import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Calendar } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Honors & Achievements" subtitle="Recognitions and competitive accomplishments in software engineering and technology." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {achievementsData.map((ach, index) => (
            <GlassCard key={index} delay={index * 0.15} className="border border-white/10 dark:border-white/5 border-t-4 border-t-accent-blue dark:border-t-accent-cyan flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-accent-blue/10 dark:bg-accent-cyan/15 rounded-xl text-accent-blue dark:text-accent-cyan">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {ach.date}
                  </span>
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-800 dark:text-white mb-2">
                  {ach.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
