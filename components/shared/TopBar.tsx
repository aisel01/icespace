import { mainNavigation } from '@/constants';
import Link from 'next/link';

export function TopBar() {
    return (
        <nav>
            <ul className="flex gap-4">
                {mainNavigation.map(link => {
                    return (
                        <li
                            key={link.title}
                        >
                            <Link
                                href={link.href}
                                className="p-2 hover:text-rose-900"
                            >
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}