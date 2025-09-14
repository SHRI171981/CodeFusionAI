<template>
  <div class="flex items-center justify-center min-h-screen">
    <MultiCard class="w-full max-w-md p-6 bg-white">
      <div class="flex justify-center mb-2">
        <LogoComp class="w-16 h-16"/>
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Login
      </h2>
      <form @submit.prevent="handleLogin" class=" grid grid-cols-1 gap-4 mt-4">
        <SingleCard class="p-0">
            <input
                v-model="email"
                type="email"
                class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
            >
        </SingleCard>

        <SingleCard class="p-0">
            <input
                v-model="password"
                type="password"
                class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
            >
        </SingleCard>

        <ButtonComp class="w-full">
          Login
        </ButtonComp>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <button @click="toggleForm" class="text-blue-500 hover:underline">
            Sign Up
          </button>
      </p>
    </MultiCard>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
import LogoComp from '@/components/UI/LogoComp.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import apiClient from '@/api/axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const email = ref('');
const password = ref('');

const toggleForm = () => {
  router.push('/sign-up');
};

const handleLogin = async () => {
  const formData = new URLSearchParams();
  formData.append('grant_type', '');
  formData.append('username', email.value);
  formData.append('password', password.value);
  formData.append('scope', '');
  formData.append('client_id', '');
  formData.append('client_secret', '');
  try{
    console.log('Logging in with:', formData);
    const response = await apiClient.post('/login/', formData);
    if(response.status === 201){
      const { access_token, user_id, token_type } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_id', user_id);
      localStorage.setItem('token_type', token_type);
      alert('Login Successful!');
      router.push('/');
    } else {
      console.error('Signup failed: ', response.data);
    }
  }
  catch(error){
    console.error('Error during signup:', error);
  }
}
</script>

