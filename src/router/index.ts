import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/battle",
      name: "battlePage",
      component: () => import("../views/BattleView.vue"),
    },
    {
      path: "/results",
      name: "resultsPage",
      component: () => import("../views/ResultsView.vue"),
    },
  ],
});

export default router;
