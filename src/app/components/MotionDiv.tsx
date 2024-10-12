'use client'

import { motion } from "framer-motion";

type TProps = {
    children: React.ReactNode;
    variants: any;
    initial: any;
    animate: any;
    className?: string;
}

export default function MotionDiv({ children, variants, initial, animate, className }: TProps) {
    return <motion.div variants={variants} initial={initial} animate={animate} className={className}>{children}</motion.div>;
}

