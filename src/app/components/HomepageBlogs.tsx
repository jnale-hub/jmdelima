import MotionTag from "./MotionTag";
import { slideInFromRight } from "../utils/motion";
import SectionLabel from "./SectionLabel";
import BlogList from "./BlogList";
import { TPost } from "../utils/types";

export default function HomepageBlogs({blogs}: {blogs: TPost[]}) {
    return (
        <MotionTag
            tag="div"
            variants={slideInFromRight(1.2)}
            initial="hidden"
            animate="visible"
        >
            <section
                id="blogs"
                className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12 lg:pl-3"
            >
                <SectionLabel label="BLOGS" className="lg:pl-3" />
                <BlogList blogs={blogs} isHome/>
            </section>
        </MotionTag>
    );
}

