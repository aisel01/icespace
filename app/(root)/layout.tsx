import React from 'react';

import '../globals.css';
import { retro_basic, retro_grave } from '../fonts';

export const metadata = {
    title: 'Ice Space',
    description: 'Web development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${retro_basic.variable} ${retro_grave.variable} font-retro-basic`}>
                {children}
            </body>
        </html>
    );
}
