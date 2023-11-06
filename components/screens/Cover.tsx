import Image from 'next/image';
import { ScrollTooltip } from '@/components/shared/ScrollTooltip';
import { TopBar } from '../shared/TopBar';

export function Cover() {
    return (
        <article className="cover screen flex flex-col items-center pb-0">
            <TopBar />
            <div className="flex flex-1 flex-col items-center justify-center">
                <Image
                    alt="logo"
                    src="/assets/melted-logo.png"
                    width={600}
                    height={0}
                />
                <div className="mt-20">
                    <p className="text-center font-retro-basic text-slogan-small md:text-slogan">
                        KEEP YOUR MIND{' '}
                        <span className="cool" title="cool">
                            COOL
                        </span>
                    </p>
                </div>
            </div>
            <ScrollTooltip />
        </article>
    );
}
