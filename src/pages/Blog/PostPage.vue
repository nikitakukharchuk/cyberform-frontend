<script setup lang="ts">

import Title from "@/shared/components/Title.vue";
import {usePostsStore} from "@/entities/post/model/post.store.ts";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAlertsStore} from "@/app/store/alert";
import type {Post} from "@/entities/post/types/types.ts";
import {formatDate} from "@/shared/lib/utils.ts";
import Button from "@/shared/components/Button.vue";
import Modal from "@/shared/components/Modal.vue";
import PostForm from "@/entities/post/ui/PostForm.vue";

const postsStore = usePostsStore()
const route = useRoute()
const router = useRouter();
const alertStore = useAlertsStore()

const isLoadingPost = ref<boolean>(false)
const isLoadingPostDelete = ref<boolean>(false)
const isLoadingPostUpdate = ref<boolean>(false)
const showEditPostModal = ref<boolean>(false)
const post = ref<Post | null>(null)

async function handlePostDelete() {
  isLoadingPostDelete.value = true
  await postsStore.dispatchDeletePost(String(route.params.id))
      .then((res) => {
        router.push({ name: 'Blog'})
        alertStore.initAlert({
          isOpen: true,
          message: res.data.message,
          type: "success",
        })
      })
      .catch((err) => {
        alertStore.initAlert({
          isOpen: true,
          message: err.response.data.message,
          type: "error",
        })
      })
      .finally(() => {
        isLoadingPostDelete.value = false
      })
}

async function handleEditPost(formData: Post) {
  isLoadingPostUpdate.value = true
  await postsStore.dispatchUpdatePost({
    id: String(route.params.id),
    title: formData.title,
    body: formData.body,
  })
      .then((res) => {
        post.value = res.data.data;
        showEditPostModal.value = false
        alertStore.initAlert({
          isOpen: true,
          message: res.data.message,
          type: "success",
        })
      })
      .catch((err) => {
        alertStore.initAlert({
          isOpen: true,
          message: err.response.data.message,
          type: "error",
        })
      })
      .finally(() => {
        isLoadingPostUpdate.value = false
      })
}

async function handleGetPost() {
  isLoadingPost.value = true
  await postsStore.dispatchGetPost(String(route.params.id))
      .then(data => post.value = data.data.data)
      .catch(() => {
        alertStore.initAlert({
          isOpen: true,
          message: "Something went wrong!",
          type: "error",
        })
      })
      .finally(() => isLoadingPost.value = false)
}

onMounted(async () => {
  await handleGetPost()
})
</script>


<template>
  <Modal v-model="showEditPostModal">
    <PostForm :postData="post" :loading="isLoadingPostUpdate" @form-data="handleEditPost" btn-text="Update Post" />
  </Modal>
  <section>
    <div class="text-32-32-700 py-5 flex justify-between">
      <Title>Post</Title>
      <div class="flex gap-2">
        <Button color="danger" :disabled="isLoadingPostDelete" @click="handlePostDelete">Delete Post</Button>
        <Button @click="showEditPostModal = true">Edit Post</Button>
      </div>
    </div>
  </section>
  <section v-if="post">
    <div class="text-24-24-600 mb-10">{{ post?.title }}</div>
    <div class="text-16-16-400">{{ post?.body }}</div>
    <div class="text-16-16-400 text-end">{{ post?.updated_at && formatDate(post?.updated_at) }}</div>
  </section>
</template>