<template>
  <div class="flex-1 border-t p-4 bg-white dark:bg-black w-[1600px] text-lg">
    <div class="border rounded-md h-[300px] overflow-auto">
      <MonacoEditor
        :modelValue="modelValue"
        @update:modelValue="val => emit('update:modelValue', val)"
        theme="vs-dark"
        language="python"
        class="w-full h-[300px]"
        :options="{
          fontSize: 16,
          automaticLayout: true,
          wordWrap: 'on',
          tabSize: 4,
          insertSpaces: true,
          autoIndent: 'full'
        }"
      />
    </div>
  </div>
</template>

<script setup>
import MonacoEditor from 'monaco-editor-vue3'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])
</script>
