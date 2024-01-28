import VueRouter from "vue-router";
import HomeLayout from "./layouts/HomeLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
    children: [
      {
        path: "",
        component: () => import("./views/HomeView.vue"),
        meta: { layout: "home" },
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
        component: () => import("./views/LoginView.vue"),
        meta: { layout: "auth" },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    meta: { layout: "dashboard" },
    children: [
      {
        path: "",
        component: () => import("./views/DashboardView.vue"),
        meta: { layout: "dashboard" },
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
];

const router = new VueRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
