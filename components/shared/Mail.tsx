import { contacts } from '@/constants';
import Link from 'next/link';

export function Mail() {
    return (
        <Link href={`mailto:${contacts.mail}`} className="mail">
            aisel.goo@gmail.com
        </Link>
    );
}
