<template>
    <div class="grid grid-cols-1 h-full gap-6">
    <TitleDescription v-for="i in 10" :key="i" class="grid place-content-center p-4 h-44 animate-pulse">
      <template #title>
        <Loader class="animate-spin" />
      </template>
    </TitleDescription>
  </div>

</template>

<script setup>
import { Loader } from 'lucide-vue-next';
import TitleDescription from '@/components/UI/TitleDescription.vue';
</script>

