import { NextApiRequest, NextApiResponse } from "next";
import { fetchBlogs } from "../utils/fetchWordpress";
import RSS from "rss"; // Ensure correct import

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const blogs = await fetchBlogs();

        const feed = new RSS({
            title: "Alvin Chang's Blog",
            description: "Fragments of my imagination",
            site_url: "https://alvinchang.dev",
            language: "en",
            image_url: "https://alvinchang.dev/horizontal-logo.png",
            copyright: "All rights reserved 2023, Alvin Chang",
            generator: "Next.js using RSS",
            feed_url: "https://alvinchang.dev/feed.xml",
        });

        blogs.forEach((blog) => {
            feed.item({
                title: blog.title.rendered,
                guid: `https://alvinchang.dev/blogs/${blog.slug}`, // Use 'guid' instead of 'id'
                url: `https://alvinchang.dev/blogs/${blog.slug}`, // Use 'url' for the link
                description: blog.excerpt.rendered,
                author: "Alvin Chang",
                date: new Date(blog.date),
            });
        });

        res.setHeader("Content-Type", "application/rss+xml");
        res.status(200).send(feed.xml({ indent: true })); // Use 'xml' method to generate the feed
    } catch (error) {
        console.error("Error generating RSS feed:", error);
        res.status(500).json({ error: "Failed to generate RSS feed" });
    }
}
