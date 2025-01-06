<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import DefaultLayout from "@/widgets/layouts/DefaultLayout.vue";
import AlertPopup from "@/widgets/alert/AlertPopup.vue";

const route = useRoute();
const layout = computed(() => {
  return route.meta.layout || DefaultLayout;
});
</script>

<template>
  <AlertPopup />
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>