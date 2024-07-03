import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-takoradi-international-school",
      name: "about-takoradi-international-school",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/about/our-history",
      name: "history",
      component: () => import("../views/HistoryPage.vue"),
    },
    {
      path: "/about/principal's-message",
      name: "message",
      component: () => import("../views/PrincipalMessage.vue"),
    },
    {
      path: "/about/departments",
      name: "departments",
      component: () => import("../views/DepartmentsPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
