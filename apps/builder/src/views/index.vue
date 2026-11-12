/* * Copyright (c) 2026 * All rights reserved. */ /* * Copyright (c) 2026 * All rights reserved. */ /* * Copyright (c) 2026 * All rights
reserved. */
<script setup lang="ts">
import { useIndexStore } from '../stores/index'
const indexStore = useIndexStore()
</script>
<template>
    <div>
        <h1>hello vue</h1>
        <p>count: {{ indexStore.count }}</p>
        <button @click="indexStore.increment">increment</button>
    </div>
</template>
