<script setup lang="ts">
import type {Post} from "@/entities/post/types/types.ts";
import {formatDate} from "@/shared/lib/utils.ts";

defineProps<{
  post: Post,
}>()
</script>

<template>
  <div class="shadow-sm rounded-xl px-5 py-5 bg-gray-100 flex justify-between items-center">
    <div class="flex flex-col gap-2">
      <span class="text-20-20-600">{{ post.title }}</span>
      <span>{{ post.body }}</span>
    </div>
    <div>
      <span>{{ post.updated_at && formatDate(post.updated_at) }}</span>
    </div>
  </div>
</template>