<template>
  <div class="flex col-span-3">
    <div class="p-4 w-1/5">
      <LeftCanvas/>
    </div>
    <div class="p-4 w-3/5">
      <MiddleCanvas/>
    </div>
    <div class="w-1/5 p-4">
      <RightCanvas/>
    </div>
  </div>
</template>

<script setup>

import RightCanvas from '@/components/home/RightCanvas.vue';
import LeftCanvas from '@/components/home/LeftCanvas.vue';
import MiddleCanvas from '@/components/home/MiddleCanvas.vue';

import { useNewsStore } from '@/stores/newsStore';
import { onMounted } from 'vue';
const newsStore = useNewsStore();

onMounted(() => {
  if(newsStore.news_list.length == 0){
    newsStore.fetchNews();
  }
});

</script>
