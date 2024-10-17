import { fetchBlogs } from "../utils/fetchWordpress";
import BlogList from "../components/BlogList";
import BlogHeader from "../components/BlogHeader";

export default async function Blogs() {
    const blogs = await fetchBlogs();

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[600px] p-2">
                <BlogHeader/>
                <div className="p-2">
                    <h2 className="text-sm font-bold">BLOGS</h2>
                    <p className="text-xs text-slate-350 mb-0">
                        Fragments of my imagination
                    </p>
                </div>
                {blogs ? <BlogList blogs={blogs} /> : <div className="text-center text-xs w-full mt-20">No blogs found, try refreshing the page or check back later.</div>}
            </main>
        </div>
    );
}
