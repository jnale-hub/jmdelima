'use client';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft } from '../utils/motion';
import { DATA } from '@/data/resume';

type TProps = {
  isSticky?: boolean;
  noAnimate?: boolean;
};

export default function Footer({ isSticky, noAnimate }: TProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={!isSticky ? slideInFromTop(1) : slideInFromLeft(1)}
      initial={noAnimate ? 'visible' : 'hidden'}
      animate="visible"
      className={`text-center lg:text-left text-slate-350 text-[9px] w-full mt-8 ${
        noAnimate && '!block lg:!block p-2 lg:!text-center'
      } ${isSticky ? 'hidden lg:block' : 'lg:hidden'}`}
    >
      <p className="mb-0 text-[8px]">
        &copy; {currentYear} {DATA.title}. All rights reserved.
      </p>
    </motion.footer>
  );
}
