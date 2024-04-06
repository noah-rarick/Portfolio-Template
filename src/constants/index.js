import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  snowflake,
  tableau,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  collision,
  collision2,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tableau',
    icon: tableau,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'Snowflake',
    icon: snowflake,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  
];

const experiences = [
  {
    title: 'IT Intern',
    company_name: 'Kent School District',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2022 - Sep 2022',
  },
  {
    title: 'Business Intelligence Analyst',
    company_name: 'Delta Dental of Washington',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jun 2023 - Dec 2023',
  },
  {
    title: 'GIS Intern',
    company_name: 'City of Tacoma',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Current',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Collision Dashboard v2',
    description: 'A dynamic spatial dashboard of Seattle traffic collisions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: collision,
    repo: 'https://github.com/noah-rarick/seattle-collisions-v2',
    demo: 'https://noah-rarick.github.io/seattle-collisions-v2/',
  },
  {
    id: 'project-2',
    name: 'Collision Dashboard v1',
    description:
      'A heatmap analysis of Seattle Collisions from 2004 to 2020.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: collision2,
    repo: 'https://github.com/noah-rarick/seattle-collisions?tab=readme-ov-file',
    demo: 'https://noah-rarick.github.io/seattle-collisions/heatmap.html',
  }
];

export { services, technologies, experiences, projects };
