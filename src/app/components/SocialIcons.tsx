import Link from "next/link";
import { siteConfig } from "../config";

export default function SocialIcons() {
    return (
        <ul className="flex justify-center lg:justify-start gap-4">
            {siteConfig.socialLinks.map((link) => (
                <li key={link.url}>
                    <Link className="text-2xl hover:text-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer" href={link.url} target="_blank">{link.icon}</Link>
                </li>
            ))}
        </ul>
    );
}
