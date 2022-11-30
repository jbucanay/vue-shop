<template>
  <v-card
    :style="'border: 1px solid gray;'"
    variant="elevated"
    elevation="1"
    width="700"
    class="mt-10"
    rounded="30"
  >
    <slot name="adminForm"></slot>
    <slot name="displayproducts"></slot>
  </v-card>
</template>
