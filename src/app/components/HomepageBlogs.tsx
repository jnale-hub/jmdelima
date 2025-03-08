import MotionTag from './MotionTag';
import { slideInFromRight } from '../utils/motion';
import SectionLabel from './SectionLabel';
import BlogList from './BlogList';
import Link from 'next/link';

export default async function HomepageBlogs() {
  return (
    <MotionTag
      tag="div"
      variants={slideInFromRight(1.2)}
      initial="hidden"
      animate="visible"
    >
      <section
        id="blogs"
        className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
      >
        <Link href="/blog">
          <SectionLabel label="BLOGS" />
        </Link>
        <BlogList />
      </section>
    </MotionTag>
  );
}
