"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

export default function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-8 sm:px-4 py-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-(--background) bg-opacity-95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto'>
        <nav 
          className='flex justify-between items-center'
          aria-label="Main navigation"
        >
          {/* Logo/Name */}
          <Link 
            href='/' 
            className='text-2xl sm:text-xl font-sans font-semibold uppercase tracking-wide hover:opacity-70 transition-opacity'
            aria-label="Home"
          >
            <span className='inline-block'>Hamza</span>
            {' '}
            <span className='inline-block'>Zeghari</span>
          </Link>

          {/* Actions */}
          <div className='flex items-center gap-4'>
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
