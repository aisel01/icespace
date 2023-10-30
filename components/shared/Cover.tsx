import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Cover() {
    return (
        <article className="grid h-screen lg:grid-cols-2">
            <section className="cover-column lg:bg-black">
                <Image
                    alt="r"
                    src="/assets/melted-logo.png"
                    width={560}
                    height={0}
                />
            </section>
            <section className="cover-column">
                <div className="flex max-w-[400px] flex-col gap-10">
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
            </section>
        </article>
    );
}
