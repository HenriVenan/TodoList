import { MouseEventHandler } from "react"

export type CardType = {
    title: string,
    cutTask: Function,
    index: number
}

export type ModalType = {
    showModal: MouseEventHandler, 
    children: any
}

export type TodoContextType = {
    list: string[],
    setList: Function
    task: string,
    setTask: Function
}