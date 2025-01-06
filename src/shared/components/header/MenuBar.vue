<template>
  <div class="burger-menu" @click="toggleMenu">
    <div class="bg-white opacity-100" :class="{ 'transform translate-y-[10px] rotate-45': modelValue }"></div>
    <div class="bg-white" :class="{ 'opacity-0': modelValue, 'opacity-30': !modelValue }"></div>
    <div class="bg-white" :class="{ 'transform -translate-y-[10px] -rotate-45 opacity-100': modelValue, 'opacity-30': !modelValue }"></div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

function toggleMenu() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped>
.burger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 24px;
  cursor: pointer;
}
.burger-menu div {
    height: 3px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

}
</style>