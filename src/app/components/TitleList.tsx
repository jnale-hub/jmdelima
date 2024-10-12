'use client'

import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";

export default function TitleList({ titles }: { titles: string[] }) {
    // Define arrays of colors for text and background
    const textColors = ["text-orange-500", "text-pink-500", "text-purple-500"];
    const bgColors = ["bg-orange-950", "bg-pink-950", "bg-purple-950"];

    return (
        <ul className="flex flex-wrap gap-2 w-full justify-center lg:justify-start mt-6">
            {titles.map((title, index) => (
                <motion.li
                    key={title}
                    variants={slideInFromLeft(0.8 + index * 0.2)}
                    initial="hidden"
                    animate="visible"
                    className={`text-xs font-bold ${textColors[index % textColors.length]} ${bgColors[index % bgColors.length]} p-1 px-2 rounded-full flex items-center`}
                >
                    <div className="w-2 h-2 bg-green-700 rounded-full mr-1"></div>
                    {title}
                </motion.li>
            ))}
        </ul>
    );
}
