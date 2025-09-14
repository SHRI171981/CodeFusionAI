<template>
  <div class="h-full pt-2">
    <splitpanes class="border shadow-lg h-full">
      <!-- Left Panel (Question) -->
      <pane min-size="20" max-size="40" class="p-2">
        <MultiCard>
          <QuestionDetails/>
        </MultiCard>
      </pane>

      <!-- Right Panel (Code Editor & Test Cases) -->
      <pane class="flex flex-col p-4">

        <!-- Top Pane (Code Editor) -->
        <splitpanes horizontal>
          <pane min-size="60" class="flex flex-col">
            <MultiCard>
              <TopSection @run="handleRun"/>

              <div class="flex-1 border-t p-4 bg-white dark:bg-black w-[1600px] text-lg">
                <div class="border rounded-md h-[300px] overflow-auto">
                  <MonacoEditor
                    :value="code"
                    theme="vs-dark"
                    language="python"
                    class="w-full h-[300px]"
                    :options="{
                      fontSize: 16,
                      automaticLayout: true,
                      wordWrap: 'on',
                      tabSize: 4,
                      insertSpaces: true,
                      autoIndent: 'full'
                    }"
                    @change="onCodeChange"
                  />
                </div>
              </div>

            </MultiCard>
          </pane>

          <!-- Bottom Pane (Test Cases) -->
          <pane min-size="20" max-size="40" class="p-4 border-t bg-gray-100 dark:bg-gray-800">
            <TestCases/>
          </pane>
          <pane
            v-if="recResponse !== null"
            min-size="20"
            max-size="40"
            class="p-4 border-t bg-gray-100 dark:bg-gray-800 overflow-auto"
          >
            <MultiCard>
              <h2 class="text-center">
                AI Review
              </h2>
              <div v-html="renderedMarkdown" class=" prose-dark dark:prose-light"></div>
            </MultiCard>
          </pane>
        </splitpanes>
      </pane>

    </splitpanes>
  </div>
</template>

<style>
.splitpanes__splitter {
  @apply w-2 cursor-ew-resize bg-gray-600 dark:bg-gray-400
}
</style>

<script setup>
import QuestionDetails from '@/components/questions/QuestionDetails.vue'
import TopSection from '@/components/questionDetails/TopSection.vue';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import TestCases from '@/components/questionDetails/TestCases.vue'
import MultiCard from '@/components/UI/MultiCard.vue'
import MonacoEditor from 'monaco-editor-vue3';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuestionsStore } from '@/stores/questionsStore';

const questionsStore = useQuestionsStore();
const { selectedQuestion } = storeToRefs(questionsStore);

const code = ref('print("Hello World")');  // Direct ref instead of computed
import apiClient from '@/api/axios';
import { computed } from 'vue';
import { marked } from 'marked'
// const quesID =

// const handleRun = () => {
//   console.log('Running code:', code.value); // Use code.value directly
//   // Do something with the code, like send to backend, etc.
// };

const createMessage = (description, writtenCode) => {
  return "Please go through the given question: \n\n"
  + description
  + "\n\n See this code written \n\n "
  + writtenCode
  + "\n\n Review the given code and give your suggestions"
}

const responseRec = ref(null);

const handleRun = async () => {
  const msg = createMessage(selectedQuestion.value.description, code.value)
  console.log(msg)
  try {
    const payload = {
      user_id: 2,           // Example user_id
      message: msg
    };

    const response = await apiClient.post('/chat/start', payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    responseRec.value = response.data['message']['message'];

    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error sending code:', error);
  }
};

const recResponse = computed(() => responseRec.value);
const renderedMarkdown = computed(() =>
  recResponse.value ? marked.parse(recResponse.value) : ''
)
const onCodeChange = (newValue) => {
  code.value = newValue; // Update the code with the new value
};
</script>

<style>
.splitpanes__splitter {
  /* Tailwind @apply won’t work inside <style>, so plain CSS: */
  width: 8px;
  cursor: ew-resize;
  background-color: #4b5563; /* gray-600 */
}
.prose {
  /* basic styling for rendered markdown; you can adjust as needed */
  color: #111827;
}
.dark .prose-dark {
  color: #f3f4f6;
}
</style>

