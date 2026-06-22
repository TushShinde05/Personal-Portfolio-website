import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:cursor-not-allowed select-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-lg hover:shadow-accent-blue/20 hover:brightness-105 active:scale-95 dark:from-accent-blue dark:to-accent-cyan',
    secondary: 'bg-navy-800 text-white hover:bg-navy-700 dark:bg-navy-900 dark:hover:bg-navy-800 border border-navy-700/50 dark:border-navy-800/50 active:scale-95',
    outline: 'border border-accent-blue/50 text-accent-blue dark:text-accent-cyan dark:border-accent-cyan/50 hover:bg-accent-blue/5 dark:hover:bg-accent-cyan/5 active:scale-95',
    glass: 'glass-panel text-slate-800 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 active:scale-95'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-base gap-2',
    lg: 'px-8 py-3 text-lg gap-2.5'
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    >
      <span>{children}</span>
      {icon && <span className="flex items-center transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );


};

export default Button;
