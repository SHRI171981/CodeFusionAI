<template>
  <div class="flex-1 p-4 space-y-4 text-lg h-96 animate-pulse">
    <div class="flex justify-center place-items-center max-w-[75%] h-full p-2 pl-4 rounded-lg mr-auto bg-gray-200 dark:bg-gray-700">
      <Loader class="animate-spin w-14 h-14" />
    </div>
  </div>
</template>

<script setup>
import { Loader } from 'lucide-vue-next';

</script>
