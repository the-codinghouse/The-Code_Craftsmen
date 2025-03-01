import { toast } from "react-toastify"; // Replace with a Vue toast library if needed

const BASE_URL_POST = "https://dummyjson.com/posts";

// Helper function to handle API responses
async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json();
    toast.error(`Error: ${error.message}`);
    throw new Error(error.message);
  }
  const data = await response.json();
  toast.success("Request successful");
  return data;
}

// API calls using DummyJSON
export async function getAllBlogPosts() {
  const response = await fetch(BASE_URL_POST);
  return handleResponse(response);
}

export async function getBlogPostById(id: string) {
  const response = await fetch(`${BASE_URL_POST}/${id}`);
  return handleResponse(response);
}

export async function getBlogPostByName(name: string) {
  const response = await fetch(`${BASE_URL_POST}?name=${name}`);
  return handleResponse(response);
}

export async function addPost(post: any) {
  const response = await fetch(`${BASE_URL_POST}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return handleResponse(response);
}

// Define our BlogPostType interface
export interface BlogPostType {
  id: number;
  title: string;
  summary: string;
  date: string;
  slug: string;
  image: string;
  tags: string[];
  content: string;
}

// Local storage for blog posts
let blogPosts: BlogPostType[] = [];

/**
 * Fetch all blog posts from DummyJSON, then map the API data to our BlogPostType structure.
 */
export async function fetchAllBlogs(): Promise<BlogPostType[]> {
  // DummyJSON returns an object with a "posts" array
  const data = await getAllBlogPosts();
  // Map the returned posts to our interface
  const posts: BlogPostType[] = data.posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    summary: post.body.substring(0, 100) + "...", // First 100 chars as summary
    date: new Date().toLocaleDateString(), // Use current date as dummy date
    slug: post.title.toLowerCase().replace(/\s+/g, "-"), // Generate a slug from the title
    image: "https://via.placeholder.com/600x400", // Placeholder image
    tags: post.tags,
    content: post.body, // Full content from the body
  }));
  blogPosts = posts;
  return blogPosts;
}

export function getAllBlogs() {
  return blogPosts;
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post: BlogPostType) => post.slug === slug);
}
