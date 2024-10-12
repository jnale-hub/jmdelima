import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const siteConfig = {
    name: "Aurora",
    title: "Aurora - Software Engineer",
    description: "Delivering the best",
    url: "https://aurora.com",
    tagLines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Software Engineer", "Full Stack Developer", "UI/UX Designer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/aurora",
        },
        {
            icon: <FaLinkedin />,
            url: "https://linkedin.com/aurora",
        },
        {
            icon: <FaSquareXTwitter />,
            url: "https://x.com/aurora",
        },
        {
            icon: <FaDiscord />,
            url: "https://discord.com/aurora",
        },
        {
            icon: <IoIosMail />,
            url: "mailto:aurora@example.com",
        },
    ],
    sections: {
        aboutMe: `
            <p>
                Hi! I'm Alvin, a <strong>full-stack developer</strong> who started coding in <strong>2023</strong>. Since then, I've built <strong>streaming platforms</strong>, <strong>blogs</strong>, and <strong>e-commerce sites</strong>. Whether it’s front-end finesse or back-end logic, I love bringing ideas to life on the web.
            </p>
            <p>
                Recently, I’ve been experimenting with <strong>Framer Motion</strong> for smooth animations and the <strong>OpenAI API</strong> for cool AI projects. From custom <strong>APIs with Express</strong> to impressive interfaces with <strong>Next.js</strong>—I’ve got it covered, and I also manage <strong>WordPress</strong> sites like a pro.
            </p>
            <p>
                When I’m not coding, you’ll find me playing <strong>Dota 2</strong>, cooking up new recipes, or streaming on <strong>Kick</strong>. Let's connect—I'd love to help with your next <strong>website</strong> or <strong>API</strong> project!
            </p>
        `,
        experiences: [
            {
                company: "Studio Aurora",
                position: "Founder | Lead Developer",
                duration: "2024 - Present",
                description: "Founded a web development agency focused on delivering high-quality websites and custom digital solutions. Lead the end-to-end development process, from client consultation and project planning to design implementation and deployment. Skilled in building scalable web apps, e-commerce platforms, and custom API integrations using modern frameworks like Next.js. Oversee a team of developers and coordinate projects to ensure timely delivery and client satisfaction."
            },
            {
                company: "Altera Karna Business Corporation",
                position: "Full-stack Engineer",
                duration: "2023 - 2024",
                description: "Developed various websites including streaming platforms, landing pages, and news sites using Next.js, WordPress, and Maccms. Built and managed APIs with Express.js, and leveraged web scraping to curate and generate content. Introduced automation processes to streamline workflows and built desktop applications with Electron for internal use."
            }
        ]
    },
};
