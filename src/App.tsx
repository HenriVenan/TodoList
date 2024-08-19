import { useState } from 'react'
import './App.css'

import { Card } from './components/card/Card'

function App() {

  const [list, setList] = useState<Array<string>>([])
  const [task, setTask] = useState<string>('')

  const addTask = (task: string) => {
    setList([...list, task])
    setTask('')
  }

  const cutTask = (index: number) => {
    const newList = list.filter((_task, i) => i != index)
    setList(newList)
  }

  return (
    <div className='Container'>
      <div className='Form'>
        <input type='text' placeholder='Adicione uma tarefa' value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={() => addTask(task)}>Adicionar</button>
      </div>

      <div className='Tasks'>
          {list.map((e, index) => <Card title={e} cutTask={cutTask} index={index}/>)}
      </div>
    </div>
  )
}

export default App
