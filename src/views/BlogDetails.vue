<template>
    <div class="container mx-auto p-6">
      <div v-if="post" class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img :src="post.image" alt="Featured image" class="w-full h-64 object-cover">
        <div class="p-6">
          <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
          <div class="flex flex-wrap items-center mb-4">
            <span class="text-gray-500 text-sm mr-4">{{ post.date }}</span>
            <div>
              <span 
                v-for="tag in post.tags" 
                :key="tag" 
                class="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mr-2 mb-2"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <p class="text-gray-700 mb-6">{{ post.content }}</p>
          <!-- Social Share Buttons -->
          <div class="flex space-x-4">
            <button class="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <!-- Dummy icon for share -->
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
              </svg>
              <span>Share</span>
            </button>
            <button class="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <!-- Dummy icon for tweet -->
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
              </svg>
              <span>Tweet</span>
            </button>
            <!-- Add more share options as needed -->
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        Loading post...
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  interface BlogPostType {
    id: number
    title: string
    summary: string
    date: string
    slug: string
    image: string
    tags: string[]
    content: string
  }
  
  // Dummy blog posts (you could eventually fetch this data from an API)
  const blogPosts: BlogPostType[] = [
    { 
      id: 1, 
      title: 'My First Blog Post', 
      summary: 'A brief overview of my first blog post.', 
      date: '2025-02-01', 
      slug: 'my-first-blog-post',
      image: 'https://via.placeholder.com/800x400', 
      tags: ['Vue', 'JavaScript'],
      content: 'This is the full content of my first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae quam et magna fermentum condimentum. Vivamus interdum nulla in leo congue, a malesuada dui pharetra.'
    },
    { 
      id: 2, 
      title: 'Another Post', 
      summary: 'Some insights about something interesting.', 
      date: '2025-02-05', 
      slug: 'another-post',
      image: 'https://via.placeholder.com/800x400', 
      tags: ['Tech', 'Trends'],
      content: 'This is the full content of another post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus. Sed non lacus sit amet dolor suscipit dapibus.'
    },
  ]
  
  const route = useRoute()
  const slug = route.params.slug as string
  const post = ref<BlogPostType | undefined>(undefined)
  
  onMounted(() => {
    post.value = blogPosts.find(p => p.slug === slug)
  })
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  