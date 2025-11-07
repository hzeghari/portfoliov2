"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_PROFILES } from '../constants/social';
import { SOCIAL_INFOS } from '../constants/infos';

export default function Footer(): React.ReactElement {
  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    Instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <title>Instagram</title>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    Twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <title>Twitter</title>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
    LinkedIn: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  };

  return (
    <>
      {/* Left Side - Social Icons */}
      <motion.div
        className='fixed left-[60px] bottom-0 hidden md:flex flex-col items-center gap-6 z-10'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ul className='flex flex-col items-center gap-5 list-none m-0 p-0'>
          {SOCIAL_PROFILES.map((profile) => (
            <motion.li key={profile.name} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <a
                href={profile.slug}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={profile.name}
                className='p-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
              >
                {socialIcons[profile.name]}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className='w-[3px] h-28 bg-current opacity-20'></div>
      </motion.div>

      {/* Right Side - Email */}
      <motion.div
        className='fixed right-[60px] bottom-0 hidden md:flex flex-col items-center gap-6 z-10'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.a
          href={`mailto:${SOCIAL_INFOS.email}`}
          className='font-mono text-sm tracking-wider hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:tracking-widest'
          style={{
            writingMode: 'vertical-rl',
          }}
          aria-label={`Send email to ${SOCIAL_INFOS.email}`}
          whileHover={{ y: -3 }}
        >
          {SOCIAL_INFOS.email}
        </motion.a>
        <div className='w-[3px] h-28 bg-current opacity-20'></div>
      </motion.div>

      {/* Mobile Footer */}
      <footer 
        className='md:hidden sticky bottom-0 z-50 p-6 sm:p-5 mt-auto font-mono bg-(--background) bg-opacity-95 backdrop-blur-md border-t border-current border-opacity-10'
        role="contentinfo"
      >
        <nav 
          className='flex flex-wrap gap-8 sm:gap-6 items-center justify-center mb-4'
          aria-label="Social media and contact links"
        >
          {SOCIAL_PROFILES.map((profile) => (
            <a
              key={profile.name}
              href={profile.slug}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
              aria-label={profile.name}
            >
              {socialIcons[profile.name]}
            </a>
          ))}
        </nav>
        <div className='text-center mt-4 text-[10px] opacity-50'>
          <p>© {new Date().getFullYear()} Hamza Zeghari</p>
        </div>
      </footer>
    </>
  );
}
