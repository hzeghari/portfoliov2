'use client';
import React from 'react';
import { MotionConfig } from 'framer-motion';

/**
 * `reducedMotion="user"` makes every Framer Motion component in the tree drop
 * transform and layout animations when the OS requests reduced motion. CSS
 * animations are covered by the media query in globals.css.
 */
export default function MotionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
