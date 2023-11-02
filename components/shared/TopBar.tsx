import { mainNavigation } from '@/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function TopBar() {
    return (
        <nav className="pt-8">
            <ul className="flex gap-8">
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
    );
}