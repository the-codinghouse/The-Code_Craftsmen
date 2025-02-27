<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
    <div class="w-full max-w-lg">
      <!-- Page Title with a Fade-In Animation -->
      <h1 class="text-4xl font-bold mb-8 text-center transition-transform duration-500 transform hover:scale-105">
        Get in Touch
      </h1>

      <!-- Success Message -->
      <div v-if="successMessage" class="mb-4 p-4 bg-green-600 text-white rounded">
        {{ successMessage }}
      </div>

      <!-- Contact Form Card -->
      <form @submit.prevent="handleSubmit" class="space-y-6 bg-gray-800 p-8 rounded-xl shadow-xl opacity-0 animate-fadeIn">
        <div>
          <label class="block mb-2 font-medium" for="name">Name</label>
          <input v-model="form.name" type="text" id="name" name="name" required placeholder="Your Name"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors duration-300" />
        </div>
        <div>
          <label class="block mb-2 font-medium" for="email">Email</label>
          <input v-model="form.email" type="email" id="email" name="email" required placeholder="your@example.com"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors duration-300" />
        </div>
        <div>
          <label class="block mb-2 font-medium" for="message">Message</label>
          <textarea v-model="form.message" id="message" name="message" rows="5" required placeholder="Your Message"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors duration-300"></textarea>
        </div>
        <button type="submit"
          class="w-full py-3 bg-blue-600 rounded hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const successMessage = ref('');

const handleSubmit = async () => {
  try {
    const response = await fetch('https://formspree.io/f/xeoeyjrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      successMessage.value = 'Your message has been sent successfully!';
      form.value = {
        name: '',
        email: '',
        message: ''
      };
    } else {
      successMessage.value = 'Failed to send your message. Please try again later.';
    }
  } catch (error) {
    successMessage.value = 'An error occurred. Please try again later.';
  }
};
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
