<template>
  <div class="flex items-center justify-center min-h-screen">
    <MultiCard class="w-full max-w-md p-6 bg-white">
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        {{ isLogin ? 'Login' : 'Sign Up' }}
    </h2>
    <form @submit.prevent="handleSubmit" class=" grid grid-cols-1 gap-4 mt-4">
      <SingleCard v-if="!isLogin">
          <input v-model="name" type="text" class="bg-inherit" placeholder="Name" required>
      </SingleCard>

      <SingleCard>
        <input v-model="email" type="email" class="bg-inherit" placeholder="Email" required>
      </SingleCard>

      <SingleCard>
        <input v-model="password" type="password" class="bg-inherit" placeholder="Password" required>
      </SingleCard>

      <ButtonComp class="w-full">
        {{ isLogin ? 'Login' : 'Sign Up' }}
      </ButtonComp>
    </form>
    <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <button @click="toggleForm" class="text-blue-500 hover:underline">
          {{ isLogin ? 'Sign Up' : 'Login' }}
        </button>
    </p>
  </MultiCard>

  </div>

  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        {{ isLogin ? 'Login' : 'Sign Up' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="mt-4">
        <div v-if="!isLogin">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input v-model="name" type="text" class="input-field" placeholder="Enter your name" required>
        </div>

        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Email</label>
        <input v-model="email" type="email" class="input-field" placeholder="Enter your email" required>

        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Password</label>
        <input v-model="password" type="password" class="input-field" placeholder="Enter your password" required>

        <button type="submit" class="btn-primary mt-4">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <button @click="toggleForm" class="text-blue-500 hover:underline">
          {{ isLogin ? 'Sign Up' : 'Login' }}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import { ref } from 'vue';

const isLogin = ref(true);
const name = ref('');
const email = ref('');
const password = ref('');

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};

const handleSubmit = () => {
  if (isLogin.value) {
    console.log('Logging in with:', { email: email.value, password: password.value });
  } else {
    console.log('Signing up with:', { name: name.value, email: email.value, password: password.value });
  }
};
</script>

