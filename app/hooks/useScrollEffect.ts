'use client';
import { useEffect, useRef } from 'react';

/**
 * Runs `handler` once on mount and then on scroll, coalesced to at most one
 * call per animation frame. Scroll events fire far more often than frames are
 * painted, so handlers that read layout (offsetTop, scrollY) otherwise force a
 * synchronous reflow on every event during a gesture.
 */
export function useScrollEffect(handler: () => void): void {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame !== 0) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        handlerRef.current();
      });
    };

    handlerRef.current();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);
}
