import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { personalInfo } from '../data/portfolioData';
import { Code, Cpu, Server } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Specialization', value: 'Java Backend', icon: <Server className="w-5 h-5 text-accent-blue" /> },
    { label: 'Research Focus', value: 'AI & Data Science', icon: <Cpu className="w-5 h-5 text-accent-cyan" /> },
    { label: 'Language Core', value: 'OOP & Algorithms', icon: <Code className="w-5 h-5 text-accent-teal" /> },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="About Me" subtitle="My background, motivations, and engineering approach." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard className="flex-grow flex flex-col justify-center space-y-6">
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed text-left">
                {personalInfo.aboutMe}
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 text-left">
                My work spans engineering high-performance REST APIs in Spring Boot to designing robotics automation software that bridges physical devices and microcontrollers with vision intelligence. I am committed to writing clean, maintainable code, implementing strict test coverage, and always exploring the potential of neural networks in automation.
              </p>
            </GlassCard>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <GlassCard key={i} delay={i * 0.1} className="flex items-center gap-5 text-left border-l-4 border-l-accent-blue dark:border-l-accent-cyan">
                <div className="p-3 bg-slate-100 dark:bg-navy-950 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </h3>
                  <p className="text-lg md:text-xl font-display font-extrabold text-slate-800 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
