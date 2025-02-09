<template>
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <p class="text-gray-700 text-sm">
          This website uses cookies to ensure you get the best experience.
        </p>
        <div class="mt-4 flex justify-center">
          <button @click="acceptCookies" class="px-4 py-2 bg-green-400 text-white text-sm font-semibold rounded-lg hover:bg-green-800">
            Accept
          </button>
        </div>
        <div class="mt-4 flex justify-center">
            <button @click="declineCookies" class="px-4 py-2 bg-red-400 text-white text-sm font-semibold rounded-lg hover:bg-red-800">
            Decline
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const showPopup = ref(true);
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    showPopup.value = false;
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    showPopup.value = false;
  };

  
  onMounted(() => {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      showPopup.value = false;
    }
  });
  </script>
  
  <style scoped>
  /* Ensures smooth appearance */
  </style>
  