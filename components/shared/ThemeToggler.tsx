'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { AlignLeft, MoonStar, Sun } from 'lucide-react';
import { ThemeValue } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ThemeToggler({ className }: { className: string }) {
    const { setTheme, theme } = useTheme();

    const handleClick = () => {
        setTheme(theme === ThemeValue.dark ? ThemeValue.light : ThemeValue.dark);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                    <Button variant="secondary"  size="icon">
                        <AlignLeft />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleClick}>
                        Change appearance
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button
                variant="outline"
                size="icon"
                className={cn(className, 'max-md:hidden')}
                onClick={handleClick}
            >
                <Sun size={22} strokeWidth={1.5} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonStar size={22} strokeWidth={1.5} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    );
}
