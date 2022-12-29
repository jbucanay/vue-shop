<template>
  <v-carousel cycle hide-delimiters height="300" class="w">
    <v-carousel-item
      v-for="discount in discounts.currentDiscounts"
      :key="discount.discount_id"
      cover
    >
      <v-sheet
        class="bg-cover bg-center"
        :style="`background-image: url(${discount.discount_image}); height: 100%`"
        fill-height
      >
        <v-row
          class="fill-height flex-col align-start justify-center pl-40 text-white"
        >
          <div class="font-extrabold text-3xl pb-2">
            Up to {{ discount.discount_percent }}% savings on
            {{ discount.discount_name }}
          </div>
          <div class="font-bold text-lg pb-2">
            {{ discount.discount_description }}
          </div>
          <v-btn
            class="normal-case"
            variant="outlined"
            rounded="0"
            append-icon="mdi-arrow-right"
            size="large"
            >Check them out</v-btn
          >
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { useDiscountStore } from "@/stores/DiscountStore";
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";

const discounts = useDiscountStore();
const { currentDiscounts } = storeToRefs(discounts);

onMounted(() => {
  discounts.getDiscounts();
});

onUnmounted(() => {
  discounts.$reset();
});
</script>

<style scoped></style>
