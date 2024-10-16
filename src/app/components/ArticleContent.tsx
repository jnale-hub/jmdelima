import hljs from "highlight.js";
import { JSDOM } from "jsdom";

export default function ArticleContent({ content }: { content: string }) {
    // Function to highlight code blocks
    const highlightCodeBlocks = (htmlContent: string) => {
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;
 
        document.querySelectorAll('pre code').forEach((block: any) => {
            const highlighted = hljs.highlightAuto(block.textContent || "").value;
            block.innerHTML = highlighted;
        });

        return document.body.innerHTML;
    };

    // Preprocess the content to highlight code blocks
    const highlightedContent = highlightCodeBlocks(content);

    return (
        <article
            className="article-content text-sm text-slate-350 p-2 leading-6"
            dangerouslySetInnerHTML={{ __html: highlightedContent.replaceAll("javascriptCopy code", "") }}
        />
    );
}
