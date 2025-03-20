import BlogHeader from '@/app/components/BlogHeader';
import Footer from '@/app/components/Footer';
import SocialIcons from '@/app/components/SocialIcons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - John Mark Delima',
  description: "A simple blog site where I share my thoughts and experiences",
  keywords:
    'John Mark Delima, blog, nextjs, react, javascript, typescript, web development, programming',
  alternates: {
    canonical: 'https://jmdelima.vercel.app//blogs',
  },
  openGraph: {
    title: 'Blogs - John Mark Delima',
    description: "A simple blog site where I share my thoughts and experiences",
    url: 'https://jmdelima.vercel.app//blogs',
    type: 'website',
    images: [
      {
        url: '/horizontal-logo.png',
        width: 1100,
        height: 300,
        alt: 'John Mark Delima Portfolio Logo',
      },
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      <main className="w-full min-h-screen max-w-2xl p-2 mx-auto">
        {children}
      </main>
      <Footer noAnimate />
      <SocialIcons noAnimate />
    </>
  );
}
