import styles from "./TimelineCard.module.css"


const TimelineCard = ({data, local, title, text, children}) => {
    return (
            <li className= {styles.container}> 
                <p className={styles.data}>{data}</p>
                <p className={styles.local}>{local}</p>
                <h3 className= {styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
                <div className= {styles.skills}>
                   {children}
                </div>
            </li>
    )
}

export default TimelineCard