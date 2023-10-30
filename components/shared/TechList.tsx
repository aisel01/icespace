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
            <ul className="grid grid-cols-2">
                {list.map(tech => {
                    return (
                        <li
                            className="before:mr-2 before:content-['⏵']"
                            key={tech.id}
                        >
                            {tech.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}