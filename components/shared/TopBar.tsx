import Link from 'next/link';
import { mainNavigation } from '@/constants';
import { Button } from '@/components/ui/button';
import ThemeToggler from '@/components/shared/ThemeToggler';

export function TopBar() {
    return (
        <div className="relative flex w-full justify-center pt-8">
            <nav>
                <ul className="flex justify-between md:gap-8">
                    {mainNavigation.map(link => {
                        return (
                            <li
                                key={link.title}
                            >
                                <Button asChild variant="link">
                                    <Link
                                        href={link.href}
                                        className="p-2"
                                    >
                                        {link.title}
                                    </Link>
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
            <ThemeToggler className="md:absolute md:right-0 md:-mr-[40px] md:p-2" />
        </div>
    );
}