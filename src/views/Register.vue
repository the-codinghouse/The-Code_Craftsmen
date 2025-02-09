<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="handleRegister">
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
          <div class="mb-4">
            <label class="block text-gray-700" for="confirmPassword">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              id="confirmPassword"
              required
              class="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Register
          </button>
        </form>
        <div class="text-center mt-4">
          <p>
            Already have an account? 
            <router-link to="/login" class="text-blue-500 hover:underline">Login</router-link>
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
  
  const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match!');
      return;
    }
    // Replace this alert with a call to your API when ready.
    alert(`Registering with email: ${email.value}`);
  };
  </script>
  