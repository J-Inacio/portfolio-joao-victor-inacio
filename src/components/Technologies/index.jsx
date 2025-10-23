import styles from "./Technologies.module.css"

const Technologies = ({src, techName})=> {
    return (
        <div className={`${styles.techContainer} glassFilter`}>
           <img src={src} alt= {techName} />
        </div>
    )
}

export default Technologies