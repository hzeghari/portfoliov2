"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { NAV } from '../constants/nav';

export default function NavBar(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className='relative' aria-label="Secondary navigation">
      {/* Desktop Navigation */}
      <ul className='hidden md:flex justify-end gap-8 list-none'>
        {NAV.map((item, index) => (
          <li key={item.slug}>
            <Link
              href={item.slug}
              className='font-mono text-sm hover:text-primary-500 transition-colors flex items-center gap-2'
            >
              <span className='text-primary-600 dark:text-primary-400' aria-hidden="true">
                0{index + 1}.
              </span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className='md:hidden p-2 hover:bg-current hover:bg-opacity-10 rounded transition-colors'
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-full right-0 mt-2 bg-(--background) border-2 border-current rounded-lg shadow-lg p-4 min-w-[200px] md:hidden'>
          <ul className='flex flex-col gap-4 list-none'>
            {NAV.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={item.slug}
                  className='font-mono text-sm hover:text-primary-500 transition-colors flex items-center gap-2'
                  onClick={() => setIsOpen(false)}
                >
                  <span className='text-primary-600 dark:text-primary-400' aria-hidden="true">
                    0{index + 1}.
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
