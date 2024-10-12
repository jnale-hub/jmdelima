import HeroTitle from "./components/HeroTitle";
import DynamicTagline from "./components/DynamicTagline";
import TitleList from "./components/TitleList";
import MotionDiv from "./components/MotionDiv";
import { slideInFromLeft } from "./utils/motion";
import SocialIcons from "./components/SocialIcons";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";

export default function Home() {
    const taglines = [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ];

    const titles = [
        "Software Engineer",
        "Full Stack Developer",
        "UI/UX Designer",
    ];

    return (
        <main className="w-full min-h-screen px-4 sm:px-20 xl:px-40 2xl:px-80">
            <section className="w-full flex flex-wrap">
                <header className="w-full lg:h-[100dvh] lg:sticky top-0 lg:w-1/2 pt-40 lg:pb-40 flex flex-col lg:justify-between">
                    <div>
                        <HeroTitle />
                        <TitleList titles={titles} />
                        <MotionDiv
                            variants={slideInFromLeft(0.9)}
                            initial="hidden"
                            animate="visible"
                            className="w-full flex justify-center lg:justify-start"
                        >
                            <DynamicTagline
                                taglines={taglines}
                                className="pl-1 text-center lg:text-start text-sm mt-4 min-h-28 max-w-[500px] text-slate-350"
                            />
                        </MotionDiv>
                    </div>
                    <MotionDiv
                        variants={slideInFromLeft(1)}
                        initial="hidden"
                        animate="visible"
                        className="w-full pt-2 lg:pt-0 lg:pl-1"
                    >
                        <SocialIcons />
                    </MotionDiv>
                </header>
                <main className="w-full lg:w-1/2 px-4 sm:px-0 pt-20 lg:pt-40 lg:pl-6 text-slate-350 text-sm flex flex-wrap justify-center lg:block">
                    <AboutMe />
                    <Experiences />
                </main>
            </section>
        </main>
    );
}
