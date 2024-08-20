import { useState } from 'react'
import './App.css'

import { Card } from './components/card/Card'
import { Modal } from './components/modal/Modal'

function App() {

  const [list, setList] = useState<Array<string>>([])
  const [task, setTask] = useState<string>('')

  const [modal, setModal] = useState<boolean>(false)

  const showModal = () => {
    setModal(!modal)
  }

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
        <button onClick={showModal}>Abrir Modal</button>
      </div>

      <div className='Tasks'>
          {list.map((e, index) => <Card title={e} cutTask={cutTask} index={index}/>)}
      </div>

      {modal && 
        <Modal showModal={showModal}>
          <h2>Titulo de teste para ver o modal</h2>
        </Modal>}
    </div>
  )
}

export default App
