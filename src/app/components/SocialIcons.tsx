import Link from "next/link";
import { siteConfig } from "../config";
import { slideInFromLeft } from "../utils/motion";
import MotionDiv from "./MotionDiv";

export default function SocialIcons() {
    return (
        <MotionDiv
            variants={slideInFromLeft(1)}
            initial="hidden"
            animate="visible"
            className="w-full pt-12 lg:pt-0 lg:pl-1"
        >
            <ul className="flex justify-center lg:justify-start gap-4">
                {siteConfig.socialLinks.map((link) => (
                    <li key={link.url}>
                        <Link
                            className="text-2xl hover:text-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer"
                            href={link.url}
                            target="_blank"
                        >
                            {link.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </MotionDiv>
    );
}
