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
    <div className='min-h-screen py-24 px-8 sm:px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Header with Name and Contact */}
        <motion.header
          className='mb-12 text-center'
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        >
          <h1 className='font-serif text-5xl sm:text-3xl font-bold mb-4'>
            {SOCIAL_INFOS.fullname}
          </h1>
          <div className='flex flex-wrap justify-center gap-4 font-mono text-sm sm:text-xs text-primary-800 dark:text-primary-400'>
            <a href={`mailto:${SOCIAL_INFOS.email}`} className='hover:underline'>
              {SOCIAL_INFOS.email}
            </a>
            <span>•</span>
            <a href={`tel:${SOCIAL_INFOS.phone}`} className='hover:underline'>
              {SOCIAL_INFOS.phone}
            </a>
            <span>•</span>
            <span>Casablanca, Morocco</span>
          </div>
        </motion.header>

        {/* Professional Summary */}
        <motion.section
          className='mb-12'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-4 border-b-2 border-primary-800 dark:border-primary-400 pb-2'>
            Professional Summary
          </h2>
          <p className='font-mono text-sm sm:text-xs leading-relaxed'>
            Full-stack developer with 5+ years of experience specializing in building scalable web applications 
            using modern technologies. Proficient in React, TypeScript, Node.js, and Nest.js. Currently contributing 
            to platform development at IZI Safety while maintaining a strong focus on code quality, team collaboration, 
            and continuous improvement.
          </p>
        </motion.section>

        {/* Relevant Experience */}
        <motion.section
          className='mb-12'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2'>
            Relevant Experience
          </h2>
          <div className='space-y-8'>
            {EXPERIENCES.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className='flex justify-between items-start mb-2 flex-wrap gap-2'>
                  <div>
                    <h3 className='font-sans text-lg sm:text-base font-semibold'>
                      {exp.title}
                    </h3>
                    <p className='font-mono text-sm sm:text-xs text-primary-800 dark:text-primary-400'>
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className='font-mono text-sm sm:text-xs text-primary-700 dark:text-primary-500 whitespace-nowrap'>
                    {exp.period}
                  </span>
                </div>
                <ul className='space-y-2 mt-3'>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className='relative pl-6 font-mono text-xs sm:text-[10px] leading-relaxed'>
                      <span className='absolute left-0 text-primary-800 dark:text-primary-400' aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 text-[10px] font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded'
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
                    className='inline-block mt-2 font-mono text-xs text-primary-800 dark:text-primary-400 hover:underline'
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
          className='mb-12'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2'>
            Education
          </h2>
          <div className='space-y-6'>
            {EDUCATION.map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className='flex justify-between items-start flex-wrap gap-2'>
                  <div>
                    <h3 className='font-sans text-base sm:text-sm font-semibold'>
                      {edu.degree}
                    </h3>
                    <p className='font-mono text-sm sm:text-xs text-primary-800 dark:text-primary-400'>
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <span className='font-mono text-sm sm:text-xs text-primary-700 dark:text-primary-500 whitespace-nowrap'>
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          className='mb-12'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2'>
            Certifications
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                className='p-4 bg-primary-100 dark:bg-primary-900 bg-opacity-30 rounded-lg'
                variants={fadeInUp}
              >
                <h3 className='font-sans text-sm font-semibold mb-1'>
                  {cert.name}
                </h3>
                <p className='font-mono text-xs text-primary-800 dark:text-primary-400'>
                  {cert.issuer} • {cert.year}
                </p>
                {cert.id && (
                  <p className='font-mono text-[10px] text-primary-700 dark:text-primary-500 mt-1'>
                    ID: {cert.id}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          className='mb-12'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className='font-serif text-2xl sm:text-xl font-bold mb-6 border-b-2 border-primary-800 dark:border-primary-400 pb-2'>
            Technical Skills
          </h2>
          <div className='space-y-4'>
            <motion.div variants={fadeInUp}>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400'>
                Programming Languages
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.programming.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400'>
                Frameworks & Libraries
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400'>
                Databases
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400'>
                Tools & Platforms
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className='font-sans text-sm font-semibold mb-2 text-primary-800 dark:text-primary-400'>
                Design Tools
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 text-xs font-mono bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-200 rounded-full'
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
          className='text-center mt-12 no-print'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <button
            onClick={() => window.print()}
            className='inline-block px-8 py-4 sm:px-6 sm:py-3 font-mono text-sm border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all'
          >
            Print / Save as PDF
          </button>
        </motion.div>
      </div>
    </div>
  );
}
