<script setup lang="ts">
import Input from "@/shared/components/Input.vue";
import Button from "@/shared/components/Button.vue";
import {defineEmits, onBeforeUnmount, type PropType, reactive, watch} from "vue";
import type { Post } from "@/entities/post/types/types.ts";

const props = defineProps({
  postData: {
    type: Object as PropType<Post | null>,
    default: null,
  },
  btnText: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'formData', post: { title: string; body: string }): void;
}>();

const formData = reactive<{
  title: string;
  body: string;
}>({
  title:  "",
  body: ""
});

watch(() => props.postData, (newPostData) => {
  formData.title = newPostData?.title ?? "";
  formData.body = newPostData?.body ?? "";
}, { immediate: true });

function onCreatePost() {
  emit("formData", { ...formData });
  formData.title = "";
  formData.body = "";
}
onBeforeUnmount(() => {
  formData.title = "";
  formData.body = "";
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <Input label="Title" placeholder="Enter title ..." type="text" v-model="formData.title" />
    <Input label="Body" placeholder="Enter body ..." type="text" v-model="formData.body" />
    <Button color="success" :disabled="loading" @click.capture="onCreatePost">{{props.btnText ?? 'Submit'}}</Button>
  </div>
</template>