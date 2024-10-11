"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

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
        <div className={className}>
            <span ref={taglineRef} />
        </div>
    );
}
