import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollTooltip } from '@/components/shared/ScrollTooltip';

export function Cover() {
    return (
        <article className="screen flex flex-col  items-center">
            <div className="flex  flex-1 flex-col items-center justify-center">
                <Image
                    alt="r"
                    src="/assets/melted-logo.png"
                    width={600}
                    height={0}
                />
                <div className="mt-32 flex max-w-[400px] flex-col gap-10">
                    <p className="text-center text-slogan-small md:text-slogan">
                        KEEP YOUR MIND{' '}
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
            </div>
            <ScrollTooltip />
        </article>
    );
}
