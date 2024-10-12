import { siteConfig } from "@/app/config";
import SectionLabel from "./SectionLabel";

export default function AboutMe() {
    return (
        <section id="about-me" className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12">
            <SectionLabel label="ABOUT ME" />
            <div
                className="max-w-[600px]"
                dangerouslySetInnerHTML={{
                    __html: siteConfig.sections.aboutMe,
                }}
            />
        </section>
    );
}
