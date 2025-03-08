import { DATA } from '@/data/resume';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import DynamicTagline from '../components/DynamicTagline';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import HeroTitle from '../components/HeroTitle';
import HireMeButton from '../components/HireMeButton';
import Projects from '../components/Projects';
import SocialIcons from '../components/SocialIcons';
import TableOfContents from '../components/TableOfContents';
import Technologies from '../components/Technologies';
import TitleList from '../components/TitleList';
import { getBlogPosts } from '@/data/blog';
import HomepageBlogs from '../components/HomepageBlogs';
import Education from '../components/Education';

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main className="w-full min-h-screen px-4 sm:px-20 xl:px-40 grid lg:grid-cols-2 gap-x-4">
      <header className="lg:h-[100dvh] lg:sticky top-0 pt-40 lg:pb-40 flex flex-col lg:justify-between">
        <div>
          <HeroTitle />
          <TitleList titles={DATA.titles} />
          <DynamicTagline
            taglines={DATA.taglines}
            className="pl-1 text-center lg:text-start text-xs lg:text-sm mt-4 min-h-20 max-w-[500px] text-slate-350"
          />
          <TableOfContents />
          <HireMeButton isSticky />
        </div>
        <div>
          <SocialIcons isSticky />
          <Footer isSticky />
        </div>
      </header>
      <div className="w-full px-4 sm:px-0 pt-20 lg:pt-40 text-slate-350 text-sm flex flex-wrap justify-center lg:mb-40">
        <AboutMe />
        <Experiences />
        <Projects />
        <Education />
        <Technologies />
        <HomepageBlogs />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
