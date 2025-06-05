<template>
  <MultiCanvas>
              <template #heading> Test Cases </template>
              <template #content>
                <MultiCard v-for="test_case in selectedQuestion.test_cases.splice(0, 2)" :key="test_case.id" class="p-4 mb-4">
                  <template #default>
                    <span class="font-bold">Input: </span>{{ displayJSON(test_case.input) }} <br />
                    <span class="font-bold">Actual Output: </span>{{ test_case.exp_output }}<br />
                    <span class="font-bold">Your Output: </span>{{ "SOME OUTPUT" }}<br />
                  </template>
                </MultiCard>
              </template>
            </MultiCanvas>
</template>

<script setup>
import MultiCanvas from '@/components/UI/MultiCanvas.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
import { useQuestionsStore } from '@/stores/questionsStore';
import { storeToRefs } from 'pinia';

const questionsStore = useQuestionsStore();
const { selectedQuestion } = storeToRefs(questionsStore)

function displayJSON(data, indent = 0) {
  const spacing = '  '.repeat(indent)

  if (Array.isArray(data)) {
    return data
      .map((item, index) => {
        return `${spacing}- Item ${index + 1}: ${displayJSON(item, indent + 1)}`
      })
      .join('\n')
  } else if (typeof data === 'object' && data !== null) {
    return Object.entries(data)
      .map(([key, value]) => {
        return `${spacing}${key}:\n${displayJSON(value, indent + 1)}`
      })
      .join('\n')
  } else {
    return `${spacing}${data}`
  }
}

</script>
