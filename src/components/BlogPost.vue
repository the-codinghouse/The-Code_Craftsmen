<template>
    <div class="border p-4 rounded-lg hover:shadow-lg transition duration-300">
      <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
      <p class="text-gray-600 mb-2">{{ post.summary }}</p>
      <small class="text-gray-500">{{ post.date }}</small>
      <!-- You can add a 'Read More' link that navigates to a detailed view -->
      <div class="mt-4">
        <a :href="`/blog/${post.slug}`" class="text-blue-500 hover:underline">Read More</a>
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
  }
  
  const props = defineProps<{
    post: BlogPostType
  }>();
  console.log(props.post.id);
  </script>
  
  <style scoped>
  /* Custom styling for the blog post component */
  </style>
  