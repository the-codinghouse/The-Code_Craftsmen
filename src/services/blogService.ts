// src/services/blogService.ts
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

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "My First Blog Post",
    summary: "A brief overview of my first blog post.",
    date: "2025-02-01",
    slug: "my-first-blog-post",
    image: "https://placehold.co/600x400/orange/white",
    tags: ["Vue", "JavaScript"],
    content: "This is the full content of my first blog post...",
  },
  {
    id: 2,
    title: "Another Post",
    summary: "Some insights about something interesting.",
    date: "2025-02-05",
    slug: "another-post",
    image: "https://placehold.co/600x400/orange/white",
    tags: ["Tech", "Trends"],
    content: "This is the full content of another post...",
  },
  {
    id: 3,
    title: "Project Name",
    summary: "An interesting project showcase for personalized product.",
    date: "2025-02-10",
    slug: "project-name",
    image: "https://placehold.co/600x400/orange/white",
    tags: ["Projects", "Development"],
    content: "Detailed insights on our latest project...",
  },
];

export function getAllBlogs() {
  return blogPosts;
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
