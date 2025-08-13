import perfilPhoto from "../../assets/img/perfil-photo.png";
import styles from "./Hero.module.css";
import Button from "../../components/Button"
import { FiDownload } from "react-icons/fi";
import { Element } from "react-scroll";
import myCurriculum from "../../assets/curriculoJoaoDev.pdf"

const Hero = () => {
	return (
		<Element name="hero">
			<section id={styles.hero} className="liteGlassFilter">
			<img src={perfilPhoto} alt="Foto João" />
			<aside className= {styles.title}>
				<p>Olá, eu sou</p>
				<p>
					<strong>João Victor Inácio.</strong>
				</p>
				<p>Desenvolvedor Front-end</p>
			</aside>

			<aside className= {styles.text}>
				<p>
					Sou desenvolvedor front-end com paixão por interfaces limpas,
					acessíveis e impactantes. Trabalho com HTML, CSS, JavaScript e Figma,
					sempre buscando equilíbrio entre design e performance. Me aprofundo
					cada vez mais em React, TypeScript e boas práticas de UX/UI.
				</p>
			</aside>
			<a href={myCurriculum}>
				<span>BAIXE MEU CURRÍCULO</span>
				<FiDownload />
			</a>
		</section>
		</Element>
		
	);
};

export default Hero;
