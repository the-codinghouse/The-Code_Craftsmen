<template>
    <section id="portfolio" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-heading text-3xl text-craftsman-dark-800 mb-4">Our Portfolio</h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our projects that highlight our commitment to quality and innovation.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card -->
          <div v-for="(project, index) in projects" :key="index" class="border rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover" />
            <div class="p-4 flex flex-col justify-between flex-grow">
              <div class="flex-grow">
                <h3 class="font-bold text-xl mb-2 text-craftsman-dark-900">{{ project.title }}</h3>
              </div>
              <p class="text-craftsman-dark-500">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
// No logic needed for now, but we might add dynamic props later.
  const projects = [
  { title: "Custom Solution", description: "A custom software solution for those who need a personalized product solutions for their needs.", image: new URL('/assets/project1.png', import.meta.url).href },
  { title: "Ecommerce Solution", description: "A standard eCommerce solution to help a local shop get traction online along with SEO setup.", image: new URL('/assets/project2.png', import.meta.url).href },
  { title: "Marketing Solution", description: "A WordPress website managing lead generation and product marketing.", image: new URL('/assets/project3.png', import.meta.url).href },
]
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  