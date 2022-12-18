<template>
  <base-card>
    <template #login>
      <form>
        <label for="name">Name</label><br />
        <input type="text" name="name" placeholder="Product name" /><br />
        <label for="price">Price</label><br />
        <input step="0.01" type="number" name="price" min="0" /><br />
        <base-button>
          <template #login> Login </template>
        </base-button>
      </form>
    </template>
  </base-card>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
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
