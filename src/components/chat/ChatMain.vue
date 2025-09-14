<template>
  <MultiCard class="flex flex-col w-full p-4">
      <ChatRegion ref="chatContainer"/>
      <!-- Input Box -->
      <div class="p-4 flex gap-2 border-t border-gray-300 mt-auto sticky">
        <SearchBox class="w-full p-10" @search="handleSearch">
          <template #symbol>
            <Send />
          </template>
        </SearchBox>
      </div>
  </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import SearchBox from '@/components/UI/SearchBox.vue';
import ChatRegion from '@/components/chat/ChatRegion.vue';
import { Send } from 'lucide-vue-next';
import { ref, nextTick, watch } from 'vue';
import { useChatStore } from '@/stores/chatStore';
// 1. Import storeToRefs
import { storeToRefs } from 'pinia';

const chatStore = useChatStore();
// 2. Use storeToRefs to keep selectedChat reactive
const { selectedChat } = storeToRefs(chatStore);

const chatContainer = ref(null);

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value && chatContainer.value.scrollableRegion) {
    const scrollEl = chatContainer.value.scrollableRegion;
    scrollEl.scrollTo({
      top: scrollEl.scrollHeight,
      behavior: 'smooth'
    });
  }
};

const handleSearch = async (message) => {
  if (!message || message.trim() === '') return;
  await chatStore.sendMessage(message);
}

// This watcher will now work correctly
watch(selectedChat, () => {
  scrollToBottom();
}, { deep: true });

</script>
