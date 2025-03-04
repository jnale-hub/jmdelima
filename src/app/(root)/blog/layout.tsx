import BlogHeader from "@/app/components/BlogHeader";
import Footer from "@/app/components/Footer";
import SocialIcons from "@/app/components/SocialIcons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Alvin Chang",
  description: "Alvin Chang's Blog, fragments of my imagination",
  keywords:
    "Alvin Chang, blog, nextjs, react, javascript, typescript, web development, programming",
  alternates: {
    canonical: "https://alvinchang.dev/blogs",
  },
  openGraph: {
    title: "Blogs - Alvin Chang",
    description: "Alvin Chang's Blog, fragments of my imagination",
    url: "https://alvinchang.dev/blogs",
    type: "website",
    images: [
      {
        url: "/horizontal-logo.png",
        width: 1100,
        height: 300,
        alt: "Alvin Chang Portfolio Logo",
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
      <main className="w-full min-h-screen max-w-2xl p-2 mx-auto">{children}</main>
      <Footer noAnimate />
      <SocialIcons noAnimate />
    </>
  );
}
