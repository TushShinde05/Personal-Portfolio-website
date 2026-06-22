import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 py-8 mt-12 bg-slate-50/20 dark:bg-navy-950/20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="font-display font-extrabold text-slate-800 dark:text-white text-sm">
            Tushar Shinde
          </span>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-mono">
            &copy; {new Date().getFullYear()} Tushar Shinde. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
