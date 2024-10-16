import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { formatDate } from "../utils/helpers";

export default function BlogListItem({ blog, isHome }: { blog: any, isHome?: boolean }) {
    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className={`w-full ${!isHome && "bg-[rgb(255,255,255,0.02)]"} p-3 rounded-md hover:bg-[rgb(255,255,255,0.06)] transition-colors duration-300 group border border-[rgb(255,255,255,0.02)]`}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center group-hover:text-pink-500 transition-colors duration-300 mb-1">
                    <h3 className="text-[13px] font-bold mr-1">
                        {blog.title.rendered}
                    </h3>
                    <MdOutlineArrowOutward className="text-xs transition-transform duration-300 group-hover:scale-125" />
                </div>
                <p className="text-[11px] text-slate-350">
                    {formatDate(blog.date)}
                </p>
            </div>
            <div
                className="text-xs text-slate-350 line-clamp-2 max-w-[80%]"
                dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
            />
        </Link>
    );
}
