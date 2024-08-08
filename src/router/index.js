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
      path: "/about-takoradi-international-schools",
      name: "about-takoradi-international-school",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/about-takoradi-international-school",
      name: "history",
      component: () => import("../views/AboutTIS.vue"),
    },
    {
      path: "/about-educational-levels",
      name: "Educational Levels",
      component: () => import("../views/EducationalLevels.vue"),
    },
    {
      path: "/academic-programme",
      name: "Academic Programme",
      component: () => import("../views/AcademicProgramme.vue"),
    },
    {
      path: "/academic-calender-and-events",
      name: "Academic Calender And Events",
      component: () => import("../views/AcademicCalender.vue"),
    },
    {
      path: "/news-and-updates",
      name: "News And Updates",
      component: () => import("../views/NewsAndUpdates.vue"),
    },
    {
      path: "/facilities",
      name: "Facilities",
      component: () => import("../views/FacilitiesPage.vue"),
    },
    {
      path: "/management",
      name: "management",
      component: () => import("../views/ManagementTeam.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryPage.vue"),
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
  },
});

export default router;
