<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
</script>

<template>
  <div class="app-container">
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark">
      <div class="navbar-nav">
        <RouterLink to="/" class="nav-item nav-link">主頁</RouterLink>
        <a @click="authStore.logout()" class="nav-item nav-link">登出</a>
      </div>
    </nav>
    <div class="container pt-4 pb-4">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
.navbar {
  background-color: #00635e;
}
</style>
