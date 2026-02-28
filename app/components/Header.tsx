"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeButton from './ThemeButton';
import NavBar from './NavBar';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTION_IDS = ['about', 'experience'];

export default function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const activeSection = useScrollSpy(SECTION_IDS, 120);

  const sentence = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const word = {
    hidden: {
      y: 32,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.75,
      },
    },
  };

  useEffect(() => {
    const SCROLL_THRESHOLD = 10;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Only toggle visibility after passing a small threshold to avoid flicker
      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      if (delta > 0 && currentY > 80) {
        // Scrolling down past the hero area — hide
        setIsVisible(false);
      } else {
        // Scrolling up — show
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-4 py-5 sm:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-(--background)/95 backdrop-blur-md shadow-md dark:shadow-[0_1px_0_rgba(232,230,225,0.06)]' 
          : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      initial="hidden"
      animate="show"
      variants={sentence}
    >
      <div className='max-w-7xl mx-auto'>
        <nav 
          className='flex justify-between items-center'
          aria-label="Main navigation"
        >
          {/* Logo/Name */}
          <motion.div variants={word}>
            <Link 
              href='/' 
              className='text-2xl sm:text-lg font-sans font-semibold uppercase tracking-wide hover:opacity-70 transition-opacity min-h-11 flex items-center'
              aria-label="Home"
            >
              <span className='inline-block'>Hamza</span>
              {' '}
              <span className='inline-block'>Zeghari</span>
            </Link>
          </motion.div>

          {/* Navigation & Actions */}
          <motion.div className='flex items-center gap-4 sm:gap-3' variants={word}>
            <NavBar activeSection={activeSection} />
            <ThemeButton />
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
