// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path' // Add this line
// import Markdown from 'vite-plugin-md'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/the-code-craftsmen/',
//   plugins: [vue({
//     include: [/\.vue$/, /\.md$/], // process .md files as Vue components
//   }),Markdown(),],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'), // Add this
//     },
//   },
  
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Add this line
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/the-code-craftsmen/', // Ensure this is set
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // process .md files as Vue components
  }), Markdown()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add this
    },
  },
})
