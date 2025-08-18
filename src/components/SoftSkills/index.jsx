import { useState } from "react";
import styles from "./SoftSkills.module.css";
import { AnimatePresence, motion } from "motion/react";
import { MdOutlineExpandMore } from "react-icons/md";

const SoftSkills = ({ icon, skillName, skillTxt1, skillTxt2 }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<li className={` ${styles.mainSoftSkills}`}>
			<div
				className={` ${styles.softSkills}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={styles.wrapper}>
					{icon}
					<span>{skillName}</span>
				</div>
				<MdOutlineExpandMore />
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.aside
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className={`liteGlassFilter ${styles.softSkillsAside}`}
					>
						<p>{skillTxt1}</p>
						<p>{skillTxt2}</p>
					</motion.aside>
				)}
			</AnimatePresence>
		</li>
	);
};

export default SoftSkills;
