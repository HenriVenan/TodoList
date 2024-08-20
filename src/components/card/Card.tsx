import './Card.css'

import { CardType } from '../../types/appTypes'
import { useState } from 'react'

export const Card = (props: CardType) => {

    const [doneTask, setDoneTask] = useState<boolean>(false)

    const checkTask = () => {
        setDoneTask(!doneTask)
      }

    return(
        <div className="Card">
            <div className='CardLabel'>
                <input type="checkbox" onClick={checkTask}/>
                <h3 className={doneTask ? 'TaskHashed' : ''}>{props.title}</h3>
            </div>
            <div className='Buttons' onClick={() => props.cutTask(props.index)}>
                <p>❌</p>
            </div>
        </div>
    )
}