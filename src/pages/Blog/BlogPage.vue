<script setup lang="ts">
import Title from "@/shared/components/Title.vue";
import {computed, onMounted, ref} from "vue";
import {usePostsStore} from "@/entities/post/model/post.store.ts";
import PostList from "@/entities/post/ui/PostList.vue";
import type {Post} from "@/entities/post/types/types.ts";
import {useRouter} from "vue-router";
import {useAlertsStore} from "@/app/store/alert";
import Pagination from "@/shared/components/Pagination.vue";
import Button from "@/shared/components/Button.vue";
import Modal from "@/shared/components/Modal.vue";
import Input from "@/shared/components/Input.vue";
import PostForm from "@/entities/post/ui/PostForm.vue";

const postsStore = usePostsStore();
const router = useRouter();
const isLoadingPosts = ref<boolean>(false);
const isLoadingCreatePost = ref<boolean>(false);
const alertStore = useAlertsStore();
const searchQuery = ref<string>("");

const itemsPerPage = ref<number>(10);
const page = ref<number>(1);
const showCreatePostModal = ref<boolean>(false);

function handleClickPost(post: Post) {
  router.push({ name: 'Post', params: { id: post.id } });
}

const filteredPosts = computed(() => {
  return postsStore.posts.filter(post => {
    const lowerSearchQuery = searchQuery.value.toLowerCase();
    return (
        post.title.toLowerCase().includes(lowerSearchQuery) ||
        post.body.toLowerCase().includes(lowerSearchQuery)
    );
  });
});

const viewPosts = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPosts.value.slice(start, end);
})

onMounted(async () => {
  isLoadingPosts.value = true;
  await postsStore.dispatchGetPosts()
      .catch(() => {
        alertStore.initAlert({
          isOpen: true,
          message: 'Something went wrong',
          type: 'error',
        });
      })
      .finally(() => {
        isLoadingPosts.value = false;
      });
});

async function handleCreatePost(post: Post) {
  isLoadingCreatePost.value = true;
  await postsStore.dispatchCreatePost(post)
      .then(async () => {
        await postsStore.dispatchGetPosts()
        alertStore.initAlert({
          isOpen: true,
          message: 'Post created successfully',
          type: 'success',
        });
      })
      .catch(() => {
        alertStore.initAlert({
          isOpen: true,
          message: 'Something went wrong',
          type: 'error',
        });
      })
      .finally(() => {
        showCreatePostModal.value = false;
        isLoadingCreatePost.value = false;
      })
}

</script>

<template>
  <Modal v-model="showCreatePostModal">
    <div class="py-5 px-5 w-96">
      <PostForm @form-data="handleCreatePost" :loading="isLoadingCreatePost" btn-text="Create Post"/>
    </div>
  </Modal>
  <section class="flex justify-between items-center">
    <div class="text-32-32-700 py-5">
      <Title>Blog</Title>
    </div>
    <div>
      <Button color="success" @click="showCreatePostModal = true">Create post</Button>
    </div>
  </section>

  <section class="mb-5">
    <Input
        v-model="searchQuery"
        type="text"
        placeholder="Search by title or body"
    />
  </section>

  <section>
    <PostList :posts="viewPosts" @click-post="handleClickPost" />
  </section>
  <section v-if="filteredPosts.length" class="py-5">
    <Pagination :total-items="filteredPosts.length" :items-per-page="itemsPerPage" v-model="page" />
  </section>
</template>