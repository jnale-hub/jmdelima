import SectionLabel from './SectionLabel';
import MotionTag from './MotionTag';
import { slideInFromRight } from '../utils/motion';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <MotionTag
      tag="article"
      variants={slideInFromRight(0.9)}
      initial="hidden"
      animate="visible"
      className="mb-8 lg:mb-12 text-pretty"
      id="about-me"
    >
      <SectionLabel label="ABOUT ME" />
      <p>
        During the pandemic, I took{' '}
        <Link href="#education">
          <strong>free computer science courses from Harvard University</strong>
        </Link>{' '}
        and taught myself to build{' '}
        <Link href="#projects">
          <strong>full-stack web applications</strong>
        </Link>{' '}
        and{' '}
        <Link href="#projects">
          <strong>AI projects</strong>
        </Link>{' '}
        while pursuing my Engineering degree. Since then, I’ve continued
        building projects and landed a full-time job as a Software Engineer.
      </p>
      <p>
        When I’m not coding, I enjoy{' '}
        <Link href="/blog/my-beloved-strawberry-patch">
          <strong>gardening</strong>
        </Link>
        , especially tending to my strawberry patch 🪴🍓.
      </p>
    </MotionTag>
  );
}
