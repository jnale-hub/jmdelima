import { siteConfig } from "@/app/config";
import SectionLabel from "./SectionLabel";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
        >
            <SectionLabel label="EXPERIENCES" />
            <div className="w-full flex flex-wrap">
                {siteConfig.sections.experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </section>
    );
}
