import React from 'react';

interface SectionHeadingProps {
  /** Referenced by the section's aria-labelledby. */
  id: string;
  /** Display-only ordinal, e.g. "01". Hidden from assistive technology. */
  number: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  id,
  number,
  children,
  className = 'mb-10 sm:mb-8',
}: SectionHeadingProps): React.ReactElement {
  return (
    <div
      className={`flex items-center relative mt-3 mx-0 max-w-full ${className}`}
    >
      <span
        className='relative mr-2.5 text-lg sm:text-base font-mono font-normal text-primary-800 dark:text-(--accent)'
        aria-hidden='true'
      >
        {number}.
      </span>
      <h2 id={id} className='font-serif text-3xl sm:text-2xl whitespace-nowrap'>
        {children}
      </h2>
      <span
        className='block relative w-72 sm:w-20 h-px ml-5 sm:ml-3 bg-current opacity-20'
        aria-hidden='true'
      />
    </div>
  );
}
