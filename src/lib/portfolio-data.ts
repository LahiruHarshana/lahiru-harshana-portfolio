export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const portfolioStats: StatItem[] = [
  { value: '3+', label: 'Years of Experience' },
  { value: '12+', label: 'Projects Completed' },
  { value: '5+', label: 'Live Production Apps' },
  { value: '14+', label: 'Technologies Used' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'REST APIs', 'GraphQL', 'Express', 'Authentication', 'Microservices'],
  },
  {
    title: 'Database & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Database Design'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'Google Cloud', 'Linux', 'Nginx'],
  },
  {
    title: 'Mobile & Tools',
    skills: ['React Native', 'Flutter', 'Git', 'GitHub', 'Agile/Scrum', 'Figma'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Full-Stack Software Engineer',
    company: 'Freelance / Independent',
    period: '2023 — Present',
    location: 'Weligama, Sri Lanka',
    type: 'Remote',
    highlights: [
      'Design and deliver production web applications for e-commerce, hospitality, and retail clients.',
      'Built and launched live platforms including Best Books, Roots Groceries, and Riverwood Villa.',
      'Own the full stack from UI and API design to deployment, performance, and maintenance.',
    ],
  },
  {
    id: 2,
    role: 'Project Manager',
    company: 'EonTech Global Group',
    period: '2022 — 2023',
    location: 'Sri Lanka',
    type: 'On-site',
    highlights: [
      'Led software projects from requirements gathering through delivery and client handoff.',
      'Coordinated cross-functional teams to ship products on schedule with high quality standards.',
      'Translated business goals into clear technical roadmaps and sprint plans.',
    ],
  },
  {
    id: 3,
    role: 'Project Manager',
    company: 'LammastideIT',
    period: '2021 — 2022',
    location: 'Sri Lanka',
    type: 'Hybrid',
    highlights: [
      'Managed end-to-end software development lifecycles for multiple client engagements.',
      'Organized workflows, timelines, and communication between developers and stakeholders.',
      'Ensured timely delivery of web and mobile solutions across active project pipelines.',
    ],
  },
  {
    id: 4,
    role: 'Software Engineering Intern',
    company: 'Embracetec',
    period: '2020 — 2021',
    location: 'Sri Lanka',
    type: 'On-site',
    highlights: [
      'Contributed to real-world software projects with a focus on problem-solving and clean code.',
      'Gained hands-on experience in full-stack development, debugging, and team collaboration.',
      'Demonstrated strong technical maturity and quickly adapted to production codebases.',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Understand business goals, user needs, and technical constraints before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'Plan scalable system design, choose the right stack, and define APIs, data models, and delivery milestones.',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'Build responsive interfaces and robust backends with clean, maintainable, and well-tested code.',
  },
  {
    step: '04',
    title: 'Deploy & Support',
    description:
      'Ship to production with CI/CD, monitor performance, and iterate based on feedback and analytics.',
  },
];

export const heroHighlights: string[] = [
  'Full-Stack Web Development',
  'API Design & Integration',
  'Cloud & DevOps',
];

export const aboutExtendedContent = {
  intro:
    'I am a Software Engineer focused on building reliable, scalable digital products that solve real business problems. I work across the entire development lifecycle — from planning and architecture to deployment and long-term support.',
  focus:
    'My core strengths include React and Next.js on the frontend, Node.js and TypeScript on the backend, and cloud-native deployments with Docker and AWS. I care about performance, security, and code quality in every project I deliver.',
  approach:
    'Whether you need a new product built from scratch, an existing system modernized, or APIs integrated into your stack, I bring structured communication, clean engineering practices, and a results-driven mindset to every engagement.',
};

export interface PortfolioProject {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  href?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    src: '/work/project-bestbooks.jpg',
    alt: "Best Books — Sri Lanka's premier online bookstore",
    title: 'Best Books',
    category: 'Web Applications',
    description: 'Full-featured e-commerce bookstore with bilingual search, bestsellers, and streamlined checkout.',
    href: 'https://www.bestbooks.lk',
  },
  {
    id: 2,
    src: '/work/project-ceylon-cinnamon.jpg',
    alt: 'Ceylon Cinnamon Company brand website',
    title: 'Ceylon Cinnamon Company',
    category: 'Web Applications',
    description: 'Export-focused brand site connecting estate producers with wholesale and retail buyers worldwide.',
    href: 'https://www.ceyloncinnamoncompany.com',
  },
  {
    id: 3,
    src: '/work/project-roots-groceries.jpg',
    alt: 'Roots Groceries e-commerce platform',
    title: 'Roots Groceries',
    category: 'Web Applications',
    description: 'Online grocery store for Sri Lankan spices, tea, and pantry staples with catalog management.',
    href: 'https://www.rootsgroceries.com',
  },
  {
    id: 4,
    src: '/work/project-gh-tours.jpg',
    alt: 'GH Tours and Bike Rentals booking site',
    title: 'GH Tours & Bike Rentals',
    category: 'Web Applications',
    description: 'Tour and vehicle rental platform with booking flows for airport transfers and bike hire.',
    href: 'https://www.ghtoursandbikerentals.com',
  },
  {
    id: 5,
    src: '/work/project-riverwood-villa.jpg',
    alt: 'Riverwood Villa Weligama booking site',
    title: 'Riverwood Villa',
    category: 'Web Applications',
    description: 'Hospitality booking website with availability search for a private riverside villa in Weligama.',
    href: 'https://www.riverwoodvillaweligama.com',
  },
  {
    id: 6,
    src: '/work/project-1.png',
    alt: 'E-Commerce Web App',
    title: 'E-Commerce Web App',
    category: 'Web Applications',
    description: 'Scalable online store with product catalog, cart, and secure payment integration.',
  },
  {
    id: 7,
    src: '/work/project-2.png',
    alt: 'Mobile App Interface',
    title: 'Mobile App Interface',
    category: 'Mobile Apps',
    description: 'Cross-platform mobile UI with intuitive navigation and responsive component design.',
  },
  {
    id: 8,
    src: '/work/project-3.png',
    alt: 'Backend Dashboard',
    title: 'Backend Dashboard',
    category: 'Backend Systems',
    description: 'Admin dashboard for monitoring APIs, users, and system metrics in real time.',
  },
  {
    id: 9,
    src: '/work/project-4.png',
    alt: 'Web Platform',
    title: 'Web Platform',
    category: 'Web Applications',
    description: 'Multi-module web platform with role-based access and modular feature architecture.',
  },
  {
    id: 10,
    src: '/work/project-5.jpg',
    alt: 'Mobile Application',
    title: 'Mobile Application',
    category: 'Mobile Apps',
    description: 'Native-feel mobile app with offline support and push notification integration.',
  },
  {
    id: 11,
    src: '/work/project-6.jpg',
    alt: 'EZ Cart Login',
    title: 'EZ Cart',
    category: 'Mobile Apps',
    description: 'Mobile shopping experience with authentication, cart management, and order tracking.',
  },
  {
    id: 12,
    src: '/work/project-7.png',
    alt: 'Elysian Travels',
    title: 'Elysian Travels',
    category: 'Web Applications',
    description: 'Travel agency website showcasing packages, destinations, and inquiry workflows.',
  },
];

export const portfolioFilterCategories = ['All', 'Web Applications', 'Mobile Apps', 'Backend Systems'] as const;
