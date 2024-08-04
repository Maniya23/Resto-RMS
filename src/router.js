import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },

  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },

  {
    name: "Login",
    component: Login,
    path: "/login",
  }
];

const router = new VueRouter({
  routes,
});

export default router;
