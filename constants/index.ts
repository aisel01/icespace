import { Linkedin, Instagram , Github } from 'lucide-react';

export const contacts = {
    mail: 'aisel.goo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aisel/',
    github: 'https://github.com/aisel01',
    instagram: 'https://instagram.com/aisel.s',
    telegram: 'https://t.me/aisel01',
};

export const socialLinks = [
    {
        icon: Linkedin,
        href: contacts.linkedin,
        title: 'linkedin',
    },
    {
        icon: Github,
        href: contacts.github,
        title: 'github',
    },
    {
        icon: Instagram,
        href: contacts.instagram,
        title: 'instagram',
    },
];

export const mainNavigation = [
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Projects',
        href: '#projects',
    },
    {
        title: 'Contacts',
        href: '#contacts',
    }
];

export const projects = [
    {
        image: '/assets/insights.png',
        title: 'Social media insights',
        description: 'Enhanced insights for the Instagram. Application empowers you to manage multiple instagram accounts from one place. Intuitive tool to discover analytics, make smarter decisions and grow faster.',
        techs: ['NestJs', 'Prisma', 'Postgresql', 'React', 'Vite', 'TailwindCSS', 'Shadcn', 'Recharts'],
        url: 'https://insta-insights.vercel.app/',
        source: 'https://github.com/ice-chain/insights',
    },
    {
        image: '/assets/threads.png',
        title: 'Threads enriched with communities',
        description: 'Clone of Meta\'s Threads application enriched with communities. Project was created in order to learn Next.js 13 with server side rendering and experimental server action feature.',
        techs: ['NextJs', 'MongoDB', 'Clerk', 'React', 'TailwindCSS', 'Shadcn', 'Vercel'],
        url: 'https://threads-aisel.vercel.app',
        source: 'https://github.com/aisel01/threads',
    },
    {
        image: '/assets/personal.png',
        title: 'Personal portfolio website',
        description: 'Showcase of the my projects, skills and expertise. And the first experience in creating my own design.',
        techs: ['NextJs', 'React', 'TailwindCSS', 'Shadcn', 'Vercel'],
        url: 'https://icelab.space',
        source: 'https://github.com/aisel01/icespace',
    },
];

export const GA_MEASUREMENT_ID = 'G-59GSPTYCM2';