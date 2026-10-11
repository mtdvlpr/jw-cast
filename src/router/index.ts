/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:language',
      component: Index,
      name: 'Home',
    },
    {
      path: '/',
      redirect: () => `/${navigator.language.split('-', 1)[0] || 'nl'}`,
    },
  ],
});

export default router;
