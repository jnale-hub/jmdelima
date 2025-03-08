'use client';

import Link from 'next/link';
import { slideInFromLeft, slideInFromTop } from '../utils/motion';
import MotionTag from './MotionTag';
import { DATA } from '@/data/resume';

type TProps = {
  isSticky?: boolean;
  noAnimate?: boolean;
};

export default function SocialIcons({ isSticky, noAnimate }: TProps) {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia('(max-width: 1024px)').matches;
  }
  return (
    <MotionTag
      tag="div"
      variants={isMobile ? slideInFromTop(1) : slideInFromLeft(1)}
      initial={noAnimate ? 'visible' : 'hidden'}
      animate="visible"
      className={`w-full lg:pt-0 lg:pl-1 ${!isSticky ? 'lg:hidden py-4' : 'pt-12'} ${noAnimate && '!flex !lg:flex justify-center p-2'}`}
    >
      <ul className="flex justify-center lg:justify-start gap-4">
        {DATA.contact.socials.map((link) => (
          <li key={link.url}>
            <Link
              className="text-2xl hover:text-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer"
              href={link.url}
              target="_blank"
              title={link.title}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </MotionTag>
  );
}
