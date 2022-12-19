<template>
  <div>hit</div>
</template>

<script setup>
import { useAuth } from "@/stores/AuthStore";
import { useRouter } from "vue-router";
import { onBeforeMount, onMounted } from "vue";

const authStore = useAuth();
const router = useRouter();
onBeforeMount(() => {
  authStore.logout();
  router.replace("/login");
});
</script>

<style scoped></style>
