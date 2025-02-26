<template>
  <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img :src="post.image" alt="Blog image" class="w-full h-48 object-cover">
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-400 text-sm mb-2">{{ post.date }}</p>
      <p class="text-gray-300 mb-4 line-clamp-3">
        {{ post.summary }}
      </p>
      <router-link 
        :to="`/the-code-craftsmen/blog/${post.slug}`" 
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
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
