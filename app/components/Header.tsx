"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeButton from './ThemeButton';
import NavBar from './NavBar';

export default function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 px-8 sm:px-4 py-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-(--background) bg-opacity-95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
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
              className='text-2xl sm:text-xl font-sans font-semibold uppercase tracking-wide hover:opacity-70 transition-opacity'
              aria-label="Home"
            >
              <span className='inline-block'>Hamza</span>
              {' '}
              <span className='inline-block'>Zeghari</span>
            </Link>
          </motion.div>

          {/* Navigation & Actions */}
          <motion.div className='flex items-center gap-6 sm:gap-4' variants={word}>
            <NavBar />
            <ThemeButton />
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
