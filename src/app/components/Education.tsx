import React from 'react';
import MotionTag from './MotionTag';
import { slideInFromRight } from '../utils/motion';
import SectionLabel from './SectionLabel';
import { ResumeCard } from './ResumeCard';
import { DATA } from '@/data/resume';

const Education = () => {
  return (
    <MotionTag
      tag="div"
      variants={slideInFromRight(1.2)}
      initial="hidden"
      animate="visible"
    >
      <section
        id="education"
        className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
      >
        <SectionLabel label="EDUCATION" />
        <div className="w-full">
          {DATA.education.map((education, index) => (
            <ResumeCard key={index} {...education} />
          ))}
        </div>
      </section>
    </MotionTag>
  );
};

export default Education;
