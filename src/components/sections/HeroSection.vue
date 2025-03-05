<template>
    <section class="relative bg-craftsman-dark-900 py-32">
      <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 text-center">
        <h1 class="font-heading text-5xl md:text-6xl text-craftsman-amber-500 mb-6">
          Welcome to
          <span class="text-blue-500">THE CODE CRAFTSMEN</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Where you can get the latest update on our projects.
        </p>
        <div class="mt-6">
          <a href="#" v-on:click="getStarted()" class="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Get Started
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic needed for now, but we might add dynamic props later.
  function getStarted(){
    alert("send to login/register");
  }
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  