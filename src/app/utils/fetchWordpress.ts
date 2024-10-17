const baseUrl = process.env.WORDPRESS_API_URL || "https://orchid-jay-598415.hostingersite.com/wp-json";

export async function fetchHelper(endpoint: string) {
    const res = await fetch(`${baseUrl}/${endpoint}`);
    const data = await res.json();
    return data;
}

export async function fetchBlogs() {
    return fetchHelper("wp/v2/posts");
}

export async function fetchBlog(slug: string) {
    const blog = await fetchHelper(`wp/v2/posts?slug=${slug}&_embed`);
    return blog[0];
}

