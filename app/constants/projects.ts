export interface Project {
  title: string;
  /** Client, employer, or context the work was done in. */
  context: string;
  description: string;
  technologies: string[];
  /** Public deployment, when there is one. */
  link?: string;
  /** Public source, when there is one. */
  repo?: string;
  /** Pinned projects render first and are visually emphasised. */
  featured?: boolean;
}

/**
 * REVIEW BEFORE DEPLOYING. These entries were reconstructed from the role
 * descriptions in infos.ts, which is all the detail the codebase had. Rewrite
 * the copy in your own words, add the projects that are missing, and fill in
 * links and screenshots where they exist — the descriptions are deliberately
 * factual rather than persuasive.
 */
export const PROJECTS: Project[] = [
  {
    title: 'IZI Safety Platform',
    context: 'IZI Safety',
    description:
      'Workplace safety platform I build features for day to day, spanning user management, system efficiency work, and the APIs behind them. My work covers both the React front end and the Nest.js services underneath.',
    technologies: [
      'React.js',
      'TypeScript',
      'Nest.js',
      'TypeORM',
      'Redux',
      'React Query',
      'Docker',
    ],
    featured: true,
  },
  {
    title: 'Marscan',
    context: 'Freelance',
    description:
      'Web application for a company importing food and feed products, covering the full path from initial analysis and design through to deployment on a VPS.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'VPS'],
    featured: true,
  },
  {
    title: 'La Livraison',
    context: 'Applite',
    description:
      'Online order-taking web application that I maintained and extended, working across the Laravel back end and the jQuery front end.',
    technologies: ['PHP', 'Laravel', 'jQuery', 'MySQL'],
    link: 'https://lalivraison.ma',
    featured: true,
  },
  {
    title: 'Client Accounts Management',
    context: 'Applite',
    description:
      'Back-office module for managing client accounts, including the real-time updates that kept operators in sync.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Socket.IO'],
  },
  {
    title: 'This Portfolio',
    context: 'Personal',
    description:
      'The site you are reading. Statically rendered, dark mode without a flash of the wrong theme, and a resume page that prints straight to a clean PDF.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://hzeghari.dev',
    repo: 'https://github.com/hzeghari/portfoliov2',
  },
];
