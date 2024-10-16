import ArticleContent from "@/app/components/ArticleContent";
import BlogHeader from "@/app/components/BlogHeader";
import { fetchBlog } from "@/app/utils/fetchWordpress";
import { formatDate } from "@/app/utils/helpers";
import ReactMarkdown from "react-markdown";

type TProps = {
    params: {
        slug: string;
    }
}

export default async function BlogPage({ params }: TProps) {
    const blog = await fetchBlog(params.slug);

    console.log(blog.content.rendered);

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[600px] p-2">
                <BlogHeader/>
                <div className="p-2">
                    <h2 className="text-base font-bold">{blog.title.rendered}</h2>
                    <p className="text-xs text-slate-350 mb-0">
                        {formatDate(blog.date)}
                    </p>
                </div>
                <ArticleContent content={blog.content.rendered} />  
            </main>
        </div>
    );
}
