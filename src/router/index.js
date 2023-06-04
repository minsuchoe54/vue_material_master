import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
// import Tables from "../views/Tables.vue";
// import Billing from "../views/Billing.vue";
// import RTL from "../views/Rtl.vue";
// import Notifications from "../views/Notifications.vue";
import ProfileView from "../views/ProfileView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Tables,
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   component: Billing,
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL",
  //   component: RTL,
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   component: Notifications,
  // },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/info",
    name: "Info",
    component: () => import('../views/InfoView.vue')
  },
  {
    path: "/info/:id",
    name: "Profile",
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import('../views/Blog.vue')
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import('../views/Payment.vue')
  },
  // {
  //   path: "/profile/:id",
  //   name: "Info",
  //   component: () => import('../views/Info.vue')
  // },
  {
    path: "/target",
    name: "Target",
    component: () => import('../views/TargetView.vue')
  },
  {
    path: "/infocomment",
    name: "Infocomment",
    component: () => import('../views/InfoCommentView.vue')
  },
  {
    path: "/infophoto",
    name: "Infophoto",
    component: () => import('../views/Infophoto.vue')
  },
  {
    path: "/bothistory",
    name: "Bothistory",
    component: () => import('../views/Bothistory.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
