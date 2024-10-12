import Link from "next/link";
import { siteConfig } from "../config";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import MotionDiv from "./MotionDiv";

type TProps = {
    isSticky?: boolean;
};

export default function SocialIcons({ isSticky }: TProps) {
    return (
        <MotionDiv
            variants={isSticky ? slideInFromLeft(1) : slideInFromTop(1)}
            initial="hidden"
            animate="visible"
            className={`w-full lg:pt-0 lg:pl-1 ${!isSticky ? 'lg:hidden py-4' : 'pt-12'}`}
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
