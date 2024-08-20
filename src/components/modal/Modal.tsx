import { MouseEventHandler } from 'react'
import './Modal.css'

export const Modal = (props: {showModal: MouseEventHandler, children: any}) => {

    return(
        <>
            <div className='BackgroundModal' onClick={props.showModal}></div>
            <div className='Modal'>
                {props.children}
            </div>
        </>
    )
}