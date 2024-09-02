import './Card.css'

import { CardType } from '../../types/appTypes'
import { useState } from 'react'

export const Card = (props: CardType) => {

    const [done, setDone] = useState(false)

    const doneTask = () => {
        setDone(!done)
    }

    return(
        <div className="Card">
            <div className='CardLabel'>
                <input type="checkbox" checked={done} onClick={() => doneTask()}/>
                <h3 className={done ? 'TaskHashed' : ''}>{props.title}</h3>
            </div>
            <div className='Buttons' onClick={() => props.cutTask(props.id) }>
                <p>❌</p>
            </div>
        </div>
    )
}