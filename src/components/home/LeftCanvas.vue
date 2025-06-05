<template>
  <MultiCard class="flex flex-col gap-4 h-screen p-2 overflow-y-auto">
    <h2>
      What's New
    </h2>
    <template v-if="!isLoading">
      <template v-if="news_list['articles'] && news_list['articles'].length > 0">
        <SingleCard
        v-for="news in news_list['articles']" :key="news.id"
        class="border border-gray-200">
        <a :href="news.url" target="_blank">
          <TitleDescription>
            <template #title>
              {{ truncate(news.title,10) }}
            </template>
            <template #description>
              {{ truncate(news.content,15) }}
            </template>
          </TitleDescription>
        </a>
        </SingleCard>
      </template>
    </template>
    <template v-else>
      <LoadingNews/>
    </template>
  </MultiCard>

</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import TitleDescription from '@/components/UI/TitleDescription.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import LoadingNews from '@/components/home/LoadingNews.vue';

function truncate(str,WordLimit){
  const words = str.split(' ');
  return words.length > WordLimit
    ? words.slice(0,WordLimit).join(" ") + ' ...'
    : str;
}

import { useNewsStore } from '@/stores/newsStore';
import { storeToRefs } from 'pinia';

const newsStore = useNewsStore();
const { news_list, isLoading } = storeToRefs(newsStore);

</script>
