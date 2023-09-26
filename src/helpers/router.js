import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/stores";
import { HomeView, LoginView, SignupView, BuyView } from "@/views";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: HomeView },
    { path: "/login", component: LoginView },
    { path: "/signup", component: SignupView },
    { path: "/buy", component: BuyView },
  ],
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  console.log(typeof to.href);

  if (to.href == "/signup" || to.href == "/buy") {
    // return "/signup";
  } else if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});
