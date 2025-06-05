import { ref,computed } from 'vue';
import apiClient from '@/api/axios';
import { defineStore } from 'pinia';

export const useNewsStore = defineStore('newsStore', () => {
  const news_list = ref([]);
  const loading = ref(false);

  const fetchNews = async () => {
    try{
      loading.value = true;
      const data = await apiClient.get('/news');
      news_list.value = data['data'];
    }
    catch(error){
      console.log("Error fetching news:" + error);
    }
    finally{
      loading.value = false;
    }
  };

  const isLoading = computed(() => loading.value);

  return {
    news_list,
    fetchNews,
    isLoading
  }
})

