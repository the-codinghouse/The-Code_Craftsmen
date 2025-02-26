<template>
  <div class="min-h-screen bg-gray-900 text-white p-10">
    <h1 class="text-4xl font-bold mb-6 text-center transition-transform duration-500 transform hover:scale-105">
      Blog
    </h1>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
      <BlogPost 
        v-for="post in posts" 
        :key="post.id" 
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogPost from '../components/BlogPost.vue'
import { getAllBlogs, type BlogPostType } from '@/services/blogService'

const posts = ref<BlogPostType[]>([])

onMounted(() => {
  posts.value = getAllBlogs()
  console.log('Loaded blog posts:', posts.value)
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
