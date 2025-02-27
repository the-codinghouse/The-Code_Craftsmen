<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="bg-gray-800 p-8 rounded-lg shadow-md w-96 animate-fadeIn">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-gray-300" for="email">Email</label>
          <input v-model="email" type="email" id="email" required placeholder="you@example.com"
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300" />
        </div>
        <div>
          <label class="block text-gray-300" for="password">Password</label>
          <input v-model="password" type="password" id="password" required placeholder="Password"
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300" />
        </div>
        <div>
          <label class="block text-gray-300" for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" required placeholder="Confirm Password"
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300" />
        </div>
        <button type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">
          Register
        </button>
      </form>
      <div v-if="errorMessage" class="mt-4 text-center text-red-400">{{ errorMessage }}</div>
      <div v-if="successMessage" class="mt-4 text-center text-green-400">{{ successMessage }}</div>
      <div class="text-center mt-4">
        <p>
          Already have an account?
          <router-link to="/login" class="text-blue-400 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const handleRegister = () => {
  errorMessage.value = '';
  successMessage.value = '';
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match!';
    return;
  }
  // Simulate registration API call (replace with real API call as needed)
  successMessage.value = `Successfully registered with email: ${email.value}`;
};
</script>

<style scoped>
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
