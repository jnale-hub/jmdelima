import { FaBootstrap, FaGithub, FaLinkedin, FaPython } from 'react-icons/fa';
import { FaMattressPillow } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { MdJavascript } from 'react-icons/md';
import {
  RiMovie2AiFill,
  RiNewspaperFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  SiDjango,
  SiDocker,
  SiFlask,
  SiGo,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSqlite,
  SiTypescript,
} from 'react-icons/si';

export const DATA = {
  name: 'John Mark Delima',
  title: 'John Mark Delima | Full-Stack Developer',
  description:
    'John Mark Delima is a full stack developer with deep interest in AI and Web Development with over one year work experience. He loves building projects and learning new tech. He is actively looking for a job',
  keywords: [
    'John Mark Delima',
    'Full-Stack Developer',
    'Web Development',
    'Python Developer',
    'AI Engineer',
    'Django',
    'React',
    'Next.js',
    'Software Engineer',
    'Machine Learning',
    'Data Science',
    'Deep Learning',
    'JavaScript',
    'TypeScript',
  ],
  url: 'https://jmdelima.vercel.app/',
  location: 'Camarines Sur, Philippines',
  titles: ['Full-Stack Developer', 'Python Developer', 'AI Engineer'],
  taglines: [
    'Creates web applications that are user-friendly, visually appealing, and functional. Utilizes AI to develop smart solutions, implement ML algorithms, and automate tasks.',
  ],
  experiences: [
    {
      company: 'Dance Vision',
      position: 'Full Stack Developer',
      duration: 'Dec 2023 - Dec 2024',
      description: `Developed and maintained dynamic websites and web applications using React JS, Next.js, TypeScript, Tailwind, Django, Echo (Golang Framework), and Docker. 
        Designed and implemented a chatbot prototype leveraging OpenAI’s Assistant API. 
        Built and optimized system backends with Django’s DRF, delivering high-performance, scalable RESTful APIs. 
        Designed and managed the HubSpot CRM integration for the company blog.`,
      logo: '/dance-vision.svg',
    },
  ],
  technologies: [
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-blue-500" />,
      description: 'T',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-yellow-400" />,
      description: '',
    },
    {
      name: 'Python',
      icon: <SiPython className="text-blue-300" />,
      description: '',
    },
    {
      name: 'Next.js',
      icon: <RiNextjsFill className="text-gray-100" />,
      description: '',
    },
    {
      name: 'React',
      icon: <SiReact className="text-blue-400" />,
      description: '',
    },
    {
      name: 'Tailwind CSS',
      icon: <RiTailwindCssFill className="text-cyan-400" />,
      description: '',
    },
    {
      name: 'Docker',
      icon: <SiDocker className="text-blue-600" />,
      description: '',
    },
    {
      name: 'Django',
      icon: <SiDjango className="text-green-600" />,
      description: '',
    },
    {
      name: 'Flask',
      icon: <SiFlask className="text-gray-400" />,
      description: '',
    },
    {
      name: 'Golang',
      icon: <SiGo className="text-sky-500" />,
      description: '',
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs className="text-green-500" />,
      description: '',
    },
  ],
  contact: {
    email: 'delimajohnmark14@gmail.com',
    tel: '09304012363',
    socials: [
      {
        icon: <FaGithub />,
        url: 'https://github.com/jnale-hub',
        title: 'GitHub',
      },
      {
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/delimajohnmark/',
        title: 'LinkedIn',
      },
      {
        icon: <IoIosMail />,
        url: 'mailto:delimajohnmark14@gmail.com',
        title: 'Email',
      },
    ],
  },
  education: [
    {
      organization: 'Baao Community College',
      name: 'Bachelor of Engineering Technology Major in Electronics',
      logo: '/bcc.png',
      duration: '2022 - 2026',
      description: `Consistent Dean's Lister`,
    },
    {
      name: "CS50's Introduction to Artificial Intelligence with Python",
      organization: 'Harvard University',
      credentialUrl:
        'https://cs50.harvard.edu/certificates/b502e89e-7f59-45b5-a360-7c7596e87b43',
      period: 'Oct 2024',
      logo: '/harvard.png',
      description: `Acquired concepts and algorithms at the foundation of modern artificial intelligencen including neural networks, computer vision, and NLP.`,
    },
    {
      name: "CS50's Web Programming with Python and JavaScript",
      organization: 'Harvard University',
      credentialUrl:
        'https://certificates.cs50.io/a4801b0b-c407-498e-8641-083d95c32ecd.pdf?size=letter',
      period: 'Sept 2023',
      logo: '/harvard.png',
      description: `Implemented web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.
Learned topics include database design, scalability, security, and user experience.`,
    },
    {
      name: 'CS50x: Introduction to Computer Science',
      organization: 'Harvard University',
      credentialUrl:
        'https://certificates.cs50.io/df543633-b945-435b-baae-db1c4067d5e1.pdf?size=letter',
      period: 'Sept 2022',
      logo: '/harvard.png',
      description: `Learned a broad and robust understanding of computer science and programming and a number of languages, including C, Python, SQL, and JavaScript plus CSS and HTML.
Successfully built complex webpages and web application using various programming languages.
Engaged with a vibrant community of like-minded learners.`,
    },
  ],
  projects: [
    {
      title: 'Movie Finder',
      description:
        'A simple yet elegant application to search and explore movie information using the TMDB API.',
      logo: '/projects/movie-finder.png',
      repoLink: 'https://github.com/jnale-hub/movie-finder-nextjs',
      technologies: [
        {
          icon: <RiNextjsFill className="text-[#FFF]" />,
          name: 'Next.js',
        },
        {
          icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
          name: 'Tailwind CSS',
        },
        {
          icon: <SiTypescript className="text-[#3178C6]" />,
          name: 'TypeScript',
        },
        {
          icon: <RiMovie2AiFill />,
          name: 'TMDB API',
        },
      ],
      link: 'https://movie-finder-nextjs-coral.vercel.app/',
      image: '/projects/movie-poster.png',
    },
    {
      title: 'Nexus Publication',
      description:
        'School Publication full stack web application that can cater articles, search for world news, and play educational games.',
      logo: '/projects/nexus-publication.png',
      repoLink: 'https://github.com/jnale-hub/Nexus-Publication-Capstone',
      technologies: [
        {
          icon: <SiDjango />,
          name: 'Django',
        },
        {
          icon: <RiNewspaperFill className="text-[#412991]" />,
          name: 'News.API',
        },
        {
          icon: <FaBootstrap />,
          name: 'Bootstrap',
        },
        {
          icon: <MdJavascript className="text-[#3178C6]" />,
          name: 'Javascript',
        },
      ],
      link: 'https://nexus-pub.vercel.app/world_news/',
      image: '/projects/nexus-poster.png',
    },
    {
      title: 'Auctions',
      description:
        'E-commerce auction site that will allow users to post auction listings, place bids on listings, comment on those listings, and add listings to a watchlist.',
      logo: '/projects/auctions.png',
      repoLink: 'https://github.com/jnale-hub/Auctions',
      technologies: [
        {
          icon: <SiDjango />,
          name: 'Django',
        },
        {
          icon: <FaBootstrap />,
          name: 'Bootstrap',
        },
        {
          icon: <MdJavascript className="text-[#3178C6]" />,
          name: 'Javascript',
        },
        {
          icon: <SiSqlite className="text-[#3178C6]" />,
          name: 'SQLite',
        },
      ],
      image: '/projects/auctions-poster.png',
    },
    {
      title: 'CrosswordAI',
      description:
        'An AI program that generates crossword puzzles, using a constraint satisfaction problem model with node consistency, arc consistency, and backtracking search.',
      logo: '/projects/crossword.png',
      repoLink: 'https://github.com/jnale-hub/CrosswordAI',
      technologies: [
        {
          icon: <FaPython />,
          name: 'Python',
        },
        {
          icon: <FaMattressPillow />,
          name: 'Pillow',
        },
      ],
      image: '/projects/crossword-poster.png',
    },
  ],
  tableOfContents: [
    {
      id: 'about-me',
      label: 'ABOUT ME',
    },
    {
      id: 'experiences',
      label: 'EXPERIENCES',
    },
    {
      id: 'projects',
      label: 'PROJECTS',
    },
    {
      id: 'technologies',
      label: 'TECHNOLOGIES',
    },
    {
      id: 'blogs',
      label: 'BLOGS',
    },
    {
      id: 'contact',
      label: 'CONTACT',
    },
  ],
};
