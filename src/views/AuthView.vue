<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
        <div class="bg-gray-800 p-8 rounded-lg shadow-md w-96 animate-fadeIn">
            <h2 class="text-2xl font-bold mb-6 text-center">{{ isLoginMode ? 'Login' : 'Register' }}</h2>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label class="block text-gray-300" for="email">Email</label>
                    <input v-model="email" type="email" id="email" required placeholder="you@example.com"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                </div>

                <div>
                    <label class="block text-gray-300" for="password">Password</label>
                    <input v-model="password" type="password" id="password" required placeholder="Password"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                </div>

                <!-- Show confirm password only in register mode -->
                <div v-if="!isLoginMode">
                    <label class="block text-gray-300" for="confirmPassword">Confirm Password</label>
                    <input v-model="confirmPassword" type="password" id="confirmPassword" required
                        placeholder="Confirm Password"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                </div>

                <button type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">
                    {{ isLoginMode ? 'Login' : 'Register' }}
                </button>
            </form>

            <div v-if="errorMessage" class="mt-4 text-center text-red-400">{{ errorMessage }}</div>
            <div v-if="successMessage" class="mt-4 text-center text-green-400">{{ successMessage }}</div>

            <div class="text-center mt-4">
                <p>
                    {{ isLoginMode ? "Don't have an account?" : "Already have an account?" }}
                    <button @click="toggleMode" class="text-blue-400 hover:underline ml-1">
                        {{ isLoginMode ? 'Register' : 'Login' }}
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';

const isLoginMode = ref(true);
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const { login, register } = useAuth();

const handleSubmit = () => {
    errorMessage.value = '';
    successMessage.value = '';
    try {
        if (isLoginMode.value) {
            // Attempt login
            login(email.value, password.value);
            successMessage.value = `Logged in as: ${email.value}`;
        } else {
            // Attempt registration
            register(email.value, password.value, confirmPassword.value);
            successMessage.value = `Registered successfully as: ${email.value}`;
        }
    } catch (err: any) {
        errorMessage.value = err.message || 'An error occurred';
    }
};

const toggleMode = () => {
    isLoginMode.value = !isLoginMode.value;
    // Clear any messages and fields when switching modes
    errorMessage.value = '';
    successMessage.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
};
</script>

<style scoped>
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
@/composables/userAuth@/composables/useAuth