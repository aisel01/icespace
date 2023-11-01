import { projects } from '@/constants';
import { ProjectCard } from '../shared/ProjectCard';

export function Projects() {
    return (
        <article className="screen flex flex-col gap-14 max-lg:gap-10" id="projects">
            <h1 className="heading">Some Projects</h1>
            <div className="mx-auto mb-20 flex max-w-5xl flex-col gap-6 md:gap-24">
                {projects.map((project, i) => {
                    return (
                        <ProjectCard
                            reverse={i % 2 === 1}
                            key={`${project.url}-${i}`}
                            url={project.url}
                            image={project.image}
                            source={project.source}
                            title={project.title}
                            description={project.description}
                            techs={project.techs}
                        />
                    );
                })}
            </div>
        </article>
    );
}