import styles from "./Skills.module.css";
import Technologies from "../../components/Technologies";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import SoftSkills from "../../components/SoftSkills";
import { AnimatePresence, motion } from "framer-motion";
import {
	IoExtensionPuzzleSharp,
	IoHeartCircle,
	IoRocket,
	IoSparkles,
	IoSearchSharp,
	IoShuffle,
	IoLibrary,
	IoPeople,
} from "react-icons/io5";
import { useState } from "react";

const technologiesData = [
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
		techName: "Javascript",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
		techName: "HTML5",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
		techName: "CSS3",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
		techName: "React JS",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
		techName: "Typescript",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
		techName: "Bootstrap",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
		techName: "Python",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
		techName: "C#",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
		techName: "MySql",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
		techName: "GitHub",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
		techName: "Git",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
		techName: "Webpack",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
		techName: "Figma",
	},
];

const softSkills = [
	{
		icon: <IoPeople />,
		name: "softSkill.teamwork.title",
		text1: "softSkill.teamwork.txtP1",
		text2: "softSkill.teamwork.txtP2",
	},
	{
		icon: <IoRocket />,
		name: "softSkill.proactive.title",
		text1: "softSkill.proactive.txtP1",
		text2: "softSkill.proactive.txtP2",
	},
	{
		icon: <IoExtensionPuzzleSharp />,
		name: "softSkill.resolution.title",
		text1: "softSkill.resolution.txtP1",
		text2: "softSkill.resolution.txtP2",
	},
	{
		icon: <IoSearchSharp />,
		name: "softSkill.curious.title",
		text1: "softSkill.curious.txtP1",
		text2: "softSkill.curious.txtP2",
	},
	{
		icon: <IoShuffle />,
		name: "softSkill.flexible.title",
		text1: "softSkill.flexible.txtP1",
		text2: "softSkill.flexible.txtP2",
	},
	{
		icon: <IoHeartCircle />,
		name: "softSkill.empathetic.title",
		text1: "softSkill.empathetic.txtP1",
		text2: "softSkill.empathetic.txtP2",
	},
	{
		icon: <IoSparkles />,
		name: "softSkill.creative.title",
		text1: "softSkill.creative.txtP1",
		text2: "softSkill.creative.txtP2",
	},
	{
		icon: <IoLibrary />,
		name: "softSkill.focused.title",
		text1: "softSkill.focused.txtP1",
		text2: "softSkill.focused.txtP2",
	},
];

const Skills = () => {
	const { t } = useTranslation();
	const { ref, inView } = useScrollAnimation();
	const [softSkillBody, setSoftSkillBody] = useState("teamwork");

	return (
		<Element id="#skills">
			<section className={`${styles.mainContainerSkills} glassFilter`}>
				<h2>Hard Skills</h2>
				<div
					ref={ref}
					className={`
				${styles.skillsContainer}
				fade-in-section
				${inView ? "is-visible" : ""}
				`}
				>
					{technologiesData.map((tec) => (
						<Technologies
							key={tec.techName}
							src={tec.src}
							techName={tec.techName}
						/>
					))}
				</div>
			</section>

			<section className={`${styles.mainContainerSkills} glassFilter`}>
				<h2>Soft Skills</h2>
				<div className={styles.SoftSkillsMainContainer}>
					<ul className={styles.SoftSkillsListContainer}>
						{softSkills.map((softSkill) => {
							return (
								<SoftSkills
									key={softSkill.name}
									icon={softSkill.icon}
									skillName={t(softSkill.name)}
									onClick={() => setSoftSkillBody(softSkill.name.split(".")[1])}
									className={`${
										softSkill.name.split(".")[1] === softSkillBody
											? styles.activeSoftSkill
											: styles.softSkill
									}`}
								/>
							);
						})}
					</ul>
					<div className={styles.asideContainer}>
						<AnimatePresence>
							<motion.aside
								key={softSkillBody}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								className={`liteGlassFilter ${styles.softSkillsAside}`}
							>
								<h3>{t(`softSkill.${softSkillBody}.title`)}</h3>
								<p>{t(`softSkill.${softSkillBody}.txtP1`)}</p>
								<p>{t(`softSkill.${softSkillBody}.txtP2`)}</p>
							</motion.aside>
						</AnimatePresence>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Skills;
