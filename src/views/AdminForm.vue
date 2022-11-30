<template>
  <base-card>
    <template #adminForm>
      <v-card-title class="text-center">Enter Product Information</v-card-title>
      <v-card-text>
        <form @submit.prevent="submitForm">
          <label for="name">Name</label><br />
          <input type="text" name="name" v-model="name" /><br />
          <label for="price">Price</label><br />
          <input
            type="number"
            name="price"
            v-model.number="price"
            min="1"
          /><br />
          <label for="quantity">Quantity</label><br />
          <input
            type="number"
            name="quantity"
            v-model.number="quantity"
          /><br />
          <p><label for="type">Type</label></p>
          <select name="type" v-model="type">
            <option disabled selected value>--Select--</option>
            <option>Monitors</option>
            <option>Accessories</option>
            <option>Networking</option>
            <option>Drivers & Storage</option>
            <option>Computer</option>
            <option>Computer Parts & Components</option>
            <option>Printers & Ink</option>
            <option>Software</option>
            <option>Office & School Suplies</option>
          </select>
          <br />
          <label for="image">Image</label><br />
          <input type="text" name="image" v-model="image" />
          <base-button @click="sendData" type="submit">
            <template #adminform> Submit </template>
          </base-button>
        </form>
      </v-card-text>
    </template>
  </base-card>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import BaseCard from "../components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";

import { productsStore } from "../stores/ProductsStore";

// store
const store = productsStore();
const { products } = storeToRefs(store);
//data
const name = ref("");
const price = ref(0);
const quantity = ref(0);
const type = ref("");
const image = ref("");

//methods
const sendData = () => {
  if (name !== "" || price !== 0 || quantity !== 0 || type !== "") {
    const productValues = {
      id: Date.now(),
      name: name.value,
      price: price.value,
      quantity: quantity.value,
      type: type.value,
      image: image.value,
    };
    // console.log(productValues);
    store.createProduct(productValues);
    name.value = "";
    type.value = "";
    image.value = "";
    price.value = 0;
    quantity.value = 0;
  }
};

//lifecycle hooks
</script>

<style scoped>
input,
textarea,
select {
  width: 100%;
  padding: 3px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 3px;
}
label {
  font-weight: bolder;
}

input:focus {
  border: orange solid 1px;
}
</style>
