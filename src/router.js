import Vue from "vue";
import VueRouter from "vue-router";
import Info from "./components/views/Info";
import Location from "./components/views/Location";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/mainpage/info",
      component: Info
    },
    {
      path: "/mainpage/servicecenter/location",
      component: Location
    }
  ]
});

export default router;