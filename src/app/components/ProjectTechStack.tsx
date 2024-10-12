type TProps = {
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
}

export default function ProjectTechStack({ technologies }: TProps) {
    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((technology, index) => (
                <div key={index} className="flex items-center gap-1 p-1 bg-[rgb(0,0,0,0.3)] rounded-md">
                    {technology.icon}
                    <span className="text-xs text-slate-100">{technology.name}</span>
                </div>
            ))}
        </div>
    )
}
