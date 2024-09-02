
export type CardType = {
    title: string,
    cutTask: Function,
    id: number
}

export type ListType = {
    id: number,
    title: string
}

export type TodoContextType = {
    list: ListType[],
    setList: Function
    task: string,
    setTask: Function
}

export type CardContextType = {
    doneTask: boolean,
    checkTask: Function
}