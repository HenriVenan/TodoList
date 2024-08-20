import { MouseEventHandler } from 'react'
import './Modal.css'

export const Modal = (props: {showModal: MouseEventHandler}) => {

    return(
        <div className='BackgroundModal' onClick={props.showModal}>
            <div className='Modal'></div>
        </div>
    )
}