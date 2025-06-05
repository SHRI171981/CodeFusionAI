<template>
  <div class="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-700">
              <select class="p-2 border rounded-md bg-gray-100 dark:bg-gray-800">
                <option value="python">Python</option>
              </select>
              <div class="flex gap-4">
                <ButtonComp variant="green" @click="$emit('run')">Run</ButtonComp>
                <ButtonComp variant="blue">Submit</ButtonComp>
              </div>
            </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';

// defineProps({
//   code: String
// });

defineEmits(['run']);
</script>
