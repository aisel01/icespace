import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { StickyHeader } from '@/components/shared/StickyHeader';

export function Contact() {
    return (
        <article className="screen flex min-h-[90vh] flex-col items-center">
            <StickyHeader>
                Get In Touch
            </StickyHeader>
            <div className="mt-32  flex max-w-[400px] flex-col justify-center gap-10 text-body">
                <p>
                    Let&apos;s turn ideas into reality — reach out and let&apos;s build something amazing together.
                </p>
                <Button variant="default" asChild className="mx-auto w-full max-w-xl">
                    <Link href="mailto:aisel.goo@gmail.com">
                        Contact me
                    </Link>
                </Button>
            </div>
        </article>
    );
}
