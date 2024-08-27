import { useContext } from 'react'
import './App.css'

import { Card } from './components/card/Card'
import { TodoContext } from './contexts/todoContext.tsx'

function App() {

  const {
    list, setList, 
    task, setTask
  }: any  = useContext(TodoContext)

  const addTask = (task: string) => {
    setList([...list, task])
    setTask('')
  }

  const cutTask = (index: number) => {
    const newList = list.filter((_task: any, i: number) => i != index)
    setList(newList)
  }

  return (
    <div className='Container'>

    // ---------------------- Form ---------------------- //

      <div className='Form'>
        <input 
          type='text' 
          placeholder='Adicione uma tarefa' 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => addTask(task)}>Adicionar</button>
      </div>

    // ---------------------- Cards ---------------------- //

      <div className='Tasks'>
          {list.map((e: string, index: number) => 
            <Card title={e} 
              cutTask={cutTask} 
              index={index} 
          />)}
      </div>
    </div>
  )
}

export default App
