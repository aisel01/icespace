
import { StickyHeader } from '@/components/shared/StickyHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { contacts } from '@/constants';

export function Contact() {
    return (
        <article className="screen flex flex-col items-center">
            <StickyHeader>
                Get In Touch
            </StickyHeader>
            <div className="mt-6 flex flex-col justify-center gap-6 text-center text-body">
                <p className="text-title">
                    Let&apos;s turn ideas into reality.<br/>
                    Reach out and let&apos;s build something amazing together.
                </p>
                <ul className="flex justify-center gap-4">
                    <li>
                        <Button variant="link" asChild>
                            <Link
                                href={contacts.linkedin}
                                about='_blank'
                            >
                                LinkedIn
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="link" asChild>
                            <Link
                                href={contacts.telegram}
                                about='_blank'
                            >
                                Telegram
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="link" asChild>
                            <Link
                                href={`mailto:${contacts.mail}`}
                                about='_blank'
                            >
                                Email
                            </Link>
                        </Button>
                    </li>
                </ul>
                <p>
                    Or drop a line in the form
                </p>
                <ContactForm />
            </div>
        </article>
    );
}
