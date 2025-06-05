<template>
    <div class=" p-6 rounded-lg shadow-md bg-white dark:bg-black">
      <div class="flex">
        <h3 class="text-xl font-semibold">
          <slot name="title"></slot>
        </h3>
        <div class="ml-2">
          <slot v-if="$slots.badge" name="badge"></slot>
        </div>
      </div>

      <p>
        <slot v-if="$slots.description" name="description"></slot>
      </p>
    </div>
</template>
