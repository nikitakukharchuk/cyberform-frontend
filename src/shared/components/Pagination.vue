<template>
  <div class="pagination">
    <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        class="pagination-button"
    >
      Prev
    </button>

    <span class="pagination-info">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        class="pagination-button"
    >
      Next
    </button>

    <div class="pagination-numbers">
      <button
          v-for="page in pages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
          class="pagination-number-button"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits, watch } from 'vue';

const props = defineProps<{
  modelValue: number;
  totalItems: number;
  itemsPerPage: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', page: number): void;
}>();

let currentPage = props.modelValue;

watch(() => props.modelValue, (newValue) => {
  currentPage = newValue;
});

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage);
});

const pages = computed(() => {
  const pagesArray = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

function changePage(page: number) {
  if (page < 1 || page > totalPages.value) return;
  currentPage = page;
  emit('update:modelValue', currentPage);
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.pagination-button,
.pagination-number-button {
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer;
}

.pagination-button:disabled,
.pagination-number-button.active {
  background-color: #ddd;
  cursor: not-allowed;
}

.pagination-info {
  font-weight: bold;
}

.pagination-numbers {
  display: flex;
  gap: 0.5rem;
}
</style>