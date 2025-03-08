import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { getBlogPosts } from '@/data/blog';

export default async function BlogList() {
  const posts = await getBlogPosts();

  return (
    <div className={`flex flex-col blog-list w-full`}>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            className="w-full  pl-0 lg:pl-3
                 p-3 flex justify-between rounded-md lg:hover:bg-[rgb(255,255,255,0.06)] transition-colors duration-300 group border-[rgb(255,255,255,0.02)]"
          >
            <div className="lg:flex flex-wrap justify-between items-center">
              <div className="flex items-center group-hover:text-orange-500 transition-colors duration-300 lg:mb-1 text-slate-300 w-full">
                <div className="lg:max-w-[90%]">
                  <h3 className="text-[13px] font-bold">
                    {post.metadata.title}
                    <MdOutlineArrowOutward className="text-xs transition-transform duration-300 group-hover:scale-125 inline ml-1 align-middle" />
                  </h3>
                </div>
              </div>
              <div className="lg:hidden">
                <p className="text-[11px] text-slate-350 pb-1">
                  {post.metadata.publishedAt}
                </p>
              </div>
              <div className="text-xs text-slate-350 line-clamp-2 w-full lg:max-w-[95%]">
                <p>{post.metadata.summary}</p>
              </div>
            </div>
            <div className="hidden lg:flex justify-end flex-none">
              <p className="text-[11px] text-slate-350">
                {post.metadata.publishedAt}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
