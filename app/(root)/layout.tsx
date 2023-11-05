import React from 'react';

import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { GA_MEASUREMENT_ID } from '@/constants';

import { retro_basic, retro_grave } from '../fonts';
import '../globals.css';

export const metadata = {
    title: 'Ice Space',
    description: 'Web development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></Script>
            <Script  id="google-analytics">
                {`

                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
            </Script>

            <body className={`${retro_basic.variable} ${retro_grave.variable} font-retro-basic text-body`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
