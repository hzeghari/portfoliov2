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
      'Engaging in the development and enhancement of various features within the IZI Safety platform, contributing to overall system functionality and user experience',
      'Collaborating with cross-functional teams to identify and resolve issues, ensuring smooth operation and performance of the platform',
      'Implementing new features and improvements to enhance user management and system efficiency',
      'Conducting thorough testing and debugging of APIs to ensure seamless integration and functionality',
      'Participating in daily stand-up meetings, retrospective meetings, planning sessions, and grooming activities to align with team goals and enhance collaboration',
      'Preparing technical documentation and reports on system performance and ongoing improvements to facilitate knowledge sharing within the team',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Ant Design',
      'Redux',
      'React Query',
      'Nest.js',
      'TypeORM',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SQL',
      'Git',
      'Docker',
      'Postman',
      'Figma',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Casablanca',
    period: 'Jun 2020 - May 2023',
    description: [
      'Developed and maintained back-office and web applications, focusing on optimizing user interfaces and enhancing back-end functionality',
      'Managed projects from initial analysis and design to final deployment',
      'Marscan: Developed a comprehensive web application for a company specializing in food and feed product importation, utilizing React.js for front-end development and Node.js for back-end functionality, deployed on a VPS',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'VPS'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Applite',
    location: 'Casablanca',
    period: 'Sep 2019 - Jun 2020',
    description: [
      'Project 1: Developed Client Accounts Management Module for Back-office System using React, JavaScript, Node.js, Express.js and Socket.IO',
      'Project 2: Maintained Web Application for Online Order Taking using PHP, Laravel, HTML/CSS/JS, jQuery and MySQL',
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
