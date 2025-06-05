<template>
  <h2 class="mt-4">
    <slot v-if="$slots.heading" name="heading"></slot>
  </h2>
  <h3>
    <slot v-if="$slots.subheading" name="subheading"></slot>
  </h3>
  <div class="p-5 rounded-lg text-md bg-gray-300 dark:bg-gray-600">
    <slot v-if="$slots.content" name="content"></slot>
  </div>
</template>

<script setup>
</script>
