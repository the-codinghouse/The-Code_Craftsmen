<template>
    <section id="services" class="py-16 bg-craftsman-dark-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-heading text-3xl text-craftsman-amber-500 mb-4">Our Services</h2>
          <p class="text-lg text-gray-200">
            From web and mobile development to AI-powered solutions and cloud infrastructure, our services are tailored to meet your needs.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Service Card 1 -->
          <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-white mb-2">Web Development</h3>
            <p class="text-gray-300">
              Custom websites and web applications built using the latest technologies.
            </p>
          </div>
          <!-- Service Card 2 -->
          <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-white mb-2">Mobile Development</h3>
            <p class="text-gray-300">
              High-performance mobile apps for iOS and Android.
            </p>
          </div>
          <!-- Service Card 3 -->
          <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-white mb-2">AI Solutions</h3>
            <p class="text-gray-300">
              Leveraging artificial intelligence to automate and innovate.
            </p>
          </div>
          <!-- Service Card 4 -->
          <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-white mb-2">Cloud & DevOps</h3>
            <p class="text-gray-300">
              Scalable cloud architectures and efficient CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic needed for now, but we might add dynamic props later.
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  