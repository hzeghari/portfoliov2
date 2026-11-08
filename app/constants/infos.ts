export interface SocialInfos {
  fullname: string;
  user: string;
  email: string;
  phone: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  id?: string;
}

export const SOCIAL_INFOS: SocialInfos = {
  fullname: 'Hamza Zeghari',
  user: 'hzeghari',
  email: 'zeghari.hamzaa@gmail.com',
  phone: '+212 696 797 343',
};

export const EXPERIENCES: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'IZI Safety',
    location: 'Casablanca',
    period: 'Jun 2023 - Present',
    description: [
      'Build and ship features on IZI Safety, a contractor safety and compliance platform, from the React and TypeScript interface through Nest.js APIs',
      'Shipped user-management improvements that make administration clearer and everyday work on the platform more efficient',
      'Find and fix platform issues with design and the rest of the team, then test and debug the APIs those screens depend on',
      'Document system performance and the changes in progress so the team can pick the work up without a long handoff',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Ant Design',
      'Redux',
      'React Query',
      'Nest.js',
      'Node.js',
      'Express.js',
      'TypeORM',
      'MongoDB',
      'SQL',
      'Docker',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Casablanca',
    period: 'Jun 2020 - May 2023',
    description: [
      'Took client sites and back offices from analysis and design through deployment, and maintained them after launch',
      'Built Marscan for a food and feed importer: React on the front end, Node.js and Express on the back end, MongoDB for the data, and hosting on a VPS',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Applite',
    location: 'Casablanca',
    period: 'Sep 2019 - Jun 2020',
    description: [
      'Built the client-accounts module for an internal back office: React on the front end, Node.js and Express on the back end, and Socket.IO so account updates showed up live',
      'Maintained La Livraison (lalivraison.ma), an online order-taking site, across its Laravel back end and jQuery front end',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'PHP',
      'Laravel',
      'jQuery',
      'MySQL',
    ],
    link: 'https://lalivraison.ma',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Professional Bachelor in Application Design and Development Engineering',
    institution: 'FST SETTAT',
    location: 'Casablanca',
    period: '2018 - 2019',
  },
  {
    degree: 'Diploma Technician Specialized in IT Development',
    institution: 'IFIAG Casablanca',
    location: 'Casablanca',
    period: '2016 - 2018',
  },
  {
    degree: 'High School Degree in Physics and Chemistry',
    institution: 'El Joulane',
    location: 'Mohammedia',
    period: '2014 - 2015',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Spring Boot - RestFul API',
    issuer: 'Bright Coding',
    year: '2023',
    id: 'In Progress',
  },
  {
    name: 'GIT & GITHUB',
    issuer: 'Bright Coding',
    year: '2021',
    id: '313A65CA',
  },
  {
    name: 'MTA: Using JavaScript',
    issuer: 'Microsoft',
    year: '2021',
  },
  {
    name: 'CCNA: Routing & Switching',
    issuer: 'Cisco',
    year: '2018',
  },
];
