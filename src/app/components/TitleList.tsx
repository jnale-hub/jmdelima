'use client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '../utils/motion';

export default function TitleList({ titles }: { titles: readonly string[] }) {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia('(max-width: 1024px)').matches;
  }
  // Define arrays of colors for text and background
  const textColors = ['text-orange-200', 'text-pink-200', 'text-purple-200'];
  const bgColors = ['bg-orange-950/70', 'bg-pink-950/70', 'bg-purple-950/70'];

  return (
    <ul className="flex flex-wrap gap-2 w-full justify-center lg:justify-start mt-6">
      {titles.map((title, index) => (
        <motion.li
          key={title}
          variants={
            isMobile
              ? slideInFromTop(0.8 + index * 0.2)
              : slideInFromLeft(0.8 + index * 0.2)
          }
          initial="hidden"
          animate="visible"
          className={`text-xs font-bold ${textColors[index % textColors.length]} ${bgColors[index % bgColors.length]} p-1 px-2 rounded-full flex items-center backdrop-blur-md`}
        >
          {title}
        </motion.li>
      ))}
    </ul>
  );
}
