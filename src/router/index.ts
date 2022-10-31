import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/battle",
      name: "battlePage",
      component: () => import("..//views/Battle.vue"),
    },
    {
      path: "/results",
      name: "resultsPage",
      component: () => import("..//views/Results.vue")
    }
  ],
});

export default router;
