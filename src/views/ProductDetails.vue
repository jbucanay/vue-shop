<template>
  <v-container
    fluid
    v-for="item in theProduct"
    :key="item.product_id"
    class="mt-6"
  >
    <v-row>
      <v-col>
        <v-list density="compact" max-width="100">
          <v-list-item
            lines="one"
            variant="plain"
            width="100"
            v-for="media in item.media"
            :key="media.media_id"
            :value="media.media_link"
            :model-value="media.media_id"
            active-class="border-orange-500 border-solid border-2"
          >
            <v-img
              class="m-0 p-0"
              width="100"
              cover
              :src="media.media_link"
            ></v-img>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <v-img
          width="300"
          :src="item.media[0].media_link"
          class="bg-red p-0 m-0"
        >
        </v-img>
      </v-col>
      <v-col>
        <p>{{ item.product_name }}</p>
        <div>
          <span v-if="item.discount"
            >-{{ item.discount.discount_percent }}% ${{
              item.price - item.price * (item.discount.discount_percent / 100)
            }}</span
          >
          <span v-else>${{ item.price }}</span>
          <p v-if="item.discount">
            List price: <span class="line-through">{{ item.price }}</span>
          </p>
        </div>
        <h3 class="font-bold">About this item</h3>
        <ul>
          <li>{{ item.product_description }}</li>
        </ul>
      </v-col>
      <v-col class="border-solid border border-gray-500 rounded-md">
        <span v-if="item.discount"
          >${{
            item.price - item.price * (item.discount.discount_percent / 100)
          }}</span
        >
        <p v-else>${{ item.price }}</p>
        <div>
          <v-icon icon="mdi-map-marker-outline"></v-icon>
          <span>Select Delivery Location</span>
        </div>
        <label for="qty">qty</label><br />
        <select
          name="qty"
          class="border-gray-500 border-solid border"
          v-model="selectedQuantity"
        >
          <option
            v-for="(inventory, i) in item.inventory.quantity"
            :key="i"
            :value="inventory"
          >
            {{ inventory }}
          </option>
        </select>
        <base-button
          class="my-5 rounded-2xl w-full bg-yellow-400"
          rounded="3"
          @click="
            cartstore.addProductToCart(
              {
                selectedQuantity,
                id: item.product_id,
                image: item.media[0].media_link,
                price: item.price,
                name: item.product_name,
                inventoryId: item.inventory.inventory_id,
              },
              {
                inventoryId: item.inventory.inventory_id,
                remainder: item.inventory.quantity - selectedQuantity,
              }
            )
          "
        >
          <template #cartremove> Add to Cart </template>
        </base-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, onUpdated } from "vue";
import { productsStore } from "../stores/ProductsStore";
import { useCartStore } from "@/stores/CartStore";
import { storeToRefs } from "pinia";
import BaseButton from "@/components/BaseButton.vue";

//props
const props = defineProps({
  id: {
    required: true,
  },
});

//data
const selectedImage = ref("");
const selectedQuantity = ref(1);
const selectItems = ref(["Featured items", "Lowest Price", "Highest Price"]);

//store
const productStore = productsStore();
const { returnProducts: theProduct } = storeToRefs(productStore);
const cartstore = useCartStore();

//lifecyclehooks
onMounted(() => {
  productStore.getOneProduct(props.id);
});

onBeforeUnmount(() => {
  // get rid of data in store everytime I save code.
  productStore.$reset();
});
</script>

<style scoped></style>
