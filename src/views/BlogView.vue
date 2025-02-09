<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-center">Blog</h1>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <BlogPost 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlogPost from '../components/BlogPost.vue'

interface BlogPostType {
  id: number
  title: string
  summary: string
  date: string
  slug: string
  image: string
  tags: string[]
}

const posts = ref<BlogPostType[]>([
  { 
    id: 1, 
    title: 'My First Blog Post', 
    summary: 'A brief overview of my first blog post. This summary gives an enticing glimpse into the content.',
    date: '2025-02-01', 
    slug: 'my-first-blog-post',
    image: 'https://via.placeholder.com/800x400', 
    tags: ['Vue', 'JavaScript']
  },
  { 
    id: 2, 
    title: 'Another Post', 
    summary: 'Some insights about something interesting. Explore trends and news with this post.',
    date: '2025-02-05', 
    slug: 'another-post',
    image: 'https://via.placeholder.com/800x400', 
    tags: ['Tech', 'Trends']
  },
  // Add more posts as needed...
])
</script>

<style scoped>
/* Additional styles if needed */
</style>
