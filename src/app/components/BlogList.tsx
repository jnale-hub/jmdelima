import BlogListItem from "./BlogListItem";

export default function BlogList({ blogs, isHome }: { blogs: any[], isHome?: boolean }) {
    return (
        <div className={`flex flex-col blog-list w-full ${!isHome && "gap-2"}`}>
            {blogs.map((blog) => (
                <BlogListItem key={blog.id} blog={blog} isHome={isHome}/>
            ))}
        </div>
    );
}