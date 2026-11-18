/*
 *   Copyright (c) 2026
 *   All rights reserved.
 */

interface BasicBlockType {
    id: string
    label: string
}
export interface ButtonBlock extends BasicBlockType {
    type: 'button'
    props: {
        content: string
    }
}
export interface NoteBlock extends BasicBlockType {
    type: 'note'
    props: {
        content: string
    }
}
export interface BasicBlockInfoMap {
    button: ButtonBlock
}
export interface ExternalBlockInfoMap {
    note: NoteBlock
}
export interface BlockInfoMap extends BasicBlockInfoMap, ExternalBlockInfoMap {}
export type BasicBlockInfo = keyof BasicBlockInfoMap
export type ExternalBlockInfo = keyof ExternalBlockInfoMap
export type BlockType = BasicBlockInfo | ExternalBlockInfo
/** 根据区块类型精确获取对应的区块信息类型 */
export type BlockInfoOfType<T extends BlockType> = BlockInfoMap[T]
