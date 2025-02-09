// src/stores/ui.ts
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isDarkMode: true, // Default to dark
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark', this.isDarkMode)
    },
  },
})