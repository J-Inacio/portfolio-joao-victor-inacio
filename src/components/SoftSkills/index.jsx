import styles from "./SoftSkills.module.css";

const SoftSkills = ({ icon, skillName, onClick, className }) => {
	return (
		<li className={`${styles.mainSoftSkills} ${className}`}>
			<div className={`${styles.softSkills}`} onClick={onClick}>
				<div className={styles.wrapper}>
					{icon}
					<span>{skillName}</span>
				</div>
			</div>
		</li>
	);
};

export default SoftSkills;
