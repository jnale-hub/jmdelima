'use client';

import { slideInFromLeft, slideInFromTop } from '../utils/motion';
import Image from 'next/image';
import MotionTag from './MotionTag';
import { DATA } from '@/data/resume';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';

export default function HeroTitle() {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia('(max-width: 1024px)').matches;
  }

  return (
    <div>
      <MotionTag
        tag="h1"
        variants={slideInFromLeft(0.5)}
        initial={isMobile ? 'visible' : 'hidden'}
        animate="visible"
        className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold max-lg:text-center lg:text-star"
      >
        <AnimatedShinyText className="">{DATA.name}</AnimatedShinyText>
      </MotionTag>
    </div>
  );
}
