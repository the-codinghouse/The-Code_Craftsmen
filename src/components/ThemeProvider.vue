<!-- src/components/ThemeProvider.vue -->
<script setup lang="ts">
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()
</script>

<template>
  <div :class="{ 'dark': uiStore.isDarkMode }">
    <slot />
  </div>
</template>