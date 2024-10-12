import HeroTitle from "./components/HeroTitle";
import DynamicTagline from "./components/DynamicTagline";
import TitleList from "./components/TitleList";
import MotionDiv from "./components/MotionDiv";
import { slideInFromLeft } from "./utils/motion";
import SocialIcons from "./components/SocialIcons";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import { siteConfig } from "./config";
import TableOfContents from "./components/TableOfContents";

export default function Home() {
    return (
        <main className="w-full min-h-screen px-4 sm:px-20 xl:px-40 2xl:px-80">
            <section className="w-full flex flex-wrap">
                <header className="w-full lg:h-[100dvh] lg:sticky top-0 lg:w-1/2 pt-40 lg:pb-40 flex flex-col lg:justify-between">
                    <div>
                        <HeroTitle />
                        <TitleList titles={siteConfig.titles} />
                        <DynamicTagline
                            taglines={siteConfig.taglines}
                            className="pl-1 text-center lg:text-start text-sm mt-4 min-h-28 max-w-[500px] text-slate-350"
                        />
                        <TableOfContents />
                    </div>
                    <SocialIcons />
                </header>
                <main className="w-full lg:w-1/2 px-4 sm:px-0 pt-20 lg:pt-40 lg:pl-6 text-slate-350 text-sm flex flex-wrap justify-center lg:block">
                    <AboutMe />
                    <Experiences />
                    <Projects />
                </main>
            </section>
        </main>
    );
}
