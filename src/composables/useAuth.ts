// src/composables/useAuth.ts
import { ref } from "vue";

export interface User {
  email: string;
  password: string;
}

const user = ref<User | null>(null);

export function useAuth() {
  function login(email: string, password: string) {
    // Simulate API call – in production, replace with real API call
    user.value = { email, password };
  }

  function register(email: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    // Simulate registration API call
    user.value = { email, password };
  }

  function logout() {
    user.value = null;
  }

  return { user, login, register, logout };
}
