<script setup>
import { storeToRefs } from "pinia";

import { useAuthStore, useUsersStore } from "@/stores";

import { ref } from "vue";

import Popup from "../components/Popup.vue";

const popupTriggers = ref({
  buttonTrigger: true,
});

const TogglePopup = (trigger) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
};

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
  <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')"> </Popup>
  <div>
    <h1>您好 {{ authUser?.firstName }}!</h1>
    <h3>以下是您剩餘的餘額：</h3>
    <h3>NT$ 6,143</h3>
    <!-- <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.firstName }} {{ user.lastName }}</li>
    </ul>
    <div v-if="users.loading" class="spinner-border spinner-border-sm"></div>
    <div v-if="users.error" class="text-danger">Error loading users: {{ users.error }}</div> -->
  </div>
</template>

<style scoped></style>
