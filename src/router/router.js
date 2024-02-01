import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () => import("views/HomeView.vue"),
    beforeEnter: (_, __, next) => {
      if (localStorage.getItem("access-token")) {
        next({ name: "Dashboard" });
      } else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { layout: "default" },
    component: () => import("views/DashboardView.vue"),
    children: [
      {
        path: "",
        name: "Stats",
        component: () => import("views/dashboard/StatsView.vue"),
      },
      {
        path: "students",
        name: "StudentsList",
        component: () => import("views/dashboard/StudentsView.vue"),
      },
      {
        path: "students/:id",
        name: "StudentDetails",
        component: () => import("views/dashboard/student/StudentDetails.vue"),
      },
      {
        path: "sponsors",
        name: "SponsorsList",
        component: () => import("views/dashboard/SponsorsView.vue"),
      },
      {
        path: "sponsors/:id",
        name: "SponsorDetails",
        component: () => import("views/dashboard/sponsor/SponsorDetails.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    meta: { layout: "auth" },
    component: () => import("views/AuthView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
