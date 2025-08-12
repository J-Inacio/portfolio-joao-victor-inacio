import Project from "../../components/Project";
import styles from "./ProjectsList.module.css";

const ProjectsList = () => {
	return (
		<section className={`${styles.projectsContainer} glassFilter`}>
			<h2>Projetos</h2>
			<ul>
				<Project
					img={
						"https://github.com/J-Inacio/psicoser/blob/main/src/assets/img/screenshot3.png?raw=true"
					}
					skills={["Javascript", "HTML"]}
					projectText={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed tristique mauris, et consectetur nulla. Vivamus eu sapien quis odio fermentum egestas varius ut mauris. Sed ut velit eros. Aliquam erat volutpat. Donec a ante orci. Fusce tristique ac leo at tempus. Etiam pharetra eget orci in eleifend. Phasellus sit amet nibh quam. Cras sodales lorem vitae elit sollicitudin dignissim at et felis. Mauris eu felis sed lorem volutpat rhoncus. Vestibulum aliquet, velit placerat elementum feugiat, nunc ipsum viverra lectus, sed dapibus neque enim sed augue."
					}
					title={"Psicoser"}
					deployLink={"https://github.com/J-Inacio/psicoser"}
					repositoryLink={"https://psicoser.vercel.app/"}
				/>
			</ul>
            <a href="https://github.com/J-Inacio?tab=repositories" target="_blank" rel="noopener noreferrer" className= {styles.moreProjects}><h3>Ver mais projetos</h3></a>
		</section>
	);
};

export default ProjectsList;
