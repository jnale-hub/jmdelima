"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { slideInFromLeft } from "../utils/motion";
import MotionDiv from "./MotionDiv";

type TProps = {
    taglines: string[];
    className?: string;
};

export default function DynamicTagline({ taglines, className }: TProps) {
    const taglineRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (taglineRef.current) {
            const typed = new Typed(taglineRef.current, {
                strings: taglines,
                typeSpeed: 4,
                backSpeed: 2,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, [taglineRef]);

    return (
        <MotionDiv
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            animate="visible"
            className="w-full flex justify-center lg:justify-start"
        >
            <div className={className}>
                <span ref={taglineRef} />
            </div>
        </MotionDiv>
    );
}
