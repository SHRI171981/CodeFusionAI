<template>
  <div class="overflow-y-auto h-full" ref="scrollableRegion">
    <div v-if="!loadingSelection" class="h-full">
      <div v-if="selectedChat && selectedChat.length > 0">
        <ChatPair v-for="chat in selectedChat" :key="chat.id" :role="chat.role">
            <div v-html="marked.parse(chat.message)" class=" prose-dark dark:prose-light"></div>
        </ChatPair>
        <LoadingResponse v-if="loadingResponse"/>
      </div>
      <div v-else class="flex justify-center items-center h-full text-3xl font-semibold">
        {{ startingChat ? "Ask a question to get started" : "Select or Create a Chat"}}
      </div>
    </div>
    <div v-else class="flex justify-center items-center h-full animate-pulse text-5xl">
      <Loader class="animate-spin m-8 w-14 h-14" />
    </div>
  </div>
</template>

<script setup>

import ChatPair from '@/components/chat/ChatPair.vue';
import LoadingResponse from '@/components/chat/LoadingResponse.vue';
import { useChatStore } from '@/stores/chatStore';
import { storeToRefs } from 'pinia';
import { Loader } from 'lucide-vue-next';
import { marked } from 'marked';
import { ref } from 'vue';

const chatStore = useChatStore();

const { selectedChat, loadingSelection, loadingResponse, startingChat } = storeToRefs(chatStore);

const scrollableRegion = ref(null);
defineExpose({
  scrollableRegion
});

</script>
