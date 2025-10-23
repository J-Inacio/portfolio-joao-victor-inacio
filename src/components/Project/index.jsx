import styles from "./Project.module.css";
import Button from "../Button";
import { IoEyeSharp, IoLogoGithub } from "react-icons/io5";
import SkillsCard from "../SkillsCard";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Project = ({
	img,
	title,
	projectText,
	skills,
	repositoryLink,
	deployLink,
	onImageClick,
}) => {
	const { t } = useTranslation();
	const { ref, inView } = useScrollAnimation();
	return (
		<li
			ref={ref}
			className={`
			${styles.projectContainer} 
			fade-in-section
			${inView ? "is-visible" : ""}
			glassFilter
		`}
		>
			<img
				src={img}
				alt="Screenshot do projeto"
				onClick={() => {
					onImageClick(img);
				}}
			/>

			<aside className={styles.textWrapper}>
				<h3>{title}</h3>
				<p>{projectText}</p>
			</aside>

			<p>{t("projects.technologies")}</p>
			<SkillsCard skills={skills} />
			<div className={styles.btnWrapper}>
				<a
					href={repositoryLink}
					target="_blank"
					rel="noopener noreferrer"
					className={`${styles.githubLink} glass-btn`}
				>
					<IoLogoGithub />
				</a>
				<a
					href={deployLink}
					target="_blank"
					rel="noopener noreferrer"
					className={`${styles.deployLink} glass-btn`}
				>
					<p>{t("projects.viewButton")}</p> <IoEyeSharp />
				</a>
			</div>
		</li>
	);
};

export default Project;
