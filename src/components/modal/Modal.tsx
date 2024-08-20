import './Modal.css'

import { ModalType } from '../../types/appTypes'

export const Modal = (props: ModalType) => {

    return(
        <>
            <div className='BackgroundModal' onClick={props.showModal}></div>
            <div className='Modal'>
                {props.children}
            </div>
        </>
    )
}