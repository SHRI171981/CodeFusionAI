<template>
  <SingleCard class="mb-8 p-4">
        <div class=" font-bold border-0 border-b-2 border-dashed border-b-blue-800 text-2xl">
          <div class="flex gap-2">
            <slot name="heading"></slot>
            <div class="mt-1">
              <slot name="lucide"></slot>
            </div>
          </div>
        </div>
        <MultiCard class="text-xl p-4 mt-2">
          <slot name="content"></slot>
        </MultiCard>
  </SingleCard>
</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
</script>
=
