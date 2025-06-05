<template>
  <div class="flex-1 p-4 space-y-4 text-lg">
    <div class="max-w-[75%] p-2 pl-4 rounded-lg ml-auto bg-gray-300 dark:bg-gray-600">
      <slot name="input"></slot>
    </div>
    <div class="max-w-[75%] p-2 pl-4 rounded-lg mr-auto">
      <slot name="output"></slot>
    </div>
  </div>
</template>

<script setup>


</script>
