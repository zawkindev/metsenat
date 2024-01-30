import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "default" },
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
    component: () => import("../views/AuthView.vue"),
    meta: { layout: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
