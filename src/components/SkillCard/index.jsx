import styles from "./SkillCard.module.css"


const SkillCard = ({skill}) => {
    return (
        <div className= {styles.skillCard}>
            {skill}
        </div>
    )
}

export default SkillCard