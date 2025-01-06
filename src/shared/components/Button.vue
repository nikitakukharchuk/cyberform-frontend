<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'success' | 'warning' | 'danger' | 'default';
}>(), {
  color: 'default',
});
</script>

<template>
  <button
  class="border rounded-md py-2 px-3 text-white text-14-14-500 disabled:opacity-50"
  :class="{
    'bg-red-500': color === 'danger',
    'bg-blue-500': color === 'default',
    'bg-yellow-500': color === 'warning',
    'bg-green-500': color === 'success',
  }"
  @click="$emit('click')"
  >
      <slot></slot>
  </button>
</template>