import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "@/widgets/layouts/DefaultLayout.vue";
import PostPage from "@/pages/Blog/PostPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/HomePage.vue'),
            meta: { layout: DefaultLayout, name: 'Home' },
        },
        {
            path: '/blog',
            name: 'Blog',
            component: () => import('@/pages/Blog/BlogPage.vue'),
            meta: { layout: DefaultLayout, name: 'Blog' }
        },
        {
            path: '/blog/:id',
            name: 'Post',
            component: PostPage,
            meta: { layout: DefaultLayout, name: 'Post' }
        }

    ],
})