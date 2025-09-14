<template>
  <div class="flex justify-center items-center">
    <div class="flex items-center border border-gray-500 rounded-xl p-2 w-full bg-white dark:bg-black">
      <textarea
        placeholder="Ask Something..."
        @keydown="handleKeydown"
        @input="autoResize"
        class="flex-1 outline-none p-2 text-xl dark:bg-black resize-none overflow-hidden"
        v-model="message"
        rows="1"
      ></textarea>
      <ButtonComp class="mr-2 border self-end" @click="handleSearchClick">
        <template #default>
          <slot name="symbol"></slot>
        </template>
      </ButtonComp>
    </div>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { ref } from 'vue';

const emit = defineEmits(['search']);
const message = ref("");

const handleSearchClick = (event) => {
  if (message.value.trim() !== "") {
    emit('search', message.value);
    message.value = "";

    const textarea = event.currentTarget.parentElement.querySelector('textarea');
    if (textarea) {
        textarea.style.height = 'auto';
    }
  }
};

const handleKeydown = (event) => {
  if (event.key === 'Enter' && event.shiftKey) {
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearchClick(event);
  }
};

const autoResize = (event) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};
</script>
