<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-gray-700" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              required
              class="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <div class="text-center mt-4">
          <p>
            Don't have an account? 
            <router-link to="/register" class="text-blue-500 hover:underline">Register</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    // Replace this alert with a call to your API when ready.
    alert(`Logging in with email: ${email.value}`);
  };
  </script>
  