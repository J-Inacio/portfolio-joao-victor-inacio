import { useState } from "react";
import styles from "./About.module.css";
import TimelineCard from "../../components/TimelineCard";
import SkillCard from "../../components/SkillCard";

const AboutJsx = () => {
	return (
		<>
			<p>
				Sou formado como Técnico em Desenvolvimento de Sistemas pela Etec de Embu e atualmente curso Análise e Desenvolvimento de Sistemas na UNIFECAF. 
                </p>
                <p>Sou uma pessoa proativa, curiosa e comprometida, sempre em busca de novos desafios e aprendizado contínuo. Tenho facilidade para trabalhar em equipe, boa comunicação e atenção aos detalhes, o que me ajuda a entregar soluções bem estruturadas e alinhadas às necessidades do projeto.</p> 
                <p>Tenho experiência prática com JavaScript, React, Python, MySQL, HTML e CSS, além de conhecimentos em Git e Figma.</p>
			
			<p>
				Gosto de resolver problemas de forma criativa, unindo pensamento lógico e visão de usuário para construir experiências mais intuitivas. Meu objetivo é evoluir constantemente como desenvolvedor, contribuindo com soluções eficientes e colaborando para o sucesso das equipes e empresas com as quais atuo.
			</p>
		</>
	);
};

const About = () => {
	const [option, setOption] = useState("about");
	const texts = {
		about: <AboutJsx />,
		// experience: <TimelineCard data={"Set 2025 - Atualmente"} local={"Natura & Co"} title={"Estagiário Software Engineer"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed tristique mauris, et consectetur nulla. Vivamus eu sapien quis odio fermentum egestas varius ut mauris. Sed ut velit eros. Aliquam erat volutpat. Donec a ante orci. Fusce tristique ac leo at tempus. Etiam pharetra eget orci in eleifend. Phasellus sit amet nibh quam. Cras sodales lorem vitae elit sollicitudin dignissim at et felis. Mauris eu felis sed lorem volutpat rhoncus. Vestibulum aliquet, velit placerat elementum feugiat, nunc ipsum viverra lectus, sed dapibus neque enim sed augue."}>
            
        // </TimelineCard>,
		education: <>
        <TimelineCard 
        data={"Nov 2024 - Atualmente"}
        local={"UNIFECAF Taboão da Serra"}
        title={"Ensino Superior em Análise e Desenvolvimento de Sistemas(EAD)"}
        text={"Estou cursando Análise e Desenvolvimento de Sistemas, um curso superior de tecnologia voltado para a criação, manutenção e melhoria de sistemas e aplicações. Durante a formação, tenho aprendido sobre programação, banco de dados, desenvolvimento web e boas práticas de engenharia de software, sempre com foco em desenvolver soluções eficientes e inovadoras. Por ser um curso de tecnólogo, o aprendizado é dinâmico e direcionado para as demandas do mercado, o que me permite aplicar na prática os conhecimentos adquiridos e me preparar para atuar em diferentes áreas da tecnologia, desde o desenvolvimento de sistemas até a gestão de projetos."}
        >

        <SkillCard>
            Agile Methods
        </SkillCard>
        <SkillCard>
            Python
        </SkillCard>
        <SkillCard>
            Database
        </SkillCard>
        <SkillCard>
            HTTP Protocol
        </SkillCard>
        <SkillCard>
           Computer Architecture
        </SkillCard>
        </TimelineCard>

        <TimelineCard 
        data={"Jun 2022 - Dez 2023"}
        local={"ETEC de Embu"}
        title={"Ensino Técnico em Desenvolvimento de Sistemas"}
        text={"Sou formado em Técnico em Desenvolvimento de Sistemas pela ETEC, onde adquiri uma base sólida em programação, lógica, modelagem de dados e desenvolvimento de aplicações. O curso me proporcionou experiência prática com linguagens e tecnologias amplamente utilizadas no mercado, além de incentivar o trabalho em equipe e a resolução de problemas reais. Essa formação foi fundamental para despertar ainda mais meu interesse pela área e consolidar minha escolha por seguir carreira em tecnologia."}
        >

        <SkillCard>
            Javascript
        </SkillCard>

        <SkillCard>
            HTML
        </SkillCard>

        <SkillCard>
            CSS
        </SkillCard>
        <SkillCard>
            MySQL
        </SkillCard>
        <SkillCard>
            c#
        </SkillCard>
        <SkillCard>
            Python
        </SkillCard>
        <SkillCard>
            Java
        </SkillCard>
        <SkillCard>
            Excel
        </SkillCard>
        <SkillCard>
            Word
        </SkillCard>

        </TimelineCard>
        </>
	};
	return (
		<section id="about" className={`${styles.aboutContainer} liteGlassFilter`}>
			<nav>
				<button onClick={() => setOption("about")}>Sobre mim</button>
				<button onClick={() => setOption("experience")}>Experiência</button>
				<button onClick={() => setOption("education")}>Formação</button>
			</nav>
			<aside>{texts[option]}</aside>
		</section>
	);
};

export default About;
