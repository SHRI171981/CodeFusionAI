<template>
  <div class="w-full">
    <div class="flex-1 p-6">
      <div class="p-6 rounded-lg shadow-md bg-white dark:bg-black">
        <div v-if="selectedQuestion">
          <h1 class="text-3xl font-bold mb-2">
            {{ selectedQuestion.title }}
          </h1>
          <p class="mb-8 text-center text-lg text-gray-700 dark:text-gray-200">
            {{ selectedQuestion.description }}
          </p>

          <!-- Examples Section -->
          <MultiCanvas>
            <template #heading>Examples</template>
            <template #content>
              <MultiCard
                v-for="example in selectedQuestion.examples"
                :key="example.input"
                class="mb-2 p-4"
              >
                <template #default>
                  <span class="font-bold text-xl">Input:</span>
                  <pre class="whitespace-pre-wrap text-sm">{{ displayJSON(example.input) }}</pre>
                  <br />
                  <span class="font-bold text-xl">Output:</span> {{ example.output }}
                </template>
              </MultiCard>
            </template>
          </MultiCanvas>

          <br><br>

          <!-- Constraints Section -->
          <MultiCanvas>
            <template #heading>Constraints</template>
            <template #content>
              <MultiCard
                v-for="(constraint) in selectedQuestion.constraints"
                :key="constraint.id"
                class="mb-2 p-4 text-lg"
              >
                <template #default>
                  <span class="font-semibold text-xl">{{ constraint.description }}</span>
                </template>
              </MultiCard>
            </template>
          </MultiCanvas>

          <!-- Buttons Slot -->
          <slot name="buttons" v-if="$slots.buttons"></slot>
        </div>

        <!-- Loader / Placeholder -->
        <div v-else class="flex h-96 justify-center items-center">
          <div v-if="isLoading" class="animate-spin">
            <Loader class="w-8 h-8" />
          </div>
          <h2 v-else>Select a Question</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MultiCanvas from '@/components/UI/MultiCanvas.vue'
import MultiCard from '@/components/UI/MultiCard.vue'
import { Loader } from 'lucide-vue-next'
import { useQuestionsStore } from '@/stores/questionsStore'
import { storeToRefs } from 'pinia'

const questionsStore = useQuestionsStore()
const { selectedQuestion, isLoading } = storeToRefs(questionsStore)

// Recursively format any JSON data into a human-readable string
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
