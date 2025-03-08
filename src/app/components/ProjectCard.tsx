import Image from 'next/image';
import Link from 'next/link';
import ProjectTechStack from './ProjectTechStack';
import { FaGithub, FaLink } from 'react-icons/fa';

type TProps = {
  projectKey: number;
  title: string;
  description: string;
  logo: string;
  repoLink: string;
  technologies: {
    icon: React.ReactNode;
    name: string;
  }[];
  link?: string;
  image?: string;
};

export default function ProjectCard({
  projectKey,
  title,
  description,
  logo,
  technologies,
  link,
  repoLink,
  image,
}: TProps) {
  const projectLink = link || repoLink;

  return (
    <div
      className="p-4 rounded-xl transition-all duration-300 group bg-slate-900/80 backdrop-blur-lg w-full sticky grid gap-4 md:grid-cols-2 lg:grid-cols-1"
      style={{
        top: `calc(10rem + ${projectKey * 64}px) `,
      }}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center gap-2 -translate-x-1 lg:translate-x-0">
          <Link
            href={projectLink}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Image src={logo} alt={title} width={32} height={32} />
            <h2 className="text-slate-100 text-sm font-bold group-hover:text-slate-200 transition-color duration-300">
              {title}
            </h2>
          </Link>
          <div className="flex items-center">
            {link && (
              <Link
                href={link}
                target="_blank"
                className="text-slate-350 !text-[11px] lg:text-sm lg:px-2 block hover:text-pink-500 transition-all duration-300"
                title="Visit project link"
              >
                <FaLink
                  size={16}
                  className="inline-block mr-2 text-slate-300 hover:text-purple-500 transition-colors"
                />
              </Link>
            )}
            {repoLink && (
              <Link
                href={repoLink}
                target="_blank"
                className="text-slate-350 !text-[11px] lg:text-sm lg:px-2 block hover:text-pink-500 transition-all duration-300"
                title="Visit project link"
              >
                <FaGithub
                  size={16}
                  className="inline-block mr-2 text-slate-300 hover:text-purple-500 transition-colors"
                />
              </Link>
            )}
          </div>
        </div>
        <p className="text-slate-350 text-xs lg:text-sm lg:px-2 !mb-0">
          {description}
        </p>
        <ProjectTechStack technologies={technologies} />
      </div>
      {image && (
        <Link href={projectLink} target="_blank">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="aspect-video w-full object-cover rounded-lg"
          />
        </Link>
      )}
    </div>
  );
}
