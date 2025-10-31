"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeButton(): React.ReactElement {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored === 'dark' || (!stored && prefersDark);
    
    // Defer state updates to avoid synchronous setState in effect
    setTimeout(() => {
      setMounted(true);
      setIsDark(initialTheme);
    }, 0);
  }, []);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  // Prevent flash during SSR
  if (!mounted) {
    return (
      <button
        className='grid place-items-center w-10 h-10 rounded-full transition-all hover:bg-current hover:bg-opacity-10'
        aria-label='Toggle theme'
        disabled
      >
        <div className='w-6 h-6 opacity-0' />
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className='grid place-items-center w-10 h-10 rounded-full transition-all hover:bg-current hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primary-500'
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <ThemeIcon isDark={isDark} />
    </motion.button>
  );
}

interface ThemeIconProps {
  isDark: boolean;
}

const ThemeIcon = ({ isDark }: ThemeIconProps): React.ReactElement => (
  <motion.svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6 sm:w-5 sm:h-5'
    animate={{ rotate: isDark ? 180 : 0 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    aria-hidden="true"
  >
    <motion.path
      d='M12 21V3c-4.96286 0-9 4.03714-9 9 0 4.9629 4.03714 9 9 9Z'
      fill='currentColor'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.circle
      cx='12'
      cy='12'
      r='9'
      stroke='currentColor'
      strokeWidth='2'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  </motion.svg>
);
