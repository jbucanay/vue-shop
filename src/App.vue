<template>
  <v-app class="mb-20">
    <nav-bar></nav-bar>
    <v-main class="flex flex-col align-center">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>
