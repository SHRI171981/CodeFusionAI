<template>
  <div class="overflow-y-auto">
        <ChatPair v-for="chat in ai_chat" :key="chat.id" >
        <template #input>
          {{ chat.input }}
        </template>
        <template #output>
          {{ chat.output }}
        </template>
      </ChatPair>
  </div>
</template>

<script setup>

import ChatPair from '@/components/chat/ChatPair.vue';

const ai_chat = [
  {
    id: 1,
    input: "Hello",
    output: "Hey! How's it going? How can I assist you today?"
  },
  {
    id: 2,
    input: "I wanted to ask about Vue 3.",
    output: "Sure! Vue 3 is a progressive JavaScript framework used to build interactive web applications. It comes with a new Composition API, better reactivity, and improved performance."
  },
  {
    id: 3,
    input: "That sounds interesting. Is it hard to learn?",
    output: "Not really! If you have experience with JavaScript and Vue 2, the transition is smooth. The new features might take some time to get used to, but they offer more flexibility in building applications."
  },
  {
    id: 4,
    input: "What's the biggest difference between Vue 2 and Vue 3?",
    output: "The biggest difference is the Composition API, which provides a more modular approach to managing component logic. Vue 3 also improves performance with a better virtual DOM and built-in TypeScript support."
  },
  {
    id: 5,
    input: "That's great! Do I need to rewrite my Vue 2 project?",
    output: "Not necessarily. Vue 3 maintains backward compatibility, and there's an official migration tool to help you transition your project step by step."
  },
  {
    id: 6,
    input: "Thanks! This was really helpful.",
    output: "You're welcome! Let me know if you have any more questions. Happy coding!"
  }
];

</script>
