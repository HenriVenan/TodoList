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

  return (
    <div className='Container'>
      <div className='Form'>
        <input type='text' placeholder='Adicione uma tarefa' value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={() => addTask(task)}>Adicionar</button>
      </div>

      <div className='Tasks'>
          {list.map((e) => <Card title={e} />)}
      </div>
    </div>
  )
}

export default App
