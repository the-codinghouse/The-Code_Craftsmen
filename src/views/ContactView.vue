<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
    <div class="w-full max-w-lg">
      <!-- Page Title with a Fade-In Animation -->
      <h1 class="text-4xl font-bold mb-8 text-center transition-transform duration-500 transform hover:scale-105">
        Get in Touch
      </h1>
      
      <!-- Contact Form Card -->
      <form action="https://formspree.io/f/yourFormId" method="POST" class="space-y-6 bg-gray-800 p-8 rounded-xl shadow-xl opacity-0 animate-fadeIn">
        <div>
          <label class="block mb-2 font-medium" for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors duration-300"
          />
        </div>
        <div>
          <label class="block mb-2 font-medium" for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@example.com"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors duration-300"
          />
        </div>
        <div>
          <label class="block mb-2 font-medium" for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors duration-300"
          ></textarea>
        </div>
        <button type="submit" class="w-full py-3 bg-blue-600 rounded hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add any additional reactive logic here if needed.
</script>

<style scoped>
/* Custom Animation (Fade In) */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
