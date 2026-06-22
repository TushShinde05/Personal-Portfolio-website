import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { certificationsData } from '../data/portfolioData';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Certifications" subtitle="Professional validations of systems engineering and AI capabilities." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certificationsData.map((cert, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex flex-col justify-between h-full border border-white/10 dark:border-white/5">
              <div>
                <div className="p-3 bg-accent-blue/10 dark:bg-accent-cyan/15 rounded-xl inline-block mb-4">
                  <Award className="w-6 h-6 text-accent-blue dark:text-accent-cyan" />
                </div>
                <h3 className="text-base md:text-lg font-display font-extrabold text-slate-800 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm font-bold text-accent-blue dark:text-accent-cyan mb-2">
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200/50 dark:border-white/5">
                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-semibold font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-blue dark:text-accent-cyan hover:underline select-none"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
