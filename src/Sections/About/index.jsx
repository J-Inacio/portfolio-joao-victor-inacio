import { useState } from "react";
import styles from "./About.module.css";
import TimelineCard from "../../components/TimelineCard";
import SkillsCard from "../../components/SkillsCard";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();
	const [option, setOption] = useState("about");
	const texts = {
		about: (
			<>
				<p>{t("about.aboutP1")}</p>
				<p>{t("about.aboutP2")}</p>

				<p>{t("about.aboutP3")}</p>
			</>
		),
		// experience: <TimelineCard data={"Set 2025 - Atualmente"} local={"Natura & Co"} title={"Estagiário Software Engineer"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed tristique mauris, et consectetur nulla. Vivamus eu sapien quis odio fermentum egestas varius ut mauris. Sed ut velit eros. Aliquam erat volutpat. Donec a ante orci. Fusce tristique ac leo at tempus. Etiam pharetra eget orci in eleifend. Phasellus sit amet nibh quam. Cras sodales lorem vitae elit sollicitudin dignissim at et felis. Mauris eu felis sed lorem volutpat rhoncus. Vestibulum aliquet, velit placerat elementum feugiat, nunc ipsum viverra lectus, sed dapibus neque enim sed augue."}>

		// </TimelineCard>,
		education: (
			<>
				<TimelineCard
					data={t("about.adsDate")}
					local={"UNIFECAF Taboão da Serra"}
					title={t("about.adsTitle")}
					text={t("about.adsText")}
				>
					<SkillsCard
						skills={[
							"Agile Methods",
							"Python",
							"Database",
							"HTTP Protocol",
							"Computer Architecture",
						]}
					/>
				</TimelineCard>

				<TimelineCard
					data={t("about.etecDate")}
					local={"ETEC de Embu"}
					title={t("about.etecTitle")}
					text={t("about.etecText")}
				>
					<SkillsCard
						skills={[
							"Javascript",
							"Python",
							"HTML",
							" CSS",
							"MySQL",
							"C#",
							"Java",
							"Excel",
							"Word",
						]}
					/>
				</TimelineCard>
			</>
		),
	};
	return (
		<Element name="about">
			<section
				id="about"
				className={`${styles.aboutContainer} liteGlassFilter`}
			>
				<nav>
					<button onClick={() => setOption("about")}>Sobre mim</button>
					<button onClick={() => setOption("experience")}>Experiência</button>
					<button onClick={() => setOption("education")}>Formação</button>
				</nav>
				<aside>{texts[option]}</aside>
			</section>
		</Element>
	);
};

export default About;
