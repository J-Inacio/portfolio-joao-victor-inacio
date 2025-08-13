import styles from "./Skills.module.css";
import Technologies from "../../components/Technologies";
import { Element } from "react-scroll";

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

const Skills = () => {
	return (
		<Element className={`${styles.mainContainerSkills} glassFilter`}>
			<h2>Minhas Habilidades</h2>
			<section id="#skills" className={styles.skillsContainer}>
				{technologiesData.map(tec => <Technologies
				key={tec.techName}
				src={tec.src}
				techName={tec.techName}
				/>)}
			</section>
		</Element>
	);
};

export default Skills;
