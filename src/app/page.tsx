import HeroTitle from "./components/HeroTitle";
import DynamicTagline from "./components/DynamicTagline";
import TitleList from "./components/TitleList";

export default function Home() {
    const taglines = [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ];

    const titles = ["Software Engineer", "Full Stack Developer", "UI/UX Designer"];

    return (
        <main className="w-full min-h-screen px-4 sm:px-20 xl:px-40 2xl:px-60">
            <section className="w-full flex flex-wrap">
                <header className="w-full h-full lg:sticky top-0 lg:w-1/2 pt-24 lg:pb-24">
                    <HeroTitle />   
                    <TitleList titles={titles} />
                    <DynamicTagline
                        taglines={taglines}
                        className="pl-1 text-start text-sm mt-8 text-[#808080] min-h-20 max-w-[400px]"
                    />
                </header>
                <div className="w-full lg:w-1/2 lg:pt-24">
                    <h1 className="text-4xl font-bold">Aurora</h1>
                </div>
            </section>
        </main>
    );
}
