<template>
  <base-card width="400" rounded="1" elevation="0">
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
          <p v-if="authStore.loginFailed" class="text-red my-1">
            {{ authStore.loginFailed }}
          </p>
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
  <p class="text-gray-700 text-sm mb-2 mt-5 amazon">New to Vuebay?</p>
  <base-button class="bg-gray-200 normal-case" width="400" rounded="2">
    <template #signup> Create your Vuebay acount </template>
  </base-button>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useAuth } from "@/stores/AuthStore";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";

//router
const router = useRouter();

//use authStore
const authStore = useAuth();
const logedIn = computed(() => authStore.isAuthenticated);

// storeToRefs returns the store as a ref value so will need to use some.value like in refs to get the value, otherwise you get refs objects
const { token, errorMessage } = storeToRefs(authStore);

//data
const email = ref("");
const password = ref("");

//methods
const signIn = () => {
  if (email.value && password.value) {
    authStore.loginUser(email.value, password.value);
    if (authStore.isAuthenticated) {
      router.replace("/products");
    }
    if (authStore.loginFailed) {
      email.value = "";
      password.value = "";
    }
  }
};
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

.amazon::after {
  content: "";
  width: 10%;
  background-color: transparent;
  display: block;
  height: 2px;
  border-top: 1px solid #e7e7e7;
  position: absolute;
  top: 45%;
  margin-top: -1px;
  z-index: 1;
  left: 54%;
}

.amazon::before {
  content: "";
  width: 10%;
  background-color: transparent;
  display: block;
  height: 1px;
  border-top: 1px solid #e7e7e7;
  position: absolute;
  top: 45%;
  margin-top: -1px;
  z-index: 1;
  right: 54%;
}
</style>
