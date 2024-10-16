import BlogListItem from "./BlogListItem";

export default function BlogList({ blogs, isHome }: { blogs: any[], isHome?: boolean }) {
    return (
        <div className="flex flex-col gap-2 blog-list w-full">
            {blogs.map((blog) => (
                <BlogListItem key={blog.id} blog={blog} isHome={isHome}/>
            ))}
        </div>
    );
}