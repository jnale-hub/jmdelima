'use client'

import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";

export default function HeroTitle() {
    return (
        <motion.h1
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-5xl sm:text-6xl font-bold text-center lg:text-start mb-4"
    >
        Providing
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            {" "}
            the best{" "}
        </span>
        project experience
    </motion.h1>
    );
}
