<template>
  <MultiCard class="flex flex-col w-full p-4">
      <ChatRegion/>

      <!-- Input Box -->
      <div class="p-4 flex gap-2 border-t border-gray-300 mt-auto sticky">
        <SearchBox class="w-full p-10">
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

</script>
