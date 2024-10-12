import Image from "next/image";
import Link from "next/link";
import ProjectTechStack from "./ProjectTechStack";

type TProps = {
    title: string;
    description: string;
    logo: string;
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
    link: string;
};

export default function ProjectCard({
    title,
    description,
    logo,
    technologies,
    link,
}: TProps) {
    return (
        <Link href={link} target="_blank" className="hover:scale-105 hover:bg-[rgb(255,255,255,0.05)] rounded-lg transition-all duration-300 hover:p-4">
            <div className="flex items-center gap-2">
                <Image src={logo} alt={title} width={32} height={32} />
                <h2 className="text-slate-100 text-sm font-bold">{title}</h2>
            </div>
            <p className="text-slate-350 text-xs mt-2 lg:text-sm lg:mt-4">
                {description}
            </p>
            <ProjectTechStack technologies={technologies} />
        </Link>
    );
}
