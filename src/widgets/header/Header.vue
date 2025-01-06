<script setup lang="ts">
import {ref} from "vue";
import MenuBar from "@/shared/components/header/MenuBar.vue";
import type {Route} from "@/widgets/header/type.ts";

const isMenuOpen = ref<boolean>(false)

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  }
]

</script>

<template>
  <header class="bg-gray-300 grid place-items-center transition-all overflow-hidden" :class="{'min-h-[120px]': isMenuOpen,'min-h-[60px]': !isMenuOpen}">
    <div class="container mx-auto flex flex-col md:flex-row md:items-center gap-[20px] md:gap-[80px]">
      <div class="flex items-center gap-[15px]">
        <template class="block md:hidden">
          <MenuBar v-model="isMenuOpen"/>
        </template>
        <RouterLink to="/"><img src="@/app/assets/images/logo.svg" alt="Logo"></RouterLink>
      </div>
      <nav :class="{'hidden': !isMenuOpen, 'block': isMenuOpen, 'md:block': true}" class="w-full md:w-auto">
        <ul class="flex text-black gap-[20px]">
          <li v-for="(route, i) in routes" :key="i">
            <RouterLink :to="route.path" class="link text-16-16-400 px-[14px] py-[8px] rounded-[6px] transition-colors" active-class="active-link">{{ route.name }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.link:hover {
  background-color: rgba(255, 255, 255, 0.69);
}

.active-link {
  color: #000000;
  background-color: #ffffff;
}
</style>