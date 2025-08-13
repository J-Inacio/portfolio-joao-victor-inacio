import perfilPhoto from "../../assets/img/perfil-photo.png";
import styles from "./Hero.module.css";
import { FiDownload } from "react-icons/fi";
import { Element } from "react-scroll";
import myCurriculum from "../../assets/curriculoJoaoDev.pdf"
import { useTranslation } from "react-i18next";

const Hero = () => {

	const {t} = useTranslation();
	return (
		<Element name="hero">
			<section id={styles.hero} className="liteGlassFilter">
			<img src={perfilPhoto} alt="Foto João" />
			<aside className= {styles.title}>
				<p>{t('hero.title')}</p>
				<p>
					<strong>João Victor Inácio.</strong>
				</p>
				<p>{t('hero.subtitle')}</p>
			</aside>

			<aside className= {styles.text}>
				<p>
					{t('hero.resume')}
				</p>
			</aside>
			<a href={myCurriculum} download="Curriculo_Joao_Inacio.pdf">
				<span>{t('hero.buttonText')}</span>
				<FiDownload />
			</a>
		</section>
		</Element>
		
	);
};

export default Hero;
