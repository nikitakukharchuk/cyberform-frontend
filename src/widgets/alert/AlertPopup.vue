<script lang="ts" setup>
import { computed } from "vue";
import { useAlertsStore } from "@/app/store/alert";
import Modal from "@/shared/components/Modal.vue";

const alertStore = useAlertsStore();

const alertInfo = computed(() => alertStore.alert);



function closePopup() {
  alertStore.initAlert({
    isOpen: false,
    message: "",
    type: 'error'
  });
}
</script>

<template>
  <Modal @close="closePopup" v-model="alertInfo.isOpen">
    <div class="text-center flex flex-col px-5 py-5">
      <span>{{ alertInfo.type === 'error' ? 'ALERT !!!' : 'NOTIFICATION' }}</span>
      <span>{{ alertInfo.message }}</span>
    </div>
  </Modal>
</template>