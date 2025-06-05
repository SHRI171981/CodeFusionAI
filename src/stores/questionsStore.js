import { ref,computed } from 'vue';
import { defineStore } from 'pinia';
import apiClient from '@/api/axios';

export const useQuestionsStore = defineStore('questionStore', () => {
  const questions = ref([]);
  const selectedQuestionID = ref(null);
  const loading = ref(false)

  const fetchQuestions = async () => {
    try{
      loading.value = true
      const data = await apiClient.get('/questions'); // from global route
      questions.value = data['data']['questions']; // no need of .json()
      console.log(questions.value)
    }
    catch(error){
      console.error("Error Fetching Data: " + error)
      fetchQuestions();
    }
    finally{
      loading.value = false;
    }
  };

  const isLoading = computed(() => loading.value)

  const selectQuestion = (title) => {
    selectedQuestionID.value = title;
  };

  const selectedQuestion = computed(() =>
    questions.value.find(
      (q) => q.title === selectedQuestionID.value) || null
  );


  return {
    questions,
    selectedQuestion,
    selectedQuestionID,
    selectQuestion,
    fetchQuestions,
    isLoading,
  };
});


