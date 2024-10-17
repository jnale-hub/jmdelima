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
        <Link href={link} target="_blank" className=" lg:hover:bg-[rgb(255,255,255,0.05)] pl-0 lg:pl-2 p-2 rounded-lg transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-2 -translate-x-1 lg:translate-x-0">
                <Image src={logo} alt={title} width={32} height={32} />
                <h2 className="text-slate-100 text-sm font-bold group-hover:text-orange-500 transition-all duration-300">{title}</h2>
            </div>
            <p className="text-slate-350 text-xs lg:text-sm lg:px-2">
                {description}
            </p>
            <ProjectTechStack technologies={technologies} />
        </Link>
    );
}
