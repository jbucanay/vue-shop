<template>
  <!-- <v-card class="mx-auto pa-2" max-width="300"> -->
  <v-list density="compact" variant="plain">
    <v-list-subheader class="font-medium text-black text-base"
      >Shop by category</v-list-subheader
    >
    <v-list-item
      v-for="(item, i) in items"
      variant="plain"
      :key="i"
      :value="item"
      active-class="font-bold"
      class="text-black text-sm"
      lines="1"
      >{{ item }}</v-list-item
    >
  </v-list>
  <!-- </v-card> -->
</template>

<script setup>
import { ref } from "vue";

const items = ref(["Real-Time", "Audience", "Conversions"]);
</script>

<style lang="scss" scoped></style>
