import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/HomeView/index.vue";
import ContactFormView from "../views/ContactFormView/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactFormView,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
