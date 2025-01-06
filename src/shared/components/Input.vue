<script setup lang="ts">

import {defineEmits} from "vue";

withDefaults(defineProps<{
  placeholder?: string;
  type?: string;
  label?: string;
  modelValue?: string;
}>(), {
  placeholder: 'Placeholder',
  type: 'text',
});

const emit = defineEmits<{
  (e: 'update:modelValue', input: string): void;
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    class="w-full p-2 border rounded-md"
    @input="handleInput"
  />
</template>