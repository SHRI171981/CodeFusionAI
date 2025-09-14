<template>
  <div class="flex-1 p-4 space-y-4 text-lg">
    <div class="max-w-[75%] p-2 pl-4 rounded-lg ml-auto bg-gray-300 dark:bg-gray-600" v-if="props.role === 'user'">
      <slot></slot>
    </div>
    <div class="max-w-[75%] p-2 pl-4 rounded-lg mr-auto bg-gray-200 dark:bg-gray-700" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  role: {
    type: String,
    required: true,
    // validator: (value) => ['user', 'ai'].includes(value)
  }
});

</script>
