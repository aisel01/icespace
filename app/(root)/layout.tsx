import React from 'react';

import { Toaster } from '@/components/ui/toaster';
import { retro_basic, retro_grave } from '../fonts';
import '../globals.css';

export const metadata = {
    title: 'Ice Space',
    description: 'Web development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${retro_basic.variable} ${retro_grave.variable} font-retro-basic text-body`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
