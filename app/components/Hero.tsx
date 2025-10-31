"use client";
import React from 'react';

export default function Hero(): React.ReactElement {
  return (
    <section 
      className='min-h-screen flex items-center my-0 mx-auto px-4 py-24 sm:py-16'
      aria-label="Introduction"
    >
      <div className='max-w-4xl'>
        {/* Greeting */}
        <div className='mb-6 sm:mb-4'>
          <p className='font-mono text-base sm:text-sm text-primary-700 dark:text-primary-400'>
            Hi, my name is
          </p>
        </div>

        {/* Name */}
        <div className='mb-4 sm:mb-2'>
          <h1 className='font-serif font-semibold text-7xl sm:text-4xl leading-tight'>
            Hamza Zeghari.
          </h1>
        </div>

        {/* Tagline */}
        <div className='mb-8 sm:mb-6'>
          <h2 className='font-serif font-semibold text-7xl sm:text-4xl leading-tight opacity-60'>
            I build things for the web.
          </h2>
        </div>

        {/* Description */}
        <div className='max-w-2xl'>
          <p className='font-mono text-lg sm:text-base leading-relaxed opacity-80'>
            I&apos;m a software engineer based in Casablanca, Morocco, specializing in building 
            (and occasionally designing) exceptional, high-quality websites and applications.
          </p>
        </div>

        {/* Optional CTA */}
        <div className='mt-12 sm:mt-8'>
          <a
            href='#about'
            className='inline-block px-8 py-4 sm:px-6 sm:py-3 font-mono text-sm border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all'
            aria-label="Learn more about me"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
