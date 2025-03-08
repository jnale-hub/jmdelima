'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ResumeCardProps {
  organization: string;
  name: string;
  logo: string;
  period?: string;
  description?: string;
  credentialUrl?: string;
}

export const ResumeCard = ({
  organization,
  name,
  logo,
  period,
  description,
  credentialUrl,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="group w-full mb-4">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
      >
        <Image src={logo} alt={organization} width={32} height={32} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-slate-100 text-sm font-bold">{name}</h2>
            <ChevronRightIcon
              className={cn(
                'size-4 transform opacity-80 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                isExpanded ? 'rotate-90' : 'rotate-0'
              )}
            />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <h3 className="text-slate-200 text-sm font-medium">
              {organization}
            </h3>
            <p className="text-slate-400 text-[11px] lg:text-xs leading-none">
              {period}
            </p>
          </div>
        </div>
      </div>
      {(description || credentialUrl) && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? 'auto' : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-4 mt-2 text-xs sm:text-sm ml-8 list-disc text-pretty"
        >
          {description &&
            description.split('\n').map((item, index) => (
              <li key={index} className="pl-2">
                {item}
              </li>
            ))}

          {credentialUrl && (
            <Link
              href={credentialUrl}
              className="pl-2 mt-2 text-slate-100 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show credential
              <MdOutlineArrowOutward className="text-xs inline ml-1 align-middle" />
            </Link>
          )}
        </motion.ul>
      )}
    </div>
  );
};

export default ResumeCard;
