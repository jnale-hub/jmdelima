import BlogList from '@/app/components/BlogList';
import { getBlogPosts } from '@/data/blog';
export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="p-2">
        <h1 className="text-sm font-bold">BLOGS</h1>
        <p className="text-xs text-slate-350 mb-0">
          Fragments of my imagination
        </p>
      </div>

      {posts ? (
        <BlogList />
      ) : (
        <div className="text-center text-xs w-full mt-20">
          No blogs found, try refreshing the page or check back later.
        </div>
      )}
    </>
  );
}
