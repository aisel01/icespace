import { Linkedin, Instagram , Github } from 'lucide-react';

export const contacts = {
    mail: 'aisel.goo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aisel/',
    github: 'https://github.com/aisel01',
    instagram: 'https://instagram.com/icelab.space',
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
        image: '/assets/project-1.png',
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque veritatis libero doloribus aut, praesentium distinctio minima sed, consequuntur officiis odit consectetur dolore sunt perferendis asperiores ratione doloremque, quam unde nihil!',
        techs: ['NextJs', 'React', 'TailwindCSS', 'Shadcn', 'Vercel'],
        url: '/',
        source: '/',
    },
    {
        image: '/assets/project-2.png',
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque veritatis libero doloribus aut, praesentium distinctio minima sed, consequuntur officiis odit consectetur dolore sunt perferendis asperiores ratione doloremque, quam unde nihil!',
        techs: ['NextJs', 'React', 'TailwindCSS', 'Shadcn', 'Vercel'],
        url: '/',
        source: '/',
    },
    {
        image: '/assets/project-1.png',
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque veritatis libero doloribus aut, praesentium distinctio minima sed, consequuntur officiis odit consectetur dolore sunt perferendis asperiores ratione doloremque, quam unde nihil!',
        techs: ['NextJs', 'React', 'TailwindCSS', 'Shadcn', 'Vercel'],
        url: '/',
        source: '/',
    },
];

export const GA_MEASUREMENT_ID = 'G-59GSPTYCM2';