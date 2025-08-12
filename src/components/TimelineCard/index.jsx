import styles from "./TimelineCard.module.css"


const TimelineCard = ({data, local, title, text, skill}) => {
    return (
            <li> 
                <p>{data}</p>
                <p>{local}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                
            </li>
    )
}

export default TimelineCard