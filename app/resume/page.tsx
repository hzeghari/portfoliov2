"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_INFOS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../constants/infos';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ResumePage(): React.ReactElement {
  const skills = {
    programming: ['JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS/Sass', 'GraphQL', 'Python', 'PHP'],
    frameworks: ['React', 'Node.js', 'Express.js', 'Nest.js', 'jQuery', 'Angular', 'Tailwind CSS', 'Laravel'],
    tools: ['Git', 'Docker', 'Webpack', 'Postman', 'Contentful', 'Netlify', 'Heroku', 'WordPress', 'Firebase', 'Redis'],
    design: ['Figma'],
    databases: ['MongoDB', 'SQL', 'MySQL'],
  };

  return (
    <div className='min-h-screen py-24 sm:py-16 px-8 sm:px-4 print:py-0 print:px-0'>
      <div className='max-w-5xl mx-auto print:max-w-full'>
        {/* Header with Name and Contact */}
        <motion.header
          className='mb-12 sm:mb-8 text-center print:mb-2 print:text-left'
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        >
          <h1 className='font-serif text-5xl md:text-4xl sm:text-3xl font-bold mb-4 print:text-center print:mb-1'>
            {SOCIAL_INFOS.fullname}
          </h1>
          <div className='flex flex-wrap justify-center gap-3 sm:gap-2 font-mono text-sm sm:text-xs text-primary-800 dark:text-primary-400 print:justify-center print:text-black print:gap-2'>
            <a href={`mailto:${SOCIAL_INFOS.email}`} className='hover:underline min-h-11 flex items-center print:min-h-0'>
              {SOCIAL_INFOS.email}
            </a>
            <span className='flex items-center'>•</span>
            <a href={`tel:${SOCIAL_INFOS.phone}`} className='hover:underline min-h-11 flex items-center print:min-h-0'>
              {SOCIAL_INFOS.phone}
            </a>
            <span className='flex items-center sm:hidden'>•</span>
            <span className='flex items-center sm:w-full sm:justify-center sm:mt-1 print:w-auto print:mt-0'>Casablanca, Morocco</span>
          </div>
        </motion.header>

        {/* Professional Summary */}
        <motion.section
          className='mb-12 sm:mb-8 print:mb-2 print:break-inside-avoid'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-4 sm:mb-3 border-b-2 border-primary-800 dark:border-primary-400 pb-2 print:mb-1 print:border-black print:pb-1'>
            Professional Summary
          </h2>
          <p className='font-mono text-sm sm:text-[13px] leading-relaxed print:text-black print:leading-snug print:text-[10pt]'>
            Full-stack developer with 5+ years of experience specializing in building scalable web applications 
            using modern technologies. Proficient in React, TypeScript, Node.js, and Nest.js. Currently contributing 
            to platform development at IZI Safety while maintaining a strong focus on code quality, team collaboration, 
            and continuous improvement.
          </p>
        </motion.section>

        {/* Relevant Experience */}
        <motion.section
          className='mb-12 sm:mb-8 print:mb-2'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 sm:mb-4 border-b-2 border-primary-800 dark:border-primary-400 pb-2 print:mb-2 print:border-black print:pb-1'>
            Relevant Experience
          </h2>
          <div className='space-y-8 sm:space-y-6 print:space-y-2'>
            {EXPERIENCES.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp} className='print:break-inside-avoid'>
                <div className='flex justify-between items-start mb-2 flex-wrap gap-2 print:mb-1'>
                  <div>
                    <h3 className='font-sans text-lg sm:text-base font-semibold print:text-black'>
                      {exp.title}
                    </h3>
                    <p className='font-mono text-sm sm:text-xs text-primary-800 dark:text-primary-400 print:text-black'>
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className='font-mono text-sm sm:text-xs text-primary-700 dark:text-primary-500 whitespace-nowrap print:text-black'>
                    {exp.period}
                  </span>
                </div>
                <ul className='space-y-2 mt-3 print:mt-1 print:space-y-1'>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className='relative pl-6 font-mono text-xs sm:text-[10px] leading-relaxed print:text-black print:leading-normal'>
                      <span className='absolute left-0 text-primary-800 dark:text-primary-400 print:text-black' aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className='mt-3 flex flex-wrap gap-2 print:mt-2 print:gap-1'>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 text-[10px] font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded print:bg-gray-100 print:text-black print:border print:border-gray-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {exp.link && (
                  <a
                    href={exp.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mt-2 font-mono text-xs text-primary-800 dark:text-primary-400 hover:underline no-print'
                  >
                    → View Project
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          className='mb-12 print:mb-2 print:break-inside-avoid'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2 print:mb-2 print:border-black print:pb-1'>
            Education
          </h2>
          <div className='space-y-6 print:space-y-2'>
            {EDUCATION.map((edu, index) => (
              <motion.div key={index} variants={fadeInUp} className='print:break-inside-avoid'>
                <div className='flex justify-between items-start flex-wrap gap-2 print:gap-1'>
                  <div>
                    <h3 className='font-sans text-base sm:text-sm font-semibold print:text-black'>
                      {edu.degree}
                    </h3>
                    <p className='font-mono text-sm sm:text-xs text-primary-800 dark:text-primary-400 print:text-black'>
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <span className='font-mono text-sm sm:text-xs text-primary-700 dark:text-primary-500 whitespace-nowrap print:text-black'>
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          className='mb-12 print:mb-2 print:break-inside-avoid'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2 print:mb-2 print:border-black print:pb-1'>
            Certifications
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2'>
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                className='p-4 bg-primary-100 dark:bg-primary-900 bg-opacity-30 rounded-lg print:p-2 print:bg-gray-50 print:border print:border-gray-300 print:break-inside-avoid'
                variants={fadeInUp}
              >
                <h3 className='font-sans text-sm font-semibold mb-1 print:text-black'>
                  {cert.name}
                </h3>
                <p className='font-mono text-xs text-primary-800 dark:text-primary-400 print:text-black'>
                  {cert.issuer} • {cert.year}
                </p>
                {cert.id && (
                  <p className='font-mono text-[10px] text-primary-700 dark:text-primary-500 mt-1 print:text-black'>
                    ID: {cert.id}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          className='mb-12 print:mb-0'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2 print:mb-2 print:border-black print:pb-1'>
            Technical Skills
          </h2>
          <div className='space-y-4 print:space-y-1'>
            <motion.div variants={fadeInUp} className='print:break-inside-avoid'>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400 print:mb-1 print:text-black'>
                Programming Languages
              </h3>
              <div className='flex flex-wrap gap-2 print:gap-1'>
                {skills.programming.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full print:bg-gray-100 print:text-black print:border print:border-gray-300 print:rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className='print:break-inside-avoid'>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400 print:mb-1 print:text-black'>
                Frameworks & Libraries
              </h3>
              <div className='flex flex-wrap gap-2 print:gap-1'>
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full print:bg-gray-100 print:text-black print:border print:border-gray-300 print:rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className='print:break-inside-avoid'>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400 print:mb-1 print:text-black'>
                Databases
              </h3>
              <div className='flex flex-wrap gap-2 print:gap-1'>
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full print:bg-gray-100 print:text-black print:border print:border-gray-300 print:rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className='print:break-inside-avoid'>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400 print:mb-1 print:text-black'>
                Tools & Platforms
              </h3>
              <div className='flex flex-wrap gap-2 print:gap-1'>
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full print:bg-gray-100 print:text-black print:border print:border-gray-300 print:rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className='print:break-inside-avoid'>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400 print:mb-1 print:text-black'>
                Design Tools
              </h3>
              <div className='flex flex-wrap gap-2 print:gap-1'>
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full print:bg-gray-100 print:text-black print:border print:border-gray-300 print:rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Print/Download CTA */}
        <motion.div
          className='text-center mt-12 no-print print:hidden'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <button
            onClick={() => window.print()}
            className='inline-flex px-8 py-4 sm:px-6 sm:py-3 font-mono text-sm min-h-11 items-center justify-center border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all active:scale-95'
            aria-label="Print resume or save as PDF"
          >
            <svg 
              className='w-5 h-5 mr-2' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
              aria-hidden="true"
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z' />
            </svg>
            Print / Save as PDF
          </button>
          <p className='mt-4 text-xs text-primary-700 dark:text-primary-500 font-mono'>
            Tip: Use &quot;Save as PDF&quot; in the print dialog for best results
          </p>
        </motion.div>
      </div>
    </div>
  );
}
