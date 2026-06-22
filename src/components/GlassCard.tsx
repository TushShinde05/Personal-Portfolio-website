import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 border border-white/10 dark:border-white/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent-blue/10 dark:hover:shadow-accent-cyan/5 ${onClick ? 'cursor-pointer select-none' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
