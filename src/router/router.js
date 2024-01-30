import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () =>
      localStorage.getItem("access-token")
        ? import("../views/DashboardView.vue")
        : import("../views/HomeView.vue"),
    children: [
      {
        path: "students",
        name: "StudentList",
        children: [
          {
            path: "/:id",
            name: "StudentProfile",
          },
        ],
      },
      {
        path: "sponsors",
        name: "SponsorsList",
        children: [
          {
            path: "/:id",
            name: "SponsorProfile",
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    meta: { layout: "auth" },
    component: () => import("../views/AuthView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
