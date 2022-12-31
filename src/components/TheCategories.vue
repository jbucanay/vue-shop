<template>
  <v-list density="compact" variant="plain">
    <v-list-subheader class="font-medium text-black text-base mb-2"
      >Category</v-list-subheader
    >
    <v-list-item
      v-for="(item, i) in items"
      variant="plain"
      :key="i"
      :value="item"
      active-class="font-extrabold"
      class="text-black text-sm -mt-2"
      lines="1"
      >{{ item }}</v-list-item
    >
  </v-list>
</template>

<script setup>
import { ref } from "vue";

const items = ref(["Computers", "Shoes", "Cases"]);
</script>

<style lang="scss" scoped></style>
