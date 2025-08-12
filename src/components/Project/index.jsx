import styles from "./Project.module.css";
import Button from "../Button";
import { IoEyeSharp, IoLogoGithub } from "react-icons/io5";
import SkillsCard from "../SkillsCard";

const Project = ({
	img,
	title,
	projectText,
	skills,
	repositoryLink,
	deployLink,
	onImageClick
}) => {
	
	return (
		<div className={styles.projectContainer}>
			<img src={img} alt="Screenshot do projeto" onClick={() => {onImageClick(img)}}/>
        
			<aside className={styles.textWrapper}>
				<h3>{title}</h3>
				<p>{projectText}</p>
			</aside>

			<p>Tecnologias:</p>
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
					<p>Veja o Projeto</p>{" "}
					<i>
						<IoEyeSharp />
					</i>
				</a>
			</div>
		</div>
	);
};

export default Project;
