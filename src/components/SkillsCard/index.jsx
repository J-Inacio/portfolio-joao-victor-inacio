import styles from "./SkillsCard.module.css"


const SkillsCard = ({skills}) => {
    return (
        <ul className= {styles.skillsContainer}>
            {skills ? skills.map(skill => <li className={styles.skillCard} key={skill}>{skill}</li>) : ""}
        </ul>
    )
}

export default SkillsCard