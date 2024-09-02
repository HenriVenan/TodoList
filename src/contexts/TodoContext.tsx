import { createContext, ReactNode, useState } from "react";
import { TodoContextType, ListType } from "../types/appTypes";

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = { children: ReactNode }

export const TodoProvider = ({ children }: Props) => {
    const [list, setList] = useState<ListType[]>([])
    const [task, setTask] = useState<string>('')

    return(
        <TodoContext.Provider value={{
            list, setList, 
            task, setTask, 
        }}>
            {children}
        </TodoContext.Provider>
    )
}
