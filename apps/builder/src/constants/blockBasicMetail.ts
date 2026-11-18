/*
 *   Copyright (c) 2026
 *   All rights reserved.
 */
import { HamburgerButton } from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'

import type { BlockInfoOfType, BlockType } from '@/types/block'

type BlockBaseMeta = {
    label: string
    icon: Icon
}
/**
 * 对象形式的block基础元数据
 */
export const BlocksBaseMeta: Record<BlockType, BlockBaseMeta> = {
    button: {
        label: 'Button',
        icon: HamburgerButton,
    },
    note: {
        label: 'Note',
        icon: HamburgerButton,
    },
}
/**
 * 数组形式的block基础元数据
 */
export const blocksBaseMetaList = (Object.keys(BlocksBaseMeta) as BlockType[]).map(type => ({ type, ...BlocksBaseMeta[type] }))
type BlockDefaultData = {
    [K in BlockType]: Omit<BlockInfoOfType<K>, 'id'>
}

export const blocksDefaultData: BlockDefaultData = {
    button: {
        type: 'button',
        label: 'Button',
        props: {
            content: 'Button',
        },
    },
    note: {
        type: 'note',
        label: 'note',
        props: {
            content: 'Note',
        },
    },
}
