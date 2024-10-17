import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { formatDate } from "../utils/helpers";

export default function BlogListItem({ blog, isHome }: { blog: any, isHome?: boolean }) {
    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className={`w-full ${isHome ? "pl-0 lg:pl-3" : "bg-[rgb(255,255,255,0.02)] lg:border"} p-3 rounded-md lg:hover:bg-[rgb(255,255,255,0.06)] transition-colors duration-300 group border-[rgb(255,255,255,0.02)] lg:hover:border`}
        >
            <div className="lg:flex justify-between items-center mb-1 lg:mb-0">
                <div className="flex items-center group-hover:text-pink-500 transition-colors duration-300 lg:mb-1 text-slate-300">
                    <h3 className="text-[13px] font-bold mr-1 line-clamp-1">
                        {blog.title.rendered}
                    </h3>
                    <MdOutlineArrowOutward className="text-xs transition-transform duration-300 group-hover:scale-125" />
                </div>
                <p className="text-[11px] text-slate-350">
                    {formatDate(blog.date)}
                </p>
            </div>
            <div
                className="text-xs text-slate-350 line-clamp-2 lg:max-w-[80%]"
                dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
            />
        </Link>
    );
}
