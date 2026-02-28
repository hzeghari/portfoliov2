"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { NAV } from '../constants/nav';

interface NavBarProps {
  activeSection?: string;
}

/**
 * Extracts the section id from a nav slug like "/#about" → "about".
 * Returns empty string for non-hash routes like "/resume".
 */
function sectionIdFromSlug(slug: string): string {
  const match = slug.match(/#(.+)$/);
  return match ? match[1] : '';
}

export default function NavBar({ activeSection = '' }: NavBarProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Close menu on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className='relative' aria-label="Secondary navigation">
      {/* Desktop Navigation */}
      <ul className='hidden md:flex justify-end gap-8 list-none'>
        {NAV.map((item, index) => {
          const sectionId = sectionIdFromSlug(item.slug);
          const isActive = sectionId !== '' && activeSection === sectionId;

          return (
            <li key={item.slug} className='relative'>
              <Link
                href={item.slug}
                className={`font-mono text-sm transition-colors flex items-center gap-2 ${
                  isActive
                    ? 'text-(--foreground)'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive
                      ? 'text-primary-800 dark:text-(--accent)'
                      : 'text-primary-600 dark:text-(--accent)'
                  }`}
                  aria-hidden="true"
                >
                  0{index + 1}.
                </span>
                {item.name}
              </Link>
              {isActive && (
                <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full' />
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className='md:hidden p-2 hover:bg-current hover:bg-opacity-10 rounded transition-colors min-w-11 min-h-11 flex items-center justify-center relative z-50'
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
          className='transition-transform duration-200'
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

      {/* Mobile Menu Backdrop + Panel */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className='fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 md:hidden'
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div
            ref={menuRef}
            className='absolute top-full right-0 mt-2 bg-(--background) border border-(--border-subtle) dark:bg-(--surface) dark:border-[rgba(232,230,225,0.1)] rounded-lg shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 min-w-[200px] md:hidden z-50 animate-[menuSlideIn_0.2s_ease-out]'
          >
            <ul className='flex flex-col gap-4 list-none'>
              {NAV.map((item, index) => {
                const sectionId = sectionIdFromSlug(item.slug);
                const isActive = sectionId !== '' && activeSection === sectionId;

                return (
                  <li key={item.slug}>
                    <Link
                      href={item.slug}
                      className={`font-mono text-sm transition-colors flex items-center gap-2 min-h-11 py-2 ${
                        isActive
                          ? 'text-(--foreground)'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={closeMenu}
                    >
                      <span className='text-primary-600 dark:text-(--accent)' aria-hidden="true">
                        0{index + 1}.
                      </span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
