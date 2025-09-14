<template>
  <div class="flex items-center justify-center min-h-screen">
    <MultiCard class="w-full max-w-md p-6 bg-white">
      <div class="flex justify-center mb-2">
        <LogoComp class="w-16 h-16" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
      <form @submit.prevent="handleSignup" class="grid grid-cols-1 gap-4 mt-4">
        <SingleCard class="p-0">
          <input
            v-model="name"
            type="text"
            class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            required
          />
        </SingleCard>

        <SingleCard class="p-0">
          <input
            v-model="email"
            type="email"
            class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email ID"
            required
          />
        </SingleCard>

        <SingleCard class="p-0">
          <input
            v-model="phone"
            type="number"
            class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone. No"
            required
          />
        </SingleCard>

        <SingleCard class="p-0">
          <input
            v-model="password"
            type="password"
            class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />
        </SingleCard>

        <SingleCard class="p-0">
          <input
            v-model="confirmPassword"
            type="password"
            class="w-full p-2 bg-inherit border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm Password"
            required
          />
        </SingleCard>

        <ButtonComp class="w-full"> Sign Up </ButtonComp>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?
        <button @click="toggleForm" class="text-blue-500 hover:underline">Login</button>
      </p>
    </MultiCard>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue'
import LogoComp from '@/components/UI/LogoComp.vue'
import MultiCard from '@/components/UI/MultiCard.vue'
import SingleCard from '@/components/UI/SingleCard.vue'
import apiClient from '@/api/axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const name = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')

const toggleForm = () => {
  router.push('/login')
}

const handleSignup = async () => {
  const userData = {
    name: name.value,
    email: email.value,
    contact_no: phone.value.toString(),
    password: password.value
  }
  try{
    console.log('Signing up with:', userData);
    const response = await apiClient.post('/user/', userData);
    if(response.status === 201){
      alert('Signup successful! Please login.');
      router.push('/login');
    } else {
      console.error('Signup failed: ', response.data);
    }
  }
  catch(error){
    console.error('Error during signup:', error);
  }
}
</script>
