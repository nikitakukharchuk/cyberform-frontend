import {defineStore} from "pinia";
import {ref} from "vue";
import type {Post} from "@/entities/post/types/types.ts";
import {API} from "@/entities/api.ts";

export const usePostsStore = defineStore("postsStore", () => {


    const posts = ref<Post[]>([]);


    function initPosts(data: Post[]): void {
        posts.value = data;
    }


    async function dispatchGetPosts() {
            return await API.posts.getPosts().then((data) => {
                initPosts(data.data.data);
            })
    }

    async function dispatchGetPost(id: string) {
        return await API.posts.getPost(id)
    }

    async function dispatchCreatePost(post: Post) {
        return await API.posts.createPost(post);
    }

    async function dispatchDeletePost(id: string) {
        return await API.posts.deletePost(id);
    }
    async function dispatchUpdatePost(post: Post) {
        return await API.posts.updatePost(post);
    }

    return {
        posts,
        dispatchGetPosts,
        dispatchGetPost,
        dispatchCreatePost,
        dispatchDeletePost,
        dispatchUpdatePost
    };
});