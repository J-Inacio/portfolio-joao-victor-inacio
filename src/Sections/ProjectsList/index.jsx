import { Element } from "react-scroll";
import Project from "../../components/Project";
import styles from "./ProjectsList.module.css";

const projectsData = [
	{
		img: "https://github.com/J-Inacio/psicoser/blob/main/src/assets/img/screenshot3.png?raw=true",
		skills: ["Javascript", "HTML", "CSS", "Webpack", "Figma"],
		projectText: `O Psicoser é uma landing page desenvolvida para um consultório psicológico real, com o objetivo de atrair mais pacientes e ampliar a divulgação dos serviços.
		O projeto foi criado com foco em acessibilidade, clareza e impacto visual, garantindo que a mensagem central do consultório fosse transmitida de forma acolhedora e profissional.`,
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
		projectText: `GasFinder, é um projeto que facilita a busca pelos melhores preços de combustíveis e postos próximos a você! Desenvolvido como Trabalho de Conclusão de Curso (TCC) na ETEC de Embu, o GasFinder utiliza dados atualizados da ANP (Agência Nacional do Petróleo) para fornecer informações precisas e confiáveis.`,
		title: "GasFinder",
		repositoryLink: "https://github.com/J-Inacio/GasFinder",
		deployLink: "https://github.com/J-Inacio/GasFinder",
	},
	{
		img: "https://github.com/J-Inacio/transactions-with-api/raw/main/transactions-with-api.gif",
		skills: ["Javascript", "HTML", "CSS", "json-server"],
		projectText: `Este projeto foi desenvolvido para exercitar o uso de requisições a uma API, utilizando a ferramenta json-server para simular uma API RESTful a partir de um arquivo JSON. No projeto é possível adicionar, editar e remover transações utilizando métodos: POST | PUT | DELETE`,
		title: "Gerenciador de Transações",
		repositoryLink: "https://github.com/J-Inacio/transactions-with-api",
		deployLink: "https://github.com/J-Inacio/transactions-with-api",
	},
];

const ProjectsList = ({ onImageClick }) => {
	return (
		<Element name="projects">
			<section className={`${styles.projectsContainer} glassFilter`} id="projects">
			<h2>Projetos</h2>
			<ul>
				{projectsData.map(
					({ img, skills, deployLink, projectText, repositoryLink, title }) => {
						return (
							<Project
							key={title}
								img={img}
								skills={skills}
								projectText={projectText}
								title={title}
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
				<h3>Ver mais projetos</h3>
			</a>
		</section>
		</Element>
		
	);
};

export default ProjectsList;
