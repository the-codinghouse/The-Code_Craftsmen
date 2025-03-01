<template>
  <div class="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
    <div v-if="post" class="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img :src="post.image" alt="Featured image" class="w-full h-64 object-cover">
      <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <div class="flex flex-wrap items-center mb-4">
          <span class="text-gray-400 text-sm mr-4">{{ post.date }}</span>
          <div>
            <span v-for="tag in post.tags" :key="tag"
              class="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mr-2 mb-2">
              {{ tag }}
            </span>
          </div>
        </div>
        <p class="text-gray-300 mb-6">{{ post.content }}</p>
        <!-- Social Share Buttons -->
        <div class="flex space-x-4">
          <button class="flex items-center space-x-1 text-blue-400 hover:text-blue-600 transition">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
            </svg>
            <span>Share</span>
          </button>
          <button class="flex items-center space-x-1 text-blue-400 hover:text-blue-600 transition">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
            </svg>
            <span>Tweet</span>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
      Loading post...
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getBlogBySlug, type BlogPostType } from '@/api/blogApi';

const route = useRoute();
const post = ref<BlogPostType | null>(null);

onMounted(() => {
  const slug = route.params.slug as string;
  post.value = getBlogBySlug(slug) || null;
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
