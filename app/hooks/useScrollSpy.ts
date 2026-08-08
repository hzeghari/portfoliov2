"use client";
import { useState } from 'react';
import { useScrollEffect } from './useScrollEffect';

/**
 * Tracks which section is currently in view based on scroll position.
 * Returns the id of the active section (e.g. "about", "experience").
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>('');

  useScrollEffect(() => {
    const scrollY = window.scrollY + offset;

    // Walk sections bottom-up so the last one that's past the offset wins
    let current = '';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveId(current);
  });

  return activeId;
}
