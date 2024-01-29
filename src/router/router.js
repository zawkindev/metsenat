import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
    meta: { layout: "dashboard" },
    children: [
      {
        path: "",
        component: () => import("../views/HomeView.vue"),
      },
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
    component: AuthLayout,
    children: [
      {
        path: "login",
        component: () => import("../views/LoginView.vue"),
        meta: { layout: "auth" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
