import { Element } from "react-scroll";
import Project from "../../components/Project";
import styles from "./ProjectsList.module.css";
import { useTranslation } from "react-i18next";

const ProjectsList = ({ onImageClick }) => {
	const { t } = useTranslation();
	const projectsData = [
		{
			img: "https://github.com/J-Inacio/psicoser/blob/main/src/assets/img/screenshot3.png?raw=true",
			skills: ["Javascript", "HTML", "CSS", "Webpack", "Figma"],
			projectText: "projects.psicoserTxt",
			title: "Psicoser",
			repositoryLink: "https://github.com/J-Inacio/psicoser",
			deployLink: "https://psicoser.vercel.app/",
		},
		{
			img: "https://raw.githubusercontent.com/PedroDeVvV/GasFinder/initial/.github/a1.png",
			skills: [
				"Javascript",
				"HTML",
				"CSS",
				"React JS",
				"Figma",
				"Node JS",
				"Google Maps API",
			],
			projectText: "projects.gasfinderTxt",
			title: "GasFinder",
			repositoryLink: "https://github.com/J-Inacio/GasFinder",
			deployLink: "https://github.com/J-Inacio/GasFinder",
		},
		{
			img: "https://github.com/J-Inacio/transactions-with-api/raw/main/transactions-with-api.gif",
			skills: ["Javascript", "HTML", "CSS", "json-server"],
			projectText: "projects.transactionManagerTxt",
			title: "projects.transactionManagerTitle",
			repositoryLink: "https://github.com/J-Inacio/transactions-with-api",
			deployLink: "https://github.com/J-Inacio/transactions-with-api",
		},
		{
			img: "https://github.com/J-Inacio/weather-api/blob/main/screenshot.jpg?raw=true",
			skills: ["Javascript", "HTML", "CSS", "Rest API", "DOM", "Unsplash API", "Open Weather API"  ],
			projectText: "projects.weatherTxt",
			title: "projects.weatherTitle",
			repositoryLink: "https://github.com/J-Inacio/weather-api",
			deployLink: "https://weather-api-neon-six.vercel.app/",
		}
	];
	return (
		<Element name="projects">
			<section
				className={`${styles.projectsContainer} glassFilter`}
				id="projects"
			>
				<h2>{t("projects.projectsTitle")}</h2>
				<ul className={styles.projectsList}>
					{projectsData.map(
						({
							img,
							skills,
							deployLink,
							projectText,
							repositoryLink,
							title,
						}) => {
							return (
								<Project
									key={title}
									img={img}
									skills={skills}
									projectText={t(projectText)}
									title={t(title)}
									deployLink={deployLink}
									repositoryLink={repositoryLink}
									onImageClick={onImageClick}
								/>
							);
						}
					)}
				</ul>
				<a
					href="https://github.com/J-Inacio?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.moreProjects}
				>
					<h3>{t("projects.moreProjects")}</h3>
				</a>
			</section>
		</Element>
	);
};

export default ProjectsList;
