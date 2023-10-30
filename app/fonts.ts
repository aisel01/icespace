import localFont from 'next/font/local';
import { Bungee_Outline } from 'next/font/google';


export const retro_grave = localFont({
    src: '../public/fonts/575ec812ed38a45d3df2dd50.woff',
    variable: '--font-retro-grave',
});

export const retro_basic = localFont({
    src: '../public/fonts/5761228a506465a17e0428b9.woff',
    variable: '--font-retro-basic',
});

export const bungee_outline = Bungee_Outline({
    subsets: ['latin'],
    weight: '400'
});
