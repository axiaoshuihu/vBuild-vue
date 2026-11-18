/*
 *   Copyright (c) 2026
 *   All rights reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'

import DataWave from '../views/dataWave.vue'
import Index from '../views/index.vue'
import PageLayout from '../views/pageLayout.vue'
const routes = [
    {
        path: '/api',
        name: 'index',
        component: Index,
        children: [
            {
                path: 'pageLayout',
                name: 'pageLayout',
                component: PageLayout,
            },
            {
                path: 'dataWave',
                name: 'dataWave',
                component: DataWave,
            },
        ],
    },
    {
        path: '/',
        redirect: '/api/pageLayout',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
