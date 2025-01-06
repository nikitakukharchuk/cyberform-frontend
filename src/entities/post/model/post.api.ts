import api from '@/app/config/api/api.ts'
import type {APIResponse} from "@/app/config/api/types.ts";
import type {Post} from "@/entities/post/types/types.ts";

async function getPosts() {
    return await api.get<APIResponse<Post[]>>("posts");
}

async function getPost(id: string) {
    return await api.get<APIResponse<Post>>(`posts/${id}`);
}

async function createPost(data: Post) {
    return await api.post<APIResponse<Post>>(`posts/create`, data);
}

async function deletePost(id: string) {
    return await api.delete<APIResponse<Post>>(`posts/delete/${id}`);
}

async function updatePost(post: Post) {
    const {id , title, body} = post;
    return await api.put<APIResponse<Post>>(`posts/post/update/${id}`, {title, body});
}


export default {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
};