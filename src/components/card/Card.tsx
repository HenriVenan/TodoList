import './Card.css'

export const Card = (props: {title: string}) => {
    return(
        <div className="Card">
            <input type="checkbox" />
            <h3>{props.title}</h3>
        </div>
    )
}