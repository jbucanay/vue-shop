<template>
  <base-card width="400" rounded="1">
    <template #login>
      <v-card-title>Sign in</v-card-title>
      <v-card-text>
        <form>
          <label for="email">User</label>
          <input type="email" name="email" v-model="email" required />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            required
            minlength="8"
          />
          <base-button
            width="700"
            rounded="2"
            elevation="1"
            class="bg-orange-300"
            @click="signIn"
          >
            <template #login> Sign in </template>
          </base-button>
        </form>
      </v-card-text>
    </template>
  </base-card>
  <p>New to Vuebay?</p>
  <base-button class="bg-gray-200">
    <template #signup> Create your Vuebay acount </template>
  </base-button>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useAuth } from "@/stores/AuthStore";
import { ref } from "vue";

//use authStore
const authStore = useAuth();

//data
const email = ref("");
const password = ref("");

//methods
const signIn = () => {
  if (email.value && password.value) {
    authStore.loginUser(email.value, password.value);
  }
};

console.log(authStore.user.name);
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
