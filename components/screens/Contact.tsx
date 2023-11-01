
import { StickyHeader } from '@/components/shared/StickyHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import Link from 'next/link';
import { contacts } from '@/constants';

export function Contact() {
    return (
        <article className="screen flex min-h-[90vh] flex-col items-center">
            <StickyHeader>
                Get In Touch
            </StickyHeader>
            <div className="mt-32 flex flex-col justify-center gap-10 text-center text-body">
                <p>
                    Let&apos;s turn ideas into reality.<br/>
                    Reach out and let&apos;s build something amazing together.
                </p>
                <ul className="flex justify-center gap-4">
                    <li>
                        <Link
                            href={`mailto:${contacts.mail}`}
                            about='_blank'
                            className="hover:underline"
                        >
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`mailto:${contacts.mail}`}
                            about='_blank'
                            className="hover:underline"
                        >
                            Telegram
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`mailto:${contacts.mail}`}
                            about='_blank'
                            className="hover:underline"
                        >
                            Email
                        </Link>
                    </li>
                </ul>
                <p>
                    Or drop a line in the form below
                </p>
                <ContactForm />
            </div>
        </article>
    );
}
