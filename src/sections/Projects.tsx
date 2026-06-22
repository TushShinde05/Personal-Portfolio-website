import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

import { ExternalLink, X, Cpu, Server, BrainCircuit, ArrowRight, Play } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const isYouTubeUrl = (url: string) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const getYouTubeEmbedUrl = (url: string) => {
  try {
    let videoId = '';
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1]?.split('?')[0] || '';
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch (e) {
    return url;
  }
};

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const filteredProjects = projectsData;

  const getProjectIcon = (category: Project['category']) => {
    switch (category) {
      case 'Java/Backend':
        return <Server className="w-8 h-8 text-accent-blue" />;
      case 'AI & DS':
        return <BrainCircuit className="w-8 h-8 text-accent-cyan" />;
      case 'Hardware/Embedded':
        return <Cpu className="w-8 h-8 text-accent-teal" />;
    }
  };

  const getProjectBannerGradient = (category: Project['category']) => {
    switch (category) {
      case 'Java/Backend':
        return 'from-accent-blue/20 via-accent-indigo/10 to-transparent';
      case 'AI & DS':
        return 'from-accent-cyan/20 via-accent-blue/10 to-transparent';
      case 'Hardware/Embedded':
        return 'from-accent-teal/20 via-accent-cyan/10 to-transparent';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Featured Projects" subtitle="A curation of my backend engineering systems, artificial intelligence projects, and hardware prototypes." />



        {/* Project Grid */}
        <motion.div 
          layout 
          className={`grid grid-cols-1 ${filteredProjects.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8 text-left`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard 
                  onClick={() => setActiveProject(project)}
                  className="group h-full flex flex-col justify-between overflow-hidden border border-white/10 dark:border-white/5 relative"
                >
                  <div>
                    {/* Stylized header illustration container */}
                    <div className={`h-40 -mx-6 -mt-6 mb-6 bg-gradient-to-b ${getProjectBannerGradient(project.category)} bg-slate-100 dark:bg-navy-950 flex items-center justify-center relative overflow-hidden transition-colors border-b border-slate-200/50 dark:border-white/5`}>
                      <div className="p-4 rounded-full glass-panel border border-white/40 dark:border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {getProjectIcon(project.category)}
                      </div>
                      <div className="absolute bottom-3 right-3 text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                        {project.category}
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-extrabold text-slate-800 dark:text-white mb-1 group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent-blue dark:text-accent-cyan font-mono mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-500 dark:text-slate-400 font-mono font-semibold">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-400 dark:text-slate-500 font-mono font-semibold">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Learn more trigger */}
                    <div className="inline-flex items-center text-xs font-bold text-accent-blue dark:text-accent-cyan group-hover:gap-1.5 transition-all">
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project details overlay modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-navy-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col text-left"
            >
              {/* Header gradient banner */}
              <div className={`h-32 bg-gradient-to-r ${getProjectBannerGradient(activeProject.category)} bg-slate-100 dark:bg-navy-950 p-6 flex justify-between items-end relative border-b border-slate-200/50 dark:border-white/5`}>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-slate-800 dark:text-white mt-1">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl glass-panel border border-white/20 dark:border-white/10 text-slate-500 hover:text-slate-800 dark:hover:text-white hover:scale-105 transition-all focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal scroll body */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-grow">
                <div>
                  <p className="text-sm font-semibold text-accent-blue dark:text-accent-cyan font-mono mb-2">
                    {activeProject.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                    {activeProject.detailedDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Key Features & Implementations
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue dark:bg-accent-cyan mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div>
                  <h4 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/5 font-semibold font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal footer links */}
              <div className="p-6 bg-slate-50/50 dark:bg-navy-950/50 border-t border-slate-200/50 dark:border-white/5 flex flex-wrap gap-4 items-center justify-end">
                {activeProject.videoUrl && (
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => setIsPlayingVideo(true)}
                    icon={<Play className="w-4 h-4 ml-1" />}
                  >
                    Watch Project Working
                  </Button>
                )}
                {activeProject.githubUrl && (
                  <a href={activeProject.githubUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" icon={<GithubIcon className="w-4 h-4 ml-1" />}>
                      GitHub Repository
                    </Button>
                  </a>
                )}
                {activeProject.liveUrl && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                    <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4 ml-1" />}>
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Lightbox Overlay */}
      <AnimatePresence>
        {isPlayingVideo && activeProject && activeProject.videoUrl && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlayingVideo(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Lightbox Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl z-10 aspect-video flex items-center justify-center"
            >
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white/70 hover:text-white hover:scale-105 transition-all focus:outline-none z-20"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              {isYouTubeUrl(activeProject.videoUrl) ? (
                <iframe
                  src={`${getYouTubeEmbedUrl(activeProject.videoUrl)}?autoplay=1`}
                  title={`${activeProject.title} Demo Video`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeProject.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  preload="auto"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
