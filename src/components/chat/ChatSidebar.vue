<template>
  <MultiCard class="flex flex-col w-1/3 border-r border-gray-300 gap-8 p-4 h-screen pb-20">
      <div class="h-1/10">
        <h2>AI Chat</h2>
      </div>
      <ButtonComp variant="green" @click="chatStore.startNewChat()">
        + New Chat
      </ButtonComp>
      <div class="overflow-y-auto" v-if="!loading">
        <SingleCard class="grid gap-4 p-4 hover:!bg-gray-300 dark:hover:!bg-gray-700">
          <ButtonComp
            v-for="chat in chats"
            :key="chat.id"
            class="w-full" variant="blue"
            :class="chat.id === selectedChatId ? '!text-xl font-bold shadow-md shadow-blue-950 dark:shadow-blue-50' : '!text-lg font-normal opacity-70'"
            @click="chatStore.selectChatSession(chat.id)"
          >
            {{ chat.session_title }} {{ chat.id }}
          </ButtonComp>
        </SingleCard>
      </div>
      <div class="overflow-y-auto" v-else>
        <LoadingChat/>
      </div>

      <div class="flex mt-auto w-full p-8 text-xl font-semibold">
        <ButtonComp class="flex gap-4 w-full p-4 justify-center place-items-center" variant="orange">
        <Settings/> Settings
      </ButtonComp>
      </div>
    </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import { Settings } from 'lucide-vue-next';
import { useChatStore } from '@/stores/chatStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import LoadingChat from '@/components/chat/LoadingChat.vue';

const chatStore = useChatStore();
const { chats, loading, selectedChatId } = storeToRefs(chatStore);

onMounted(() => {
  chatStore.fetchChats();
});
</script>
