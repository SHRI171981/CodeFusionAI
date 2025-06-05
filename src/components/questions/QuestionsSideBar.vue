<template>
  <aside class="w-1/3 shadow-md p-4 overflow-y-auto h-screen rounded-lg dark:bg-black">
    <h3 class="mb-5">Questions</h3>

    <div v-if="isLoading" class="grid gap-6">
      <LoadingQuestions/>
    </div>
    <div v-else class="grid gap-6">
      <SingleCard
      v-for="question in questions"
      :key="question.id"
      class="p-4"
      :class="question.title === selectedQuestionID ? 'text-2xl font-bold' : 'text-lg font-semibold'"
      @click="questionsStore.selectQuestion(question.title)"
    >
      {{ question.title }}
    </SingleCard>
    </div>

  </aside>
</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';
import { useQuestionsStore } from '@/stores/questionsStore';
import { storeToRefs } from 'pinia';
import LoadingQuestions from '@/components/questions/LoadingQuestions.vue';

const questionsStore = useQuestionsStore();
const { questions,isLoading,selectedQuestionID } = storeToRefs(questionsStore)

</script>
