<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold">{{ title || 'Contact Us' }}</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">✕</button>
      </div>

      <!-- Contact Form -->
      <form action="https://formspree.io/f/yourFormId" method="POST" class="space-y-4 mt-4">
        <div>
          <label class="block mb-1" for="name">Name</label>
          <input type="text" id="name" name="name" required class="w-full border p-2 rounded" />
        </div>
        <div>
          <label class="block mb-1" for="email">Email</label>
          <input type="email" id="email" name="email" required class="w-full border p-2 rounded" />
        </div>
        <div>
          <label class="block mb-1" for="message">Message</label>
          <textarea id="message" name="message" rows="4" required class="w-full border p-2 rounded"></textarea>
        </div>
        <div class="flex justify-between">
          <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
            Cancel
          </button>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{ isOpen: boolean; title?: string }>();
const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>
