import styles from "./SkillCard.module.css"


const SkillCard = ({children}) => {
    return (
        <div className= {styles.skillCard}>
            {children}
        </div>
    )
}

export default SkillCard