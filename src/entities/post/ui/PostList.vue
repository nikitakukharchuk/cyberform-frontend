<script setup lang="ts">
import type {Post} from "@/entities/post/types/types.ts";
import PostCard from "@/entities/post/ui/PostCard.vue";

defineEmits(['click-post']);

defineProps<{
  posts: Post[],
}>()
</script>

<template>
  <div class="flex flex-col gap-5">
    <template v-for="post in posts" :key="post.id">
      <PostCard :post="post" class="cursor-pointer hover:shadow-lg transition-shadow" @click="$emit('click-post', post)" />
    </template>
  </div>
</template>