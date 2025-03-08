'use client';

import { DATA } from '@/data/resume';
import { slideInFromRight } from '../utils/motion';
import MainTechnology from './MainTechnology';
import MotionTag from './MotionTag';
import SectionLabel from './SectionLabel';

export default function Technologies() {
  const technologies = DATA.technologies;

  return (
    <MotionTag
      tag="section"
      variants={slideInFromRight(1.4)}
      initial="hidden"
      animate="visible"
      id="technologies"
      className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
    >
      <SectionLabel label="TECHNOLOGIES" />
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {technologies.map((technology, index) => (
          <MainTechnology key={index} technology={technology} />
        ))}
      </div>
    </MotionTag>
  );
}
