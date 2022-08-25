import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/HomeView/index.vue";
import ContactFormView from "../views/ContactFormView/index.vue";
import ServicesView from "@/views/ServicesView/index.vue";
import CatalogView from "@/views/CatalogView/index.vue";
import AdminView from "@/views/AdminView/index.vue";

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
  },
  {
    path: "/services/:service",
    name: "Services",
    component: ServicesView,
    props: true,
  },
  {
    path: "/catalog/:category",
    name: "Catalog",
    component: CatalogView,
    props: true,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
