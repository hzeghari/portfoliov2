import React from 'react';
import { SOCIAL_PROFILES } from '../constants/social';
import { SOCIAL_INFOS } from '../constants/infos';

export default function Footer(): React.ReactElement {
  return (
    <footer 
      className='sticky bottom-0 z-50 p-7 sm:p-5 mt-auto font-mono text-xs leading-none uppercase tracking-wider md:text-[10px] bg-(--background) bg-opacity-90 backdrop-blur-sm'
      role="contentinfo"
    >
      <nav 
        className='flex flex-wrap gap-8 sm:gap-4 items-center justify-center md:justify-between'
        aria-label="Social media and contact links"
      >
        {/* Email Link - Hidden on small screens */}
        <a
          href={`mailto:${SOCIAL_INFOS.email}`}
          className='inline-block mr-auto py-2 sm:py-1 hover:text-primary-500 transition-colors sm:hidden'
          aria-label={`Send email to ${SOCIAL_INFOS.email}`}
        >
          <span aria-hidden="true">👋</span> {SOCIAL_INFOS.email}
        </a>

        {/* Social Links */}
        {SOCIAL_PROFILES.map((profile) => (
          <a
            key={profile.name}
            href={profile.slug}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block py-2 sm:py-1 hover:text-primary-500 transition-colors'
            aria-label={`Visit ${profile.name} profile`}
          >
            {profile.name}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <div className='text-center mt-6 sm:mt-4 text-[10px] opacity-50 normal-case tracking-normal'>
        <p>
          © {new Date().getFullYear()} Hamza Zeghari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
