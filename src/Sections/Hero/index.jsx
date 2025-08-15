import perfilPhoto from "../../assets/img/selfie-portfolio.png";
import styles from "./Hero.module.css";
import { FiDownload } from "react-icons/fi";
import { Element } from "react-scroll";
import myCurriculum from "../../assets/curriculoJoaoDev.pdf";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	const { t } = useTranslation();
	return (
		<Element name="hero">
			<section id={styles.hero} className="liteGlassFilter">
				<img src={perfilPhoto} alt="Foto João" />
				<div className={styles.contentWrapper}>
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
								sequence={[1000, "João Victor Inácio."]}
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
				<a className="glass-btn" href={myCurriculum} download="Curriculo_Joao_Inacio.pdf">
					<span>{t("hero.buttonText")}</span>
					<FiDownload />
				</a>
				</div>
				
			</section>
		</Element>
	);
};

export default Hero;
