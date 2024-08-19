import './Card.css'

export const Card = (props: {title: string, cutTask: Function, index: number}) => {
    return(
        <div className="Card">
            <div className='CardLabel'>
                <input type="checkbox" />
                <h3>{props.title}</h3>
            </div>
            <div className='Buttons' onClick={() => props.cutTask(props.index)}>
                <p>❌</p>
            </div>
        </div>
    )
}