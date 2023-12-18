import { TechList } from '@/components/shared/TechList';
import { StickyHeader } from '@/components/shared/StickyHeader';

export function About() {
    return (
        <article
            className="screen flex flex-col gap-10"
            id="about"
        >
            <StickyHeader>
                About me
            </StickyHeader>
            <div className="mx-auto flex max-w-xl flex-col gap-4 text-left text-body">
                <p>
                    Hey there, I&apos;m Aicel — call me Ice if you&apos;re feeling cool.
                </p>
                <p>
                    I&apos;m Frontend Engineer and Web3 Enthusiast.
                </p>
                <p>
                    Originally from Ukraine, but for the past couple of years, I&apos;ve been exploring Istanbul.
                </p>
                <p>
                    Over the last 5 years, I&apos;ve built software for both big corporations and startups.
                    My main focus is crafting experiences that are engaging, accessible, and user-centric.
                    I&apos;am all in on automation and making development processes run smoothly.
                </p>
                <p>
                    What drives me? I enjoy collaboration and teamwork to deliver solutions that improve product.
                </p>
                <p>
                    Here are a few technologies I&apos;ve been working with recently:
                </p>
                <TechList />
            </div>
        </article>
    );
}
