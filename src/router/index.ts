import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView.vue") },
  { path: "/blog", component: () => import("@/views/BlogView.vue") },
  {
    path: "/the-code-craftsmen/blog/:slug",
    name: "BlogDetails",
    component: () => import("@/views/BlogDetails.vue"),
  },
  { path: "/services", component: () => import("@/views/ServicesView.vue") },
  { path: "/contact", component: () => import("@/views/ContactView.vue") },
  // Combined auth route for login/register
  { path: "/auth", component: () => import("@/views/AuthView.vue") },
  // Profile route (visible when logged in)
  { path: "/profile", component: () => import("@/views/ProfileView.vue") },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
