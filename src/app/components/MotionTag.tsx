"use client";

import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

type MotionTags = keyof typeof motion;

interface TProps extends HTMLMotionProps<any> {
    tag: MotionTags;
    children: React.ReactNode;
    variants: any;
    initial: any;
    animate: any;
    className?: string;
    once?: boolean;
    transition?: any;
}

export default function MotionTag({
    tag,
    children,
    variants,
    initial,
    animate,
    className,
    once = true,
    transition = { duration: 0.3 },
    ...props
}: TProps) {
    const ref = useRef(null);
    const isMobile = useIsMobile();
    const isInView = useInView(ref, {
        once,
        margin: "-150px",
    });

    // If on mobile, render without animation
    if (isMobile) {
        const Component = tag as keyof JSX.IntrinsicElements;
        return <Component className={className} {...props}>{children}</Component>;
    }

    const MotionComponent = motion[tag];

    return (
        <MotionComponent
            ref={ref}
            variants={variants}
            initial={initial}
            animate={isInView ? animate : initial}
            transition={transition}
            className={className}
            viewport={{ once }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}
