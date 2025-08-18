import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoCopySharp,
	IoCheckboxSharp,
} from "react-icons/io5";
import { IoMdCheckbox } from "react-icons/io";
import styles from "./Footer.module.css";
import { useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Footer = () => {
	const [isCopied, SetIsCopied] = useState(false);
	const handleCopy = async () => {
		const email = "j.inacio.s@hotmail.com";

		try {
			await navigator.clipboard.writeText(email);

			SetIsCopied(true);
			setTimeout(() => {
				SetIsCopied(false);
			}, 3 * 1000);
		} catch (err) {
			console.error("Falha ao copiar o texto: ", err);
		}
	};

	const { t } = useTranslation();
	const { ref, inView } = useScrollAnimation();
	return (
		<Element name="footer">
			<footer
				id="#contact"
				ref={ref}
				className={`
				${styles.footerContainer} 
				glassFilter
				fade-in-section
				${inView ? "is-visible" : ""}
				`}
			>
				<h3>{t("footer.contactTitle")}</h3>
				<div className={styles.contactWrapper}>
					<div className={`${styles.emailWrapper} glass-btn`}>
						<a href="mailto:j.inacio.s@hotmail.com">j.inacio.s@hotmail.com</a>
						<i onClick={handleCopy}>
							{isCopied ? <IoMdCheckbox /> : <IoCopySharp />}
						</i>
					</div>

					<a
						className={`${styles.contactLink} glass-btn`}
						href="https://github.com/J-Inacio"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoGithub />
					</a>

					<a
						className={`${styles.contactLink} glass-btn`}
						href="https://www.linkedin.com/in/joaovictorinacio/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoLinkedin />
					</a>
				</div>
				<p>
					{t("footer.footerTxt")}
					<span style={{fontWeight: "bold"}}> João Victor</span>
				</p>
			</footer>
		</Element>
	);
};

export default Footer;
