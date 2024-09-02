import { useContext } from 'react'
import './App.css'

import { Card } from './components/card/Card'
import { TodoContext } from './contexts/TodoContext.tsx'

function App() {

  const {
    list, setList, 
    task, setTask,

  }: any  = useContext(TodoContext)

  const addTask = (task: string) => {
    setList([...list, task])
    setTask('')
  }

  const cutTask = (id: number) => {
    const newList = list.filter((_task: any, i: number) => i != id)
    setList(newList)
  }

  return (
    <div className='Container'>

    {/* // ---------------------- Form ---------------------- // */}

      <div className='Form'>
        <input 
          type='text' 
          placeholder='Adicione uma tarefa' 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <button onClick={() => addTask(task)}>Adicionar</button>
      </div>

    {/* // ---------------------- Cards ---------------------- // */}

      <div className='Tasks'>
          {list.map((title: string, id: number) => 
            <Card 
              title={title}
              cutTask={cutTask}
              id={id} 
            />)}
      </div>
    </div>
  )
}

export default App
