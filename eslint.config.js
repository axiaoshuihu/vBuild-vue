/*
 *   Copyright (c) 2026
 *   All rights reserved.
 */
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import importSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEsLintParser from 'vue-eslint-parser'

export default [
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: {
            parser: vueEsLintParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            'simple-import-sort': importSort,
            vue: pluginVue,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...pluginVue.configs['flat/recommended'].rules,
            'no-console': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
]
