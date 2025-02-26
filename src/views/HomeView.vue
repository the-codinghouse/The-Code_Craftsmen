<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
// import ServicesPreview from '@/components/ServicesPreview.vue'
// import BlogPreview from '@/components/BlogPreview.vue'
import BaseModal from '@/components/BaseModal.vue'
import Aboutus from '@/components/aboutus.vue';
import Services from '@/components/services.vue';
import Portfolio from '@/components/portfolio.vue';
import BlogView from './BlogView.vue';
const showModal = ref(false)

</script>

<template>
  <div>
    <!-- 1. Hero Section -->
    <HeroSection />

    <!-- 2. About Us -->
    <Aboutus />

    <!-- 3. Services Overview -->
    <Services />

    <!-- 4. Portfolio/Showcase Work -->
    <Portfolio />

    <!-- 5. Blog Preview -->
    <BlogView />

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
