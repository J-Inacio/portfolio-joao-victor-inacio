import { useState } from "react";
import styles from "./About.module.css";

const AboutJsx = () => {
	return (
		<>
			<p>
				Sou formado como Técnico em Desenvolvimento de Sistemas pela Etec de
				Embu e atualmente cursando Análise e Desenvolvimento de Sistemas na
				UNIFECAF. Tenho experiência prática com JavaScript, React, Python,
				MySQL, HTML e CSS, além de conhecimentos em Git e Figma.
			</p>
			<p>
				Gosto de resolver problemas com código e estou sempre buscando aprender
				mais para melhorar minhas habilidades. Tenho experiência com projetos
				acadêmicos e pessoais, como o GasFinder, um sistema para consulta de
				preços de combustíveis. Meu objetivo é consolidar minhas habilidades
				atuando como desenvolvedor e evoluir profissionalmente.
			</p>
		</>
	);
};

const About = () => {
	const [option, setOption] = useState("about");
	const texts = {
		about: <AboutJsx />,
		// experience:
		// education:
	};
	return (
		<section id="about" className={`${styles.aboutContainer} liteGlassFilter`}>
			<nav>
				<button onClick={() => setOption("about")}>Sobre mim</button>
				<button onClick={() => setOption("experience")}>Experiência</button>
				<button onClick={() => setOption("education")}>Educação</button>
			</nav>
			<aside>{texts[option]}</aside>
		</section>
	);
};

export default About;
