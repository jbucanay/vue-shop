<template>
  <v-app-bar title="Vue Shop" elevation="1" class="font-bold pl-20">
    <v-tabs class="px-20 flex justify-start">
      <v-tab class="capitalize" color="orange" to="/products"> Products</v-tab>
      <v-tab class="capitalize" color="orange" to="/cart">Cart 0</v-tab>
      <v-tab class="capitalize" color="orange" to="/addproduct">Admin</v-tab>
    </v-tabs>
  </v-app-bar>
</template>
