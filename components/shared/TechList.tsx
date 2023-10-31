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
        <div>
            <ul className="grid grid-cols-2 gap-1">
                {list.map(tech => {
                    return (
                        <li
                            key={tech.id}
                        >
                            <Badge variant="secondary" className="shadow-sm rounded-md">
                                {tech.name}
                            </Badge>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}