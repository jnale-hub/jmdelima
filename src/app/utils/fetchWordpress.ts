import { TPost } from "./types";

const baseUrl = process.env.WORDPRESS_API_URL;
const appUsername = process.env.WORDPRESS_API_USERNAME;
const appPassword = process.env.WORDPRESS_API_PASSWORD;

export async function fetchHelper(endpoint: string) {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
        headers: {
            "Authorization": `Basic ${btoa(`${appUsername}:${appPassword}`)}`
        }
    });
    const data = await res.json();

    return data;
}

export async function fetchBlogs(): Promise<TPost[]> {
    return fetchHelper("wp/v2/posts");
}

export async function fetchBlog(slug: string) {
    const blog = await fetchHelper(`wp/v2/posts?slug=${slug}&_embed`);
    return blog[0];
}

