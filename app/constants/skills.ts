export interface SkillCategory {
  label: string;
  skills: string[];
}

/**
 * Single source of truth for the skills list. The resume page renders every
 * category in this order; the About section renders FEATURED_SKILLS.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Programming Languages',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML',
      'CSS/Sass',
      'GraphQL',
      'Python',
      'PHP',
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Nest.js',
      'Redux',
      'React Query',
      'Tailwind CSS',
      'Ant Design',
      'jQuery',
      'Angular',
      'Laravel',
    ],
  },
  {
    label: 'Databases',
    skills: ['MongoDB', 'SQL', 'MySQL', 'TypeORM', 'Redis'],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      'Git',
      'Docker',
      'Webpack',
      'Postman',
      'Contentful',
      'Netlify',
      'Vercel',
      'Heroku',
      'WordPress',
      'Firebase',
    ],
  },
  {
    label: 'Design Tools',
    skills: ['Figma'],
  },
];

/** The stack currently in day-to-day use, highlighted in the About section. */
export const FEATURED_SKILLS: string[] = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Nest.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'React Query',
  'Tailwind CSS',
  'Docker',
];
