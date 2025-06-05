<template>
  <section class="py-12 px-6 h-screen">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold">About Us</h2>
      <p class="mt-4">
        Welcome to <span class="font-semibold">CodeFusion AI</span>,
         the ultimate platform for coding enthusiasts, students, and professionals
         to enhance their problem-solving skills.
         Whether you're preparing for technical interviews, sharpening your algorithmic thinking,
         or competing with fellow developers, we provide a seamless and engaging experience.
      </p>
    </div>

    <div class="max-w-4xl mx-auto mt-8 grid gap-8 md:grid-cols-2">
      <TitleDescription>
        <template #title>
          Extensive Problem Library
        </template>
        <template #badge>
          <ScrollText />
        </template>
        <template #description>
          Solve a variety of challenges across multiple domains.
        </template>
      </TitleDescription>
      <TitleDescription>
        <template #title>
          Real-World Coding Practice
        </template>
        <template #badge>
          <Globe />
        </template>
        <template #description>
          Work on practical problems that mimic real scenarios.
        </template>
      </TitleDescription>
      <TitleDescription>
        <template #title>
          AI Code Analysis
        </template>
        <template #badge>
          <Brain />
        </template>
        <template #description>
          Get better code suggestions with AI
        </template>
      </TitleDescription>
      <TitleDescription>
        <template #title>
          Competitions & Leaderboard
        </template>
        <template #badge>
          <ShieldHalf />
        </template>
        <template #description>
          Compete, climb the ranks, and showcase your skills.
        </template>
      </TitleDescription>
    </div>

    <div class="text-center mt-8">
      <p class="text-gray-700 font-medium">Join us and take your coding skills to the next level! 🚀</p>
    </div>
  </section>
</template>

<script setup>
import TitleDescription from '@/components/UI/TitleDescription.vue';
import { Globe } from 'lucide-vue-next';
import { ScrollText } from 'lucide-vue-next';
import { Brain } from 'lucide-vue-next';
import { ShieldHalf } from 'lucide-vue-next';

</script>
