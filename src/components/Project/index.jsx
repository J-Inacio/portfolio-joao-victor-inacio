import styles from "./Project.module.css";
import Button from "../Button";
import { IoEyeSharp, IoLogoGithub } from "react-icons/io5";
import SkillsCard from "../SkillsCard";
import { useTranslation } from "react-i18next";

const Project = ({
	img,
	title,
	projectText,
	skills,
	repositoryLink,
	deployLink,
	onImageClick,
}) => {
	const {t} = useTranslation()
	return (
		<div className={`${styles.projectContainer} liteGlassFilter`}>
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

			<p>{t('projects.technologies')}</p>
			<SkillsCard skills={skills} />
			<div className={styles.btnWrapper}>
				<a
					href={repositoryLink}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.githubLink}
				>
					<IoLogoGithub />
				</a>
				<a
					href={deployLink}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.deployLink}
				>
					<p>{t('projects.viewButton')}</p> <IoEyeSharp />
				</a>
			</div>
		</div>
	);
};

export default Project;
