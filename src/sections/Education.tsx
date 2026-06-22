import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Education" subtitle="My academic foundation and undergraduate study timeline." />
        
        <div className="relative border-l-2 border-slate-200 dark:border-navy-800 ml-4 md:ml-6 space-y-12 max-w-4xl">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan border-2 border-slate-50 dark:border-navy-950 shadow-md" />
              
              <GlassCard delay={index * 0.15} className="border border-white/10 dark:border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-display font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-accent-blue dark:text-accent-cyan" />
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-bold text-accent-blue dark:text-accent-cyan mt-1">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                </div>

                {edu.gpaOrPercentage && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-blue/15 dark:bg-accent-cyan/15 text-accent-blue dark:text-accent-cyan font-mono text-sm font-bold mb-4 select-none">
                    <Award className="w-4 h-4" />
                    {edu.gpaOrPercentage}
                  </div>
                )}

                {edu.details && (
                  <ul className="list-disc pl-5 text-left text-slate-600 dark:text-slate-300 space-y-2.5 text-sm md:text-base leading-relaxed">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
