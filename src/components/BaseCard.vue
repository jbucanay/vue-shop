<template>
  <v-card
    :style="'border: 1px solid gainsboro;'"
    variant="elevated"
    elevation="1"
    width="700"
    class="mt-10"
    rounded="0"
  >
    <slot name="cartproduct"></slot>
    <slot name="adminForm"></slot>
    <slot name="displayproducts"></slot>
    <slot name="login"></slot>
  </v-card>
</template>
