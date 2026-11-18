/* * Copyright (c) 2026 * All rights reserved. */ /* * Copyright (c) 2026 * All rights reserved. */ /* * Copyright (c) 2026 * All rights
reserved. */ /* * Copyright (c) 2026 * All rights reserved. */
<script setup lang="ts">
import AppNavigator from '@/components/AppNavigator.vue'
</script>
<template>
    <div class="container">
        <AppNavigator></AppNavigator>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}
</style>
