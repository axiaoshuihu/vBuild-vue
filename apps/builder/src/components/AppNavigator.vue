/* * Copyright (c) 2026 * All rights reserved. */ /* * Copyright (c) 2026 * All rights reserved. */ /* * Copyright (c) 2026 * All rights
reserved. */ /* * Copyright (c) 2026 * All rights reserved. */
<script setup lang="ts">
import { Home, DataSheet, FriendsCircle } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const icon = {
    pageLayout: Home,
    dataWave: DataSheet,
    friendsCircle: FriendsCircle,
}
type iconType = keyof typeof icon
const navCenter: {
    icon: iconType
    text: string
    style: {
        color: string
    }
}[] = [
    {
        icon: 'pageLayout',
        text: 'pageLayout',
        style: {
            color: '#007bff',
        },
    },
    {
        icon: 'dataWave',
        text: 'dataWave',
        style: {
            color: '#28a745',
        },
    },
]
let router = useRouter()
let activeIcon = computed(() => router.currentRoute.value.name as string | undefined)
</script>
<template>
    <div class="app-navigator">
        <div class="nav-left">
            <FriendsCircle size="18" />
            <h1>app navigator</h1>
        </div>
        <div class="nav-center">
            <router-link
                :class="'nav-center-item' + (item.icon === activeIcon ? ' active' : '')"
                v-for="item in navCenter"
                :style="{ color: item.icon === activeIcon ? item.style.color : 'var(--color-gray-600)' }"
                :key="item.icon"
                :to="item.text"
            >
                <component :is="icon[item.icon]" />
                {{ item.text }}
            </router-link>
        </div>
        <div class="nav-right"></div>
    </div>
</template>
<style scoped>
.app-navigator {
    height: 64px;
    background: var(--color-gray-100);
    width: 100%;
    border-bottom: 1px solid var(--color-gray-200);
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav-center {
    display: flex;
    width: 50%;
    align-items: flex-end;
    height: 64px;
    justify-content: center;
    font-size: 16px;
    padding: 10px 16px;
}
.nav-center-item {
    margin: 0 16px;
    color: var(--color-gray-600);
}
.nav-center-item.active {
    color: var(--color-primary);
}
</style>
