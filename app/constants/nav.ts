export interface NavItem {
  name: string;
  slug: string;
}

export const NAV: NavItem[] = [
  { name: 'About', slug: '/#about' },
  { name: 'Experience', slug: '/#experience' },
  { name: 'Projects', slug: '/#projects' },
  { name: 'Contact', slug: '/#contact' },
  { name: 'Resume', slug: '/resume' },
];

/** Section ids the header's scroll-spy tracks, in document order. */
export const NAV_SECTION_IDS: string[] = NAV.map(
  (item) => item.slug.match(/#(.+)$/)?.[1] ?? '',
).filter(Boolean);
