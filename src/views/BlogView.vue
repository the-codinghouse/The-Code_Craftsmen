<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-center">Blog</h1>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in posts" :key="post.id" class="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-white">{{ post.title }}</h2>
        <p class="text-gray-300 mt-2">{{ post.summary }}</p>
        <router-link :to="`/blog/${post.slug}`" class="mt-4 inline-block text-blue-400 hover:underline">
          Read More →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchAllBlogs, getAllBlogs, type BlogPostType } from "@/api/blogApi";

const posts = ref<BlogPostType[]>([]);

onMounted(async () => {
  await fetchAllBlogs();
  posts.value = getAllBlogs();
});
</script>
