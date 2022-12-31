<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-list density="compact" variant="plain">
          <v-list-item
            v-for="item in theProduct"
            variant="plain"
            :key="item"
            :value="item"
            active-class="font-extrabold"
            class="text-black text-sm -mt-2"
            lines="1"
            >{{ item.media }}</v-list-item
          >
        </v-list>
      </v-col>
      <v-col>
        <p>big image</p>
      </v-col>
      <v-col>
        <p>product details</p>
      </v-col>
      <v-col>
        <p>add to cart</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { productsStore } from "../stores/ProductsStore";
import { storeToRefs } from "pinia";

const items = ref(["Computers", "Shoes", "Cases"]);
const productStore = productsStore();
const { returnProducts: theProduct } = storeToRefs(productStore);
const { media } = theProduct;

//lifecyclehooks
onMounted(() => {
  productStore.getOneProduct(props.id);
});

onBeforeUnmount(() => {
  // get rid of data in store everytime I save code.
  productStore.$reset();
});

const props = defineProps({
  id: {
    required: true,
  },
});
</script>

<style scoped></style>
