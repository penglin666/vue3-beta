import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect:"/home",
    children: [
     {
       path:'/home',
       component:()=>import("../views/Home/Home.vue")
     },
     {
      path:'/pics',
      component:()=>import("../views/Pics/Pics.vue")
    },
    {
      path:'/note',
      component:()=>import("../views/Note/Note.vue")
    },
    {
      path:'/download',
      component:()=>import("../views/Download/Download.vue")
    },
    {
      path:'/talk',
      component:()=>import("../views/Talk/Talk.vue")
    },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router;
