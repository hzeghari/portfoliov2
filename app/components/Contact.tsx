import React from 'react';
import { SOCIAL_INFOS } from '../constants/infos';
import { SOCIAL_PROFILES } from '../constants/social';
import SectionHeading from './SectionHeading';

export default function Contact(): React.ReactElement {
  return (
    <section
      id='contact'
      className='max-w-4xl my-0 mx-auto px-4 py-24 sm:py-16'
      aria-labelledby='contact-heading'
    >
      <SectionHeading id='contact-heading' number='04'>
        Get In Touch
      </SectionHeading>

      <div className='max-w-2xl'>
        <p className='font-mono text-sm sm:text-[13px] leading-relaxed opacity-80'>
          I&apos;m open to new opportunities and freelance work. Whether you have
          a project in mind, a role you&apos;re hiring for, or just want to talk
          shop, my inbox is always open and I&apos;ll get back to you.
        </p>

        <div className='flex flex-wrap items-center gap-4 mt-10'>
          <a
            href={`mailto:${SOCIAL_INFOS.email}`}
            className='inline-flex px-8 py-4 sm:px-6 sm:py-3 font-mono text-sm min-h-11 items-center justify-center border-2 border-current rounded hover:bg-current hover:bg-opacity-10 transition-all active:scale-95'
          >
            Say hello
          </a>
          <a
            href={`mailto:${SOCIAL_INFOS.email}`}
            className='font-mono text-sm min-h-11 inline-flex items-center underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity'
          >
            {SOCIAL_INFOS.email}
          </a>
        </div>

        {/* Repeated in flow because the desktop social rail is positioned off to
            the side and the mobile bar is icon-only. */}
        <ul className='flex flex-wrap gap-6 mt-10 list-none'>
          {SOCIAL_PROFILES.map((profile) => (
            <li key={profile.name}>
              <a
                href={profile.slug}
                target='_blank'
                rel='noopener noreferrer'
                className='font-mono text-xs min-h-11 inline-flex items-center opacity-60 hover:opacity-100 transition-opacity'
              >
                {profile.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
