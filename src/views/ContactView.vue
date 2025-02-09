<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
    <form action="https://formspree.io/f/yourFormId" method="POST" class="space-y-4 max-w-lg">
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
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Message</button>
    </form>
  </div>
</template>

<script setup lang="ts">
// If needed, you can add reactive logic for form submission and validation.
</script>

<style scoped>
/* Custom styles if needed */
</style>
