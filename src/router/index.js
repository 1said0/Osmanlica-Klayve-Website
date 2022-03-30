import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/windows",
    name: "windows",

    component: () =>
      import(/* webpackChunkName: "microsoft" */ "../views/windows.vue"),
  },
  {
    path: "/macos",
    name: "macos",
    component: () => import(/* webpackChunkName: "macos" */ "../views/macos"),
  },
  {
    path: "/android",
    name: "android",
    component: () =>
      import(/* webpackChunkName: "android" */ "../views/android"),
  },
  {
    path: "/linux",
    name: "linux",
    component: () => import(/* webpackChunkName: "android" */ "../views/linux"),
  },

  {
    path: "/ios",
    name: "ios",
    component: () => import(/* webpackChunkName: "ios" */ "../views/ios"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
