import ArticleContent from "@/app/components/ArticleContent";
import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import { fetchBlog } from "@/app/utils/fetchWordpress";
import { formatDate } from "@/app/utils/helpers";

type TProps = {
    params: {
        slug: string;
    };
};

export default async function BlogPage({ params }: TProps) {
    const blog = await fetchBlog(params.slug);

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[600px] p-2">
                <BlogHeader />
                {blog && <BlogContent blog={blog} />}
            </main>
        </div>
    );
}
