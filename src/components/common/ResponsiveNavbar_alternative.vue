<template>
    <nav class="border-b border-gray-200 bg-blue-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Left Side: Brand -->
          <div class="flex-shrink-0 flex items-center">
            <a href="#" class="text-xl font-bold text-gray-800">MyBrand</a>
          </div>
          <!-- Right Side: Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" class="border-b-2 border-transparent hover:border-indigo-500 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Home
            </a>
            <a href="#" class="border-b-2 border-transparent hover:border-indigo-500 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              About
            </a>
            <a href="#" class="border-b-2 border-transparent hover:border-indigo-500 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contact
            </a>
          </div>
          <!-- Mobile Menu Button -->
          <div class="flex items-center sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <!-- Icon: Hamburger menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu: Show/Hide based on isOpen -->
      <div v-if="isOpen" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700 text-base font-medium">
            Home
          </a>
          <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">
            About
          </a>
          <a href="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  </script>
  
  <style scoped>
  /* You can add component-specific styles here if needed */
  </style>
  