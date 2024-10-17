import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import { fetchBlog } from "@/app/utils/fetchWordpress";
import { createHighlighter } from "shiki";
import { JSDOM } from "jsdom";

type TProps = {
    params: {
        slug: string;
    };
};

export default async function BlogPage({ params }: TProps) {
    const blog = await fetchBlog(params.slug);

    // Function to highlight code blocks
    const highlightCodeBlocks = async (htmlContent: string) => {
        const highlighter = await createHighlighter({
            langs: ["javascript"],
            themes: ["ayu-dark"],
        });
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;
    
        const blocks = Array.from(document.querySelectorAll("pre code"));
        await Promise.all(blocks.map(async (block: any) => {
            const highlighted = await highlighter.codeToHtml(
                block.textContent || "",
                {
                    lang: "javascript",
                    theme: "ayu-dark",
                }
            );
            block.parentElement.innerHTML = highlighted;
        }));
    
        return document.body.innerHTML;
    };
    
    // Preprocess the content to highlight code blocks
    const highlightedContent = await highlightCodeBlocks(blog.content.rendered);

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[600px] p-2">
                <BlogHeader />
                {blog && (
                    <BlogContent blog={blog} content={highlightedContent} />
                )}
            </main>
        </div>
    );
}
