import styles from "./Project.module.css";
import Button from "../Button";
import { IoEyeSharp, IoLogoGithub } from "react-icons/io5";
import SkillsCard from "../SkillsCard";
import { useState } from "react";
import ImageModal from "../ImageModal";

const Project = ({
	img,
	title,
	projectText,
	skills,
	repositoryLink,
	deployLink,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={styles.projectContainer}>
			<img src={img} alt="Screenshot do projeto" onClick={openModal}/>
            <ImageModal
            isOpen={isModalOpen}
            onClose= {closeModal}
            src={img}
            alt={`Imagem ampliada do projeto ${title}`}
            />
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
