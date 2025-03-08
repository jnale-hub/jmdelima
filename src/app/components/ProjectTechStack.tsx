type TProps = {
  technologies: {
    name: string;
  }[];
};

export default function ProjectTechStack({ technologies }: TProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology, index) => (
        <div
          key={index}
          className="flex items-center gap-1 p-1 px-2 bg-slate-600/50 rounded-sm"
        >
          <span className="text-xs text-slate-100">{technology.name}</span>
        </div>
      ))}
    </div>
  );
}
