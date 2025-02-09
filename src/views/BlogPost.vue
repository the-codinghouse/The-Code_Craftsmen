<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img :src="post.image" alt="Blog image" class="w-full h-48 object-cover">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-500 text-sm mb-2">{{ post.date }}</p>
        <p class="text-gray-700 mb-4 line-clamp-3">
          {{ post.summary }}
        </p>
        <router-link 
          :to="`/blog/${post.slug}`" 
          class="inline-block text-blue-500 font-semibold hover:underline"
        >
          Read More →
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface BlogPostType {
    id: number
    title: string
    summary: string
    date: string
    slug: string
    image: string
    tags: string[]
    content?: string
  }
  
  defineProps<{
    post: BlogPostType
  }>()
  </script>
  
  <style scoped>
  /* Optionally, use a plugin or custom CSS for line-clamp (multi-line ellipsis) */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  