import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // This automatically uses /the-code-craftsmen/
  routes: [
    { path: "/", component: () => import("@/views/HomeView.vue") },
    { path: "/blog", component: () => import("@/views/BlogView.vue") },
    {
      path: "/the-code-craftsmen/blog/:slug",
      name: "BlogDetails",
      component: () => import("@/views/BlogDetails.vue"),
    },
    { path: "/services", component: () => import("@/views/ServicesView.vue") },
    { path: "/contact", component: () => import("@/views/ContactView.vue") },
    { path: "/auth/login", component: () => import("@/views/Login.vue") },
    { path: "/auth/register", component: () => import("@/views/Register.vue") },
  ],
});

export default router;
