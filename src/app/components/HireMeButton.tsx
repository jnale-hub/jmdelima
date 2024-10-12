"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "../config";
import { slideInFromLeft } from "../utils/motion";
import MotionDiv from "./MotionDiv";

const gradients = [
    "radial-gradient(transparent, transparent, #A07CFE, #FE8FB5, #FFBE7B, transparent, transparent)",
    "radial-gradient(transparent, transparent, #FE8FB5, #FFBE7B, #A07CFE, transparent, transparent)",
    "radial-gradient(transparent, transparent, #FFBE7B, #A07CFE, #FE8FB5, transparent, transparent)",
];

const email = siteConfig.socialLinks.find((link) =>
    link.url.includes("mailto")
)?.url;

export default function HireMeButton() {
    return (
        <MotionDiv
            variants={slideInFromLeft(1)}
            initial="hidden"
            animate="visible"
        >
            <Link
                href={email || ""}
                className="lg:mt-12 lg:w-full flex justify-center lg:justify-start"
            >
                <div className="relative w-32 h-10 overflow-hidden p-[1px] rounded-sm">
                    <motion.div
                        animate={{
                            background: gradients,
                            rotate: [0, 360],
                        }}
                        transition={{
                            background: {
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            rotate: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                        className="flex justify-center items-center absolute inset-0 w-full h-full blur-sm"
                    ></motion.div>
                    <button
                        className="text-white text-[11px] border border-[rgba(255,255,255,0.3)] font-bold tracking-widest bg-background
             px-4 py-2 rounded-md w-full h-full relative z-10"
                    >
                        HIRE ME
                    </button>
                </div>
            </Link>
        </MotionDiv>
    );
}
