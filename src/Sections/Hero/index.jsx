import perfilPhoto from "../../assets/img/perfil-photo.png";
import styles from "./Hero.module.css";
import { FiDownload } from "react-icons/fi";
import { Element } from "react-scroll";
import myCurriculum from "../../assets/curriculoJoaoDev.pdf";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	const { t, i18n } = useTranslation();

	if (!i18n.isInitialized) {
    // Você pode retornar um spinner, um esqueleto, ou simplesmente nada (null)
    return null; 
  }
	return (
		<Element name="hero">
			<section id={styles.hero} className="liteGlassFilter">
				<img src={perfilPhoto} alt="Foto João" />
				<aside className={styles.title}>
					<p>
						<TypeAnimation
							sequence={["Olá, eu sou"]}
							wrapper="span"
							speed={50}
							cursor={false}
						/>
					</p>
					<p>
						<strong>
						<TypeAnimation
							sequence={ [1000, "João Victor Inácio."]}
							wrapper="span"
							speed={50}
							cursor={false}
						/>
						</strong>
					</p>
					<p>
						<TypeAnimation
							sequence={[2100, "Desenvolvedor Front-end"]}
							wrapper="span"
							speed={50}
							cursor={true}
						/>
						</p>
				</aside>

				<aside className={styles.text}>
					<p>{t("hero.resume")}</p>
				</aside>
				<a href={myCurriculum} download="Curriculo_Joao_Inacio.pdf">
					<span>{t("hero.buttonText")}</span>
					<FiDownload />
				</a>
			</section>
		</Element>
	);
};

export default Hero;
