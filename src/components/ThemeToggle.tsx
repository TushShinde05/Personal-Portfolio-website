import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="p-2 rounded-xl glass-panel text-slate-800 dark:text-white border border-white/20 dark:border-white/10 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors focus:outline-none select-none"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 1 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-accent-cyan" />
        ) : (
          <Moon className="w-5 h-5 text-accent-blue" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
