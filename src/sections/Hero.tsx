import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0] as const,
      },
    },
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="bg-glow-spot top-1/4 left-1/10" />
      <div className="bg-glow-spot bottom-1/4 right-1/10" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Availability status removed */}

            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                Hi, I'm <span className="accent-gradient-text text-glow">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-700 dark:text-slate-300">
                {personalInfo.title}
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.tagline} Specialize in designing secure Java backend ecosystems coupled with custom AI architectures and computer vision systems.
            </motion.p>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button 
                variant="primary" 
                onClick={() => handleScrollToSection('projects')}
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                View My Projects
              </Button>
            </motion.div>

            {/* Social Coordinates */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-accent-blue dark:hover:text-accent-cyan border border-white/20 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-accent-blue dark:hover:text-accent-cyan border border-white/20 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-accent-blue dark:hover:text-accent-cyan border border-white/20 transition-all hover:scale-105"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Premium Profile Graphic/Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}

            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Spinning decorative frame */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-accent-blue/30 dark:border-accent-cyan/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-accent-blue/10 dark:border-accent-cyan/10 animate-[spin_60s_linear_infinite] reverse" />

            {/* Glowing Backdrop Mesh */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-accent-blue/20 to-accent-cyan/20 dark:from-accent-blue/10 dark:to-accent-cyan/10 blur-2xl animate-pulse-subtle" />

            {/* Glassmorphic Avatar Icon */}
            <div className="w-60 h-60 sm:w-68 sm:h-68 rounded-full glass-panel flex flex-col items-center justify-center border border-white/20 relative animate-float shadow-2xl">
              <span className="text-6xl select-none filter drop-shadow-[0_0_10px_rgba(0,180,216,0.3)]">💻</span>
              <div className="mt-4 text-center">
                <span className="font-display font-extrabold text-lg tracking-wide uppercase text-slate-800 dark:text-white">
                  &lt;TS /&gt;
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                  Java & AI Engineer
                </p>
              </div>

              {/* Decorative hardware nodes representing Java + AI */}
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-navy-900 border border-white/10 dark:border-white/5 rounded-lg text-xs font-mono text-accent-cyan">
                JVM
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1 bg-navy-900 border border-white/10 dark:border-white/5 rounded-lg text-xs font-mono text-accent-cyan">
                AI / DS
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer text-slate-400 dark:text-slate-500 hidden sm:block"
        onClick={() => handleScrollToSection('about')}
      >
        <span className="text-sm uppercase tracking-widest font-semibold block mb-1">Scroll</span>
        <div className="w-5 h-8 border-2 border-current rounded-full mx-auto flex justify-center pt-1">
          <div className="w-1.5 h-1.5 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
