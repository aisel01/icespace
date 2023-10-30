import Link from 'next/link';
import { socialLinks } from '@/constants';

export function Social() {
    return (
        <ul className="social-nav">
            {socialLinks.map(link => {
                return (
                    <li
                        key={link.title}
                        className="social-link"
                    >
                        <Link
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            title={link.title}
                        >
                            <link.icon size={22} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
