import { Badge } from '../ui/badge';

const list = [
    { id: 'ts', name: 'TypeScript' },
    { id: 'js', name: 'JavaScript(ES6+)' },
    { id: 'react', name: 'React' },
    { id: 'redux', name: 'Redux' },
    { id: 'node', name: 'NodeJs' },
    { id: 'next', name: 'NextJs' },
];

export function TechList() {
    return (
        <ul className="mt-2 grid grid-cols-2 gap-2">
            {list.map(tech => {
                return (
                    <li
                        key={tech.id}
                    >
                        <Badge variant="secondary" className="rounded-md text-control">
                            {tech.name}
                        </Badge>
                    </li>
                );
            })}
        </ul>
    );
}