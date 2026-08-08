import React from 'react';
import { PROJECTS, type Project } from '../constants/projects';
import SectionHeading from './SectionHeading';

function ExternalLinkIcon(): React.ReactElement {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
      <path d='M15 3h6v6' />
      <path d='M10 14 21 3' />
    </svg>
  );
}

function RepoIcon(): React.ReactElement {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }): React.ReactElement {
  const headingId = `project-${project.title.toLowerCase().replace(/\W+/g, '-')}`;

  return (
    <li
      className='group flex flex-col h-full p-6 sm:p-5 rounded-lg bg-primary-100/40 dark:bg-(--surface) border border-(--border-subtle) hover:border-primary-700 dark:hover:border-[rgba(232,230,225,0.2)] transition-colors'
      aria-labelledby={headingId}
    >
      <p className='font-mono text-xs text-primary-800 dark:text-(--accent)'>
        {project.context}
      </p>

      <h3
        id={headingId}
        className='font-sans text-lg sm:text-base font-semibold mt-2'
      >
        {project.title}
      </h3>

      <p className='font-mono text-[13px] leading-relaxed opacity-80 mt-3 flex-1'>
        {project.description}
      </p>

      <ul className='flex flex-wrap gap-2 mt-5 list-none' aria-label='Built with'>
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className='px-2.5 py-1 text-[11px] font-mono rounded-full bg-primary-200/70 dark:bg-(--surface-hover) text-primary-900 dark:text-(--accent)'
          >
            {tech}
          </li>
        ))}
      </ul>

      {(project.link || project.repo) && (
        <div className='flex items-center gap-5 mt-5'>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 font-mono text-xs min-h-11 hover:text-primary-600 dark:hover:text-(--accent) transition-colors'
            >
              <ExternalLinkIcon />
              <span>
                Visit site
                <span className='sr-only'> — {project.title}</span>
              </span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 font-mono text-xs min-h-11 hover:text-primary-600 dark:hover:text-(--accent) transition-colors'
            >
              <RepoIcon />
              <span>
                Source
                <span className='sr-only'> — {project.title}</span>
              </span>
            </a>
          )}
        </div>
      )}
    </li>
  );
}

export default function Projects(): React.ReactElement {
  const featured = PROJECTS.filter((project) => project.featured);
  const rest = PROJECTS.filter((project) => !project.featured);

  return (
    <section
      id='projects'
      className='min-h-screen max-w-4xl my-0 mx-auto px-4 py-24 sm:py-16'
      aria-labelledby='projects-heading'
    >
      <SectionHeading id='projects-heading' number='03'>
        Things I&apos;ve Built
      </SectionHeading>

      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 list-none'>
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      {rest.length > 0 && (
        <>
          <h3 className='font-mono text-xs uppercase tracking-widest opacity-60 mt-14 mb-6'>
            Other projects
          </h3>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 list-none'>
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
