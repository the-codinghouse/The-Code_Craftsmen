<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <ResponsiveNavbar />
      <CookiePopup />
      
      <!-- Routed Content -->
      <main class="flex-grow">
        <router-view />
      </main>
      
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import ResponsiveNavbar from '@/components/ResponsiveNavbar.vue'
  import CookiePopup from '@/components/CookiePopup.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  
  <style scoped>
  /* Layout-specific styles (if needed) */
  </style>
  