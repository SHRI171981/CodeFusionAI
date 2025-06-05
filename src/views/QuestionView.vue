<template>
    <div class="flex p-4">
      <QuestionsSideBar/>
      <QuestionDetails>
        <template #buttons>
          <ButtonsContainer/>
        </template>
      </QuestionDetails>
  </div>
</template>

<script setup>
import QuestionsSideBar from "@/components/questions/QuestionsSideBar.vue";
import QuestionDetails from "@/components/questions/QuestionDetails.vue";
import ButtonsContainer from "@/components/questions/ButtonsContainer.vue";
import { useQuestionsStore } from "@/stores/questionsStore";
import { onMounted } from "vue";


const questionsStore = useQuestionsStore();
onMounted(() => {
  if(questionsStore.questions.length == 0){
    questionsStore.fetchQuestions()
}})

</script>
