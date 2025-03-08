import SectionLabel from './SectionLabel';
import MotionTag from './MotionTag';
import { slideInFromRight } from '../utils/motion';
import ProjectCard from './ProjectCard';
import { DATA } from '@/data/resume';

export default function Projects() {
  return (
    <MotionTag
      tag="article"
      variants={slideInFromRight(1.4)}
      initial="hidden"
      animate="visible"
      id="projects"
      className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
    >
      <SectionLabel label="PROJECTS" className="sticky top-32" />
      <div className="w-full flex flex-wrap gap-4">
        {DATA.projects.map((project, index) => (
          <ProjectCard key={index} projectKey={index} {...project} />
        ))}
      </div>
    </MotionTag>
  );
}
