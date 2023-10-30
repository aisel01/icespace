import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TechList } from './TechList';

export function About() {
    return (
        <article
            className="screen flex flex-col gap-14 max-lg:gap-10"
            id="about"
        >
            <h1 className="heading">About me</h1>
            <div className="mx-auto flex max-w-xl flex-col justify-center gap-4 text-left text-body">
                <p>
                    Hi, I&apos;m Aicel — call me Ice if you&apos;re feeling cool.
                </p>
                <p>
                    Frontend Engineer / Web3 Enthusiast.
                </p>
                <p>
                    Originally from Ukraine, now living in the vibrant city of Istanbul
                </p>
                <p>
                    Over the last 5 years, I&apos;ve built software for both big corporations and startups. <br />
                    My main focus is crafting experiences that are engaging, accessible, and user-centric.
                    I&apos;am passionate about automation and optimizing development processes.
                </p>
                <p>
                    Here are a few technologies I&apos;ve been working with recently:
                </p>
                <TechList />
            </div>
            <Button variant="default" asChild className="mx-auto w-full max-w-xl">
                <Link href="mailto:aisel.goo@gmail.com">
                    Get In Touch
                </Link>
            </Button>
        </article>
    );
}

{/* <p>
   . Let&apos;s not just build software, let&apos;s build experiences that leave a lasting impression
</p> */}