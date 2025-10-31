"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(): React.ReactElement {
  const sentence = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
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
        type: 'tween',
        duration: 0.4,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      className='min-h-screen flex items-center my-0 mx-auto px-4 py-24 sm:py-16'
      aria-label="Introduction"
    >
      <motion.div 
        className='max-w-4xl'
        initial="hidden"
        animate="show"
        variants={sentence}
      >
        {/* Greeting */}
        <motion.div className='mb-6 sm:mb-4' variants={word}>
          <p className='font-mono text-base sm:text-sm text-primary-800 dark:text-primary-400'>
            Hi, my name is
          </p>
        </motion.div>

        {/* Name */}
        <motion.div className='mb-4 sm:mb-2' variants={word}>
          <h1 className='font-serif font-semibold text-7xl sm:text-4xl leading-tight'>
            Hamza Zeghari.
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div className='mb-8 sm:mb-6' variants={word}>
          <h2 className='font-serif font-semibold text-7xl sm:text-4xl leading-tight opacity-60'>
            I build things for the web.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div 
          className='max-w-2xl'
          variants={word}
        >
          <p className='font-mono text-lg sm:text-base leading-relaxed opacity-80'>
            I&apos;m a full-stack developer based in Casablanca, Morocco, specializing in building 
            exceptional web applications with modern technologies like React, TypeScript, Node.js, and Nest.js.
          </p>
        </motion.div>

        {/* Optional CTA */}
        <motion.div 
          className='mt-12 sm:mt-8'
          initial="hidden"
          animate="show"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <a
            href='#about'
            className='inline-block px-8 py-4 sm:px-6 sm:py-3 font-mono text-sm border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all'
            aria-label="Learn more about me"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
