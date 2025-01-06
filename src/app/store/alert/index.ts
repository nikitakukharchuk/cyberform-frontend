import { defineStore } from "pinia";
import {ref} from 'vue';
import type {AlertType} from "@/app/store/alert/type.ts";

export const useAlertsStore = defineStore("alertsStore", () => {

    const alert = ref<AlertType>({
        isOpen: false,
        message: '',
        type: 'error'
    });


    function initAlert(data: AlertType): void {
        alert.value = data;
    }

    return {
        alert,
        initAlert
    }
});