import SectionLabel from './SectionLabel';
import ExperienceCard from './ExperienceCard';
import MotionTag from './MotionTag';
import { slideInFromRight } from '../utils/motion';
import { DATA } from '@/data/resume';

export default function Experiences() {
  return (
    <MotionTag
      tag="article"
      variants={slideInFromRight(1.2)}
      initial="hidden"
      animate="visible"
      className="mb-8 lg:mb-12"
      id="experiences"
    >
      <SectionLabel label="EXPERIENCES" className="" />
      {DATA.experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </MotionTag>
  );
}
