/*
 *   Copyright (c) 2026
 *   All rights reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/index.vue'
import PageLayout from '../views/pageLayout.vue'
const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        children: [
            {
                path: '/sub',
                name: 'subIndex',
                component: Index,
            },
        ],
    },
    {
        path: '/pageLayout',
        name: 'pageLayout',
        component: PageLayout,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
