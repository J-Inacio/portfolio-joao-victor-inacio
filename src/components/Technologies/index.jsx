import styles from "./Technologies.module.css"

const Technologies = ({src, techName})=> {
    return (
        <div className={styles.techContainer}>
           <img src={src} alt= {techName} />
        </div>
    )
}

export default Technologies