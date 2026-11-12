/*
 *   Copyright (c) 2026
 *   All rights reserved.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useIndexStore = defineStore('index', () => {
    const count = ref(0)
    function increment() {
        count.value++
    }
    return { count, increment }
})
