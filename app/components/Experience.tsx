"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants/infos';

export default function Experience(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="experience"
      className='min-h-screen max-w-4xl my-0 mx-auto px-4 py-24 sm:py-16'
      aria-labelledby="experience-heading"
    >
      {/* Section Header */}
      <div className='flex items-center relative mt-3 mx-0 mb-16 sm:mb-10 max-w-full'>
        <span className='relative mr-2.5 text-lg sm:text-base font-mono font-normal text-primary-800 dark:text-(--accent)' aria-hidden="true">
          02.
        </span>
        <h2
          id="experience-heading"
          className='font-serif text-3xl sm:text-2xl whitespace-nowrap'
        >
          Where I&apos;ve Worked
        </h2>
        <span
          className='block relative w-72 sm:w-20 h-px ml-5 sm:ml-3 bg-current opacity-20'
          aria-hidden="true"
        />
      </div>

      {/* Experience Content */}
      <div className='flex flex-col md:flex-row gap-8 sm:gap-6'>
        {/* Company Tabs - Vertical on Desktop, Horizontal on Mobile */}
        <motion.div
          className='flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0'
          style={{ scrollbarWidth: 'thin' }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                relative px-6 py-3 sm:px-5 sm:py-3 text-left font-mono text-sm sm:text-xs whitespace-nowrap md:whitespace-normal
                transition-all duration-300 border-l-2 md:border-l-2 border-b-2 md:border-b-0
                min-h-11 flex items-center
                ${
                  activeIndex === index
                    ? 'border-primary-800 dark:border-(--accent) bg-primary-100 dark:bg-(--surface) bg-opacity-50 text-primary-900 dark:text-(--foreground)'
                    : 'border-primary-300 dark:border-[rgba(232,230,225,0.08)] hover:bg-primary-50 dark:hover:bg-(--surface-hover) hover:bg-opacity-30'
                }
              `}
              variants={itemVariants}
            >
              {exp.company}
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Details */}
        <motion.div
          className='flex-1 min-h-[400px] sm:min-h-[350px]'
          key={activeIndex}
          initial="hidden"
          animate="show"
          variants={contentVariants}
        >
          <div>
            {/* Title */}
            <h3 className='font-sans text-2xl sm:text-lg font-semibold mb-2'>
              {EXPERIENCES[activeIndex].title}
              <span className='text-primary-800 dark:text-(--accent) block sm:inline'>
                {' '}@ {EXPERIENCES[activeIndex].company}
              </span>
            </h3>

            {/* Period */}
            <p className='font-mono text-sm sm:text-xs text-primary-700 dark:text-(--accent) mb-6 sm:mb-4'>
              {EXPERIENCES[activeIndex].period}
            </p>

            {/* Description */}
            <ul className='space-y-4 sm:space-y-3 mb-6 sm:mb-4'>
              {EXPERIENCES[activeIndex].description.map((item, idx) => (
                <motion.li
                  key={idx}
                  className='relative pl-8 sm:pl-7 font-mono text-sm sm:text-[13px] leading-relaxed'
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className='absolute left-0 text-primary-800 dark:text-(--accent) text-lg sm:text-base' aria-hidden="true">
                    ▹
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Technologies */}
            {EXPERIENCES[activeIndex].technologies && (
              <div>
                <p className='font-mono text-xs font-semibold mb-3 text-primary-800 dark:text-(--accent)'>
                  Technologies:
                </p>
                <div className='flex flex-wrap gap-2'>
                  {EXPERIENCES[activeIndex].technologies?.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className='px-3 py-1.5 text-xs font-mono bg-primary-200 dark:bg-(--surface) dark:border dark:border-[rgba(232,230,225,0.1)] text-primary-900 dark:text-(--accent) rounded-full'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Link if available */}
            {EXPERIENCES[activeIndex].link && (
              <motion.div
                className='mt-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={EXPERIENCES[activeIndex].link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 font-mono text-sm text-primary-800 dark:text-(--accent) hover:underline'
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
