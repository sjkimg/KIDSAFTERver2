import Vue from "vue";
import VueRouter from "vue-router";
import Info from "./components/views/Info";
import Location from "./components/views/Location";
import KwLoc from "./components/views/KwLoc";
import TogeCon from "./components/views/TogeCon";
import ChildCenHom from "./components/views/ChildCenHom";
import IvReco from "./components/views/IvReco";
import KeyReco from "./components/views/KeyReco";
import WtReco from "./components/views/WtReco";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/mainpage/info",
      component: Info
    },
    
    {
      path: "/mainpage/servicecenter",
      component: ChildCenHom
    },
    {
      path: "/mainpage/servicecenter/location",
      component: Location
    },
    {
      path: "/mainpage/servicecenter/kwloc",
      component: KwLoc
    },
    {
      path: "/mainpage/togecon",
      component: TogeCon
    },
    {
      path: "/mainpage/togecon/ivreco",
      component: IvReco
    },
    {
      path: "/mainpage/togecon/keyreco",
      component: KeyReco
    },
    {
      path: "/mainpage/togecon/wtreco",
      component: WtReco
    },
  ]
});

export default router;