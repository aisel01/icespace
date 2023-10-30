import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Cover() {
    return (
        <article className="screen flex flex-col items-center justify-center">
            <Image
                alt="r"
                src="/assets/melted-logo.png"
                width={560}
                height={0}
            />
            <div className="mt-32 flex max-w-[400px] flex-col gap-10">
                <p className="text-center text-slogan-small md:text-slogan">
                    KEEP YOUR HEAD{' '}
                    <span className="cool" title="cool">
                        COOL
                    </span>
                </p>
                <Button asChild>
                    <Link
                        href="#about"
                    >
                        About
                    </Link>
                </Button>
            </div>
        </article>
    );
}
