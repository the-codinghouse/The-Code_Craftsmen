<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold mb-8 text-center transition-transform duration-500 transform hover:scale-105">
      Our Services
    </h1>
    
    <!-- Pricing Mode Toggle -->
    <div class="flex justify-center mb-8">
      <button 
        class="px-4 py-2 border rounded-l-md focus:outline-none transition-colors duration-300"
        :class="{'bg-blue-600 text-white': pricingMode === 'monthly'}"
        @click="pricingMode = 'monthly'">
        Monthly
      </button>
      <button 
        class="px-4 py-2 border rounded-r-md focus:outline-none transition-colors duration-300"
        :class="{'bg-blue-600 text-white': pricingMode === 'yearly'}"
        @click="pricingMode = 'yearly'">
        Yearly
      </button>
    </div>
    
    <!-- Services Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
      <div 
        v-for="service in services" 
        :key="service.id" 
        @click="selectedService = service.id"
        :class="[
          'bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105',
          selectedService === service.id ? 'border-2 border-blue-500' : 'border border-gray-700'
        ]"
        class="animate-fadeIn opacity-0"
      >
        <div class="flex items-center space-x-4">
          <div class="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
            <img 
              :src="service.icon" 
              alt="Service Icon" 
              class="w-8 h-8" 
              onerror="this.src='https://via.placeholder.com/50'"
            >
          </div>
          <h2 class="text-2xl font-semibold">{{ service.title }}</h2>
        </div>
        <p class="text-gray-300 mt-4">{{ service.description }}</p>
        <p class="mt-4 font-bold text-xl">
          {{ pricingMode === 'monthly' ? service.monthlyPrice : service.yearlyPrice }}
        </p>
        <button class="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { servicesData, type ServiceType } from '@/services/productServices'
import { ref, onMounted } from 'vue'

const services = ref<ServiceType[]>([])

onMounted(() => {
  services.value = servicesData
})

const selectedService = ref<number | null>(null)
const pricingMode = ref<'monthly' | 'yearly'>('monthly')
</script>

<style scoped>
/* Container max-width (optional) */
.container {
  max-width: 1200px;
}

/* Fade-in Animation */
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
