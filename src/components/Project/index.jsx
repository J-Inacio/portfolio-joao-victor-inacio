import styles from "./Project.module.css";
import Button from "../Button";
import { IoEyeSharp, IoLogoGithub } from "react-icons/io5";

const Project = ({
	img,
	title,
	projectText,
	skills,
	repositoryLink,
	deployLink,
}) => {
	return (
		<div className={styles.projectContainer}>
			<img src={img} alt="Screenshot do projeto" />
            <aside className= {styles.textWrapper}>
                <h3>{title}</h3>
			    <p>{projectText}</p>
            </aside>
			
			<p>Tecnologias:</p>
			<div className= {styles.projectSkills}>
				{/* {skills.map(skill => <SkillsCard key={skill}>{skill}</SkillsCard>
				)} */}
			</div>
			<div className= {styles.btnWrapper}>
				<a href={repositoryLink} target="_blank" rel="noopener noreferrer">
					<IoLogoGithub />
				</a>
				<Button>
					<a href={deployLink} target="_blank" rel="noopener noreferrer">
						<span>Veja o Projeto</span> <IoEyeSharp />
					</a>
				</Button>
			</div>
		</div>
	);
};

export default Project;
