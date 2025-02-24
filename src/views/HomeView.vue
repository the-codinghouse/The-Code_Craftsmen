<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
// import ServicesPreview from '@/components/ServicesPreview.vue'
// import BlogPreview from '@/components/BlogPreview.vue'
import BaseModal from '@/components/BaseModal.vue'
const showModal = ref(false)
const projects = [
  { title: "Custom Solution", description: "A custom software solution for those who need a personalized product solutions for their needs.", image: new URL('@/assets/project1.png', import.meta.url).href },
  { title: "Ecommerce Solution", description: "A standard eCommerce solution to help a local shop get traction online along with SEO setup.", image: new URL('@/assets/project2.png', import.meta.url).href },
  { title: "Marketing Solution", description: "A WordPress website managing lead generation and product marketing.", image: new URL('@/assets/project3.png', import.meta.url).href },
]
</script>

<template>
  <div>
    <!-- 1. Hero Section -->
    <HeroSection />

    <!-- 2. About Us -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-heading text-3xl text-craftsman-dark-500 mb-4">Why Choose The Code Craftsmen?</h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            With years of experience in modern tech stacks, we create solutions that are fast, secure, and visually stunning.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Feature 1 -->
          <div class="text-center">
            <div class="text-4xl mb-2">⚡</div>
            <h3 class="font-bold text-xl mb-1 text-craftsman-dark-500">Speed & Performance</h3>
            <p class="text-gray-600">Optimized, fast-loading solutions.</p>
          </div>
          <!-- Feature 2 -->
          <div class="text-center">
            <div class="text-4xl mb-2">🔒</div>
            <h3 class="font-bold text-xl mb-1 text-craftsman-dark-500">Security</h3>
            <p class="text-gray-600">Robust security measures to protect your data.</p>
          </div>
          <!-- Feature 3 -->
          <div class="text-center">
            <div class="text-4xl mb-2">🎨</div>
            <h3 class="font-bold text-xl mb-1 text-craftsman-dark-500">Elegant Design</h3>
            <p class="text-gray-600">User-centric and visually appealing interfaces.</p>
          </div>
          <!-- Feature 4 -->
          <div class="text-center">
            <div class="text-4xl mb-2">🔧</div>
            <h3 class="font-bold text-xl mb-1 text-craftsman-dark-500">Reliable Support</h3>
            <p class="text-gray-600">Continuous support for your evolving needs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Services Overview -->
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

    <!-- 4. Portfolio/Showcase Work -->
    <section id="portfolio" class="py-16 bg-white">
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

    <!-- 5. Blog Preview -->
    <section class="py-16 bg-craftsman-dark-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-heading text-3xl text-craftsman-amber-500 mb-4">Latest Insights</h2>
          <p class="text-lg text-gray-300">
            Stay updated with our latest blog posts and articles on web development, design, and tech trends.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Blog Card 1 -->
          <div class="border p-6 rounded-lg shadow-md bg-gray-100 text-craftsman-dark-800">
            <h3 class="font-bold text-xl mb-2">Blog Post One</h3>
            <p class="text-gray-700">
              A short summary of the blog post goes here.
            </p>
            <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
          </div>
          <!-- Blog Card 2 -->
          <div class="border p-6 rounded-lg shadow-md bg-gray-100 text-craftsman-dark-800">
            <h3 class="font-bold text-xl mb-2">Blog Post Two</h3>
            <p class="text-gray-700">
              A short summary of the blog post goes here.
            </p>
            <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Call to Action (Newsletter / Contact) -->
    <section id="newsletter" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="font-heading text-3xl text-craftsman-amber-500 mb-4">Ready to Get Started?</h2>
        <p class="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          Contact us today or subscribe to our newsletter to receive the latest updates and offers.
        </p>
        <div class="space-x-4">
          <a href="#contact" class="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            Contact Us
          </a>
          <button @click="showModal = true" class="px-6 py-3 border border-blue-500 text-blue-500 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>

  <BaseModal :isOpen="showModal" title="Sign Up To Newsletter" @close="showModal = false" class="text-craftsman-dark-900">
  <form action="https://formspree.io/f/yourFormId" method="POST" class="space-y-4">
    <div>
      <label class="block mb-1" for="name">Name</label>
      <input type="text" id="name" name="name" required class="w-full border p-2 rounded" />
    </div>
    <div>
      <label class="block mb-1" for="email">Email</label>
      <input type="email" id="email" name="email" required class="w-full border p-2 rounded" />
    </div>
    <div class="flex justify-end space-x-4">
      <button type="button" @click="showModal = false" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors">
        Cancel
      </button>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Subscribe
      </button>
    </div>
  </form>
</BaseModal>
</template>


<style scoped>
/* Example container max width override */
.container {
  max-width: 1200px;
}
</style>
