import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    techs: string[];
    url: string;
    source: string;
    reverse?: boolean;
};

export function ProjectCard(props: ProjectCardProps) {
    const {
        image,
        title,
        description,
        techs,
        url,
        source,
        reverse = false,
    } = props;


    return (
        <div className={cn('relative md:grid md:grid-cols-8 gap-4')}>
            <div className={cn(
                'flex flex-col gap-4 rounded-md py-6',
                'md:col-span-3',
                reverse && 'md:text-right md:items-end'
            )}>
                <h3 className="text-heading3">
                    <Link
                        className="hover:underline"
                        href={url}
                        target="_blank"
                    >
                        {title}
                    </Link>
                </h3>
                <div className="-mx-6 md:hidden">
                    <Image
                        className="object-cover shadow-lg"
                        src={image}
                        alt={title}
                        width={1200}
                        height={0}
                    />
                </div>
                <div className={cn(
                    'md:glass md:px-8 rounded-md md:py-6 text-body min-w-full',
                    reverse ? 'md:-ml-40' : 'md:-mr-40'
                )}>
                    {description}
                </div>
                <ul className={cn('flex gap-2 flex-wrap', reverse && 'md:justify-end')}>
                    {techs.map(tech => {
                        return (
                            <li key={tech}>
                                <Badge
                                    variant="secondary"
                                    className="rounded-md text-control shadow-md"
                                >
                                    {tech}
                                </Badge>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex gap-4 text-control text-opacity-50">
                    <Link
                        href={source}
                        className="text-zinc-500 hover:text-foreground"
                        title="Source code"
                        target="_blank"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href={url}
                        className="text-zinc-500 hover:text-foreground"
                        title="External link"
                        target="_blank"
                    >
                        <ExternalLink size={20} />
                    </Link>
                </div>
            </div>
            <div
                className={cn(
                    'relative -z-10 flex items-center',
                    'md:col-span-5',
                    'max-md:hidden',
                    reverse && 'md:-order-1'
                )}
            >
                <Image
                    className="rounded-md object-cover shadow-lg max-md:h-full"
                    src={image}
                    alt={title}
                    width={1200}
                    height={0}
                />
            </div>
        </div>
    );
}