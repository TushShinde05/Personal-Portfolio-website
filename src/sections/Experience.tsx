import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Professional Experience" subtitle="My practical industry roles developing backend APIs and AI research systems." />
        
        <div className="relative border-l-2 border-slate-200 dark:border-navy-800 ml-4 md:ml-6 space-y-12 max-w-4xl">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan border-2 border-slate-50 dark:border-navy-950 shadow-md" />
              
              <GlassCard delay={index * 0.15} className="border border-white/10 dark:border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-display font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent-blue dark:text-accent-cyan" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-accent-blue dark:text-accent-cyan mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="list-disc pl-5 text-left text-slate-600 dark:text-slate-300 space-y-2.5 text-sm md:text-base mb-6 leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-white/5">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-950 text-slate-500 dark:text-slate-400 font-semibold font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
