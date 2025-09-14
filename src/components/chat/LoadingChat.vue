<template>
  <SingleCard class="grid gap-4 p-4 animate-pulse">
    <ButtonComp v-for="i in 10" :key="i" class="w-full" variant="blue">
      <div class="flex justify-center p-1 text-sm font-semibold">
        <Loader class="animate-spin" />
      </div>

    </ButtonComp>
  </SingleCard>
</template>

<script setup>
import { Loader } from 'lucide-vue-next';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
</script>
