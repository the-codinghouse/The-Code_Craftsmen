<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 animate-fadeIn">
        <div class="bg-gray-800 p-8 rounded-lg shadow-md w-96 text-center">
            <h2 class="text-2xl font-bold mb-4">Profile</h2>
            <p class="mb-6">Hello, <span class="font-semibold">{{ user?.email }}</span></p>
            <button @click="handleLogout"
                class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition transform hover:scale-105">
                Logout
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { useRouter } from 'vue-router';

const { user, logout } = useAuth();
const router = useRouter();

const handleLogout = () => {
    logout();
    router.push('/');
};

// For convenience, get the current user
const currentUser = computed(() => user.value);
console.log(currentUser.value);

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