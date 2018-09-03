import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    }
  ]
})
