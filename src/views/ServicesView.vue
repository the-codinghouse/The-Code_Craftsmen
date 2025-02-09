<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-center">Our Services</h1>
    
    <!-- Pricing Mode Toggle -->
    <div class="flex justify-center mb-6">
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
    
    <div class="grid gap-6 md:grid-cols-2">
      <div 
        v-for="service in services" 
        :key="service.id" 
        @click="selectedService = service.id"
        :class="[
          'border p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300',
          { 'border-blue-500 scale-105': selectedService === service.id }
        ]"
      >
        <div class="flex items-center mb-4">
          <img :src="service.icon" alt="Service Icon" class="w-12 h-12 mr-4">
          <h2 class="text-2xl font-semibold">{{ service.title }}</h2>
        </div>
        <p class="text-gray-600 mb-4">{{ service.description }}</p>
        <p class="mt-2 font-bold text-xl">
          {{ pricingMode === 'monthly' ? service.monthlyPrice : service.yearlyPrice }}
        </p>
        <button class="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ServiceType {
  id: number;
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  icon: string;
}

const services = ref<ServiceType[]>([
  { 
    id: 1, 
    title: 'Service Package 1', 
    description: 'Description of service package 1. Enjoy premium support and exclusive features.',
    monthlyPrice: '$99', 
    yearlyPrice: '$999', 
    icon: 'https://via.placeholder.com/50'
  },
  { 
    id: 2, 
    title: 'Service Package 2', 
    description: 'Description of service package 2. Perfect for businesses looking for extended services.',
    monthlyPrice: '$199', 
    yearlyPrice: '$1999', 
    icon: 'https://via.placeholder.com/50'
  },
  // Add more services if needed...
])

const selectedService = ref<number | null>(null)
const pricingMode = ref<'monthly' | 'yearly'>('monthly')
</script>

<style scoped>
/* Additional custom styling can go here */
</style>
