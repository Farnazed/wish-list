<script setup>
import { ref } from "vue";
import { signIn } from "../services/auth";
const name = ref(null);
const signInView = ref(null);
const password = ref(null);
const repeatPassword = ref(null);

function signUserIn() {
  if (
    signInView.value &&
    password.value &&
    password.value === repeatPassword.value
  ) {
    signIn({ user: name.value, password: password.value }).then((res) => {
      console.log(res);
    });
  }
}
</script>

<template>
  <div
    class="flex flex-col rounded-md p-8 justify-center mx-5 md:mx-auto my-7 items-center bg-slate-700 max-w-sm gap-5"
  >
    <template v-if="signInView">
      <input
        v-model="name"
        placeholder="user name"
        class="bg-transparent border-yellow-400 border rounded-md p-2 w-full"
      />
      <input
        v-model="password"
        placeholder="password"
        class="bg-transparent border-yellow-400 border rounded-md p-2 w-full"
      />
      <input
        v-model="repeatPassword"
        placeholder="repeat password"
        class="bg-transparent border-yellow-400 border rounded-md p-2 w-full"
      />
      <div class="flex flex-row gap-4 justify-end w-full">
        <button
          @click="signUserIn"
          class="text-white bg-yellow-500/10 hover:bg-yellow-800 px-3 py-2 rounded-lg border"
        >
          Sign in
        </button>
        <button
          class="text-white bg-yellow-500/10 hover:bg-yellow-800 px-3 py-2 rounded-lg border"
        >
          Log in
        </button>
      </div>
    </template>
    <template v-else>
      <input
        v-model="name"
        placeholder="name"
        class="bg-transparent border-yellow-400 border rounded-md p-2 w-full"
      />
      <input
        v-model="password"
        placeholder="password"
        class="bg-transparent border-yellow-400 border rounded-md p-2 w-full"
      />
      <div class="flex flex-row gap-4 justify-end w-full">
        <button
          @click="signInView = true"
          class="text-white bg-yellow-500/10 hover:bg-yellow-800 px-3 py-2 rounded-lg border"
        >
          Sign in
        </button>
        <button
          class="text-white bg-yellow-500/10 hover:bg-yellow-800 px-3 py-2 rounded-lg border"
        >
          Log in
        </button>
      </div>
    </template>
  </div>
</template>
