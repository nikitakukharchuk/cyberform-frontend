<script setup lang="ts">
import Header from "@/widgets/header/Header.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto">
    <slot></slot>
  </div>
</template>