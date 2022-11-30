<template>
  <v-btn flat class="bg-orange-500 text-black" rounded="0">
    <slot name="adminform">Submit</slot>
    <slot name="eachproduct"> Add to cart</slot>
  </v-btn>
</template>

<!-- type="submit"
            @click="sendData" -->
