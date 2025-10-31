"use client";
import Image from 'next/image';
import React from 'react';

interface Skill {
  name: string;
  category?: string;
}

const skills: Skill[] = [
  { name: 'JavaScript (ES6+)' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'PHP' },
  { name: 'Laravel' },
  { name: 'WordPress' },
];

export default function About(): React.ReactElement {
  return (
    <section 
      id="about" 
      className='min-h-screen max-w-4xl my-0 mx-auto px-4 py-24'
      aria-labelledby="about-heading"
    >
      {/* Section Header */}
      <div className='flex items-center relative mt-3 mx-0 mb-10 max-w-full'>
        <span className='relative mr-2.5 text-lg sm:text-base font-mono font-normal text-primary-700 dark:text-primary-400' aria-hidden="true">
          01.
        </span>
        <h2 
          id="about-heading" 
          className='font-serif text-3xl sm:text-2xl whitespace-nowrap'
        >
          About Me
        </h2>
        <span 
          className='block relative w-72 sm:w-32 h-px ml-5 sm:ml-3 bg-current opacity-20' 
          aria-hidden="true"
        />
      </div>

      {/* Content Grid */}
      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 sm:gap-8'>
        {/* Text Content */}
        <div className='space-y-4'>
          <div className='font-mono text-sm sm:text-xs leading-relaxed'>
            <p className='mb-4'>
              Hey! I&apos;m Hamza, a software engineer based in Casablanca,
              Morocco who enjoys building stuff that lives on the net. I develop
              remarkable websites and web apps that offer intuitive,
              pixel-perfect user interfaces with efficient and modern backends.
            </p>
            <p className='mb-4'>
              Shortly after graduating from SETTAT Faculty of Science and
              Technology, I joined the company Applite in which I work on a huge
              variety of interesting and significant projects on a daily basis.
            </p>
            <p className='mb-4'>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>

          {/* Skills List */}
          <ul className='grid grid-cols-2 gap-2 mt-5' role="list">
            {skills.map((skill) => (
              <li 
                key={skill.name}
                className='relative mb-2 pl-5 text-sm sm:text-xs font-mono flex items-center'
              >
                <span className='absolute left-0 text-primary-600 dark:text-primary-400' aria-hidden="true">
                  ▹
                </span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile Image */}
        <div className='relative max-w-xs md:max-w-full mx-auto md:mx-0'>
          <div className='relative w-72 h-72 sm:w-56 sm:h-56 mx-auto group'>
            {/* Animated gradient background */}
            <div 
              className='absolute inset-0 rounded-full bg-linear-to-br from-primary-700 via-primary-800 to-primary-900 dark:from-primary-400 dark:via-primary-500 dark:to-primary-700 opacity-15 dark:opacity-20 blur-2xl group-hover:opacity-25 dark:group-hover:opacity-30 transition-all duration-700 animate-pulse'
              aria-hidden="true"
            />
            
            {/* Rotating border rings */}
            <div 
              className='absolute inset-0 rounded-full border-2 border-primary-800 dark:border-primary-500 opacity-20 dark:opacity-30'
              style={{ animation: 'spin 20s linear infinite' }}
              aria-hidden="true"
            />
            <div 
              className='absolute inset-4 rounded-full border border-primary-700 dark:border-primary-400 opacity-15 dark:opacity-20'
              style={{ animation: 'spin 15s linear infinite reverse' }}
              aria-hidden="true"
            />
            
            {/* Decorative corner accents */}
            <div className='absolute -top-2 -right-2 w-16 h-16 sm:w-12 sm:h-12' aria-hidden="true">
              <div className='w-full h-full border-t-2 border-r-2 border-black dark:border-primary-400 rounded-tr-3xl opacity-40 dark:opacity-60' />
            </div>
            <div className='absolute -bottom-2 -left-2 w-16 h-16 sm:w-12 sm:h-12' aria-hidden="true">
              <div className='w-full h-full border-b-2 border-l-2 border-black dark:border-primary-400 rounded-bl-3xl opacity-40 dark:opacity-60' />
            </div>
            
            {/* Main image container with glassmorphism effect */}
            <div className='absolute inset-8 sm:inset-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-black dark:ring-primary-500 ring-opacity-10 dark:ring-opacity-20 group-hover:ring-opacity-20 dark:group-hover:ring-opacity-40 transition-all duration-500'>
              {/* Gradient overlay border */}
              <div 
                className='absolute inset-0 rounded-full bg-linear-to-br from-primary-800 to-black dark:from-primary-300 dark:to-primary-700 p-[3px] group-hover:p-1 transition-all'
                aria-hidden="true"
              >
                <div className='w-full h-full rounded-full bg-(--background)' />
              </div>
              
              {/* Image wrapper */}
              <div className='relative w-full h-full rounded-full overflow-hidden bg-linear-to-br from-white to-primary-100 dark:from-primary-900 dark:to-primary-800'>
                <Image
                  src='/images/01.png'
                  alt='Hamza Zeghari - Software Engineer based in Casablanca, Morocco'
                  fill
                  className='object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2'
                  sizes="(max-width: 550px) 224px, 288px"
                  priority={false}
                />
                
                {/* Color overlay with mix-blend */}
                <div className='absolute inset-0 bg-linear-to-br from-black via-transparent to-primary-900 dark:from-primary-500 dark:via-transparent dark:to-primary-700 mix-blend-soft-light opacity-20 dark:opacity-30 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-700' />
                
                {/* Shine effect on hover */}
                <div className='absolute inset-0 bg-linear-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full transform' 
                  style={{ transitionProperty: 'opacity, transform' }}
                />
              </div>
            </div>
            
            {/* Floating particles effect */}
            <div 
              className='absolute top-1/4 right-0 w-2 h-2 rounded-full bg-primary-900 dark:bg-primary-500 opacity-50 dark:opacity-60' 
              style={{ animation: 'float 3s ease-in-out infinite' }}
              aria-hidden="true" 
            />
            <div 
              className='absolute bottom-1/4 left-0 w-3 h-3 rounded-full bg-primary-800 dark:bg-primary-400 opacity-35 dark:opacity-40' 
              style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}
              aria-hidden="true" 
            />
            <div 
              className='absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-black dark:bg-primary-600 opacity-40 dark:opacity-50' 
              style={{ animation: 'float 5s ease-in-out infinite 1s' }}
              aria-hidden="true" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
