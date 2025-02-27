<template>
  <div class="w-full border p-4 rounded-lg hover:shadow-lg transition duration-300">
    <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-600 mb-2">{{ post.summary }}</p>
    <small class="text-gray-500">{{ post.date }}</small>
    <div class="mt-4">
      <router-link :to="`/the-code-craftsmen/blog/${post.slug}`" class="text-blue-500 hover:underline">
        Read More
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
  }
  
  const props = defineProps<{
    post: BlogPostType
  }>();
  console.log(props.post.id);
  </script>
  
  <style scoped>
  /* Custom styling for the blog post component */
  </style>
  