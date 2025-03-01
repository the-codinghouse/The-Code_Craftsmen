<template>
  <nav class="bg-craftsman-dark-900 border-b border-craftsman-dark-800">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Brand -->
        <router-link to="/"
          class="font-heading text-2xl text-craftsman-amber-500 hover:text-craftsman-amber-600 transition-colors"
          style="margin: -30px;">
          <img src="/assets/logo-no-bg.png" alt="" width="100px" />
        </router-link>

        <!-- Desktop Links -->
        <div class="hidden md:flex space-x-8">
          <router-link v-for="link in links" :key="link.path" :to="link.path"
            class="text-gray-100 hover:text-craftsman-amber-500 transition-colors">
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-100 focus:outline-none">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Links -->
      <div v-if="isMenuOpen" class="md:hidden mt-4">
        <div class="flex flex-col space-y-4">
          <router-link v-for="link in links" :key="link.path" :to="link.path"
            class="block text-gray-100 hover:text-craftsman-amber-500 transition-colors" @click="isMenuOpen = false">
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuth } from '@/composables/useAuth';

const { user } = useAuth();
const isMenuOpen = ref(false);

const links = computed(() => {
  const baseLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];
  // Show Profile if logged in, else Account (for login/register)
  if (user.value) {
    baseLinks.push({ name: 'Profile', path: '/profile' });
  } else {
    baseLinks.push({ name: 'Account', path: '/auth' });
  }
  return baseLinks;
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Additional styling as needed */
</style>
@/composables/userAuth@/composables/useAuth