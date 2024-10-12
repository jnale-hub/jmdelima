"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";

export default function HeroTitle() {
    return (
        <div>
            {/* <motion.h1
                variants={slideInFromLeft(0.5)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-xl text-center lg:text-start"
            >
                Hi, I'm Alvin!
            </motion.h1> */}
            <motion.h1
                variants={slideInFromLeft(0.5)}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-xl md:text-2xl font-medium text-center lg:text-start"
            >
                Hey there, I'm Aurora! 👋
            </motion.h1>
            <motion.h1
                variants={slideInFromLeft(0.6)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-center lg:text-start"
            >
                Delivering
                <span className="gradient-accent">
                    {" "}
                    the best{" "}
                </span>
            </motion.h1>
            <motion.h1
                variants={slideInFromLeft(0.7)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-center lg:text-start mb-2"
            >
                in design and code.
            </motion.h1>
        </div>
    );
}
