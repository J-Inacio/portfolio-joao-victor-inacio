import styles from "./Navbar.module.css";
import { SwitchTheme } from "../SwitchTheme";
import i18n from "../../i18n";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Navbar = ({ children }) => {
	const [btnName, setBtnName] = useState("EN");
	const toggleLang = () => {
		if (btnName === "EN") {
			setBtnName("PT-BR");
			i18n.changeLanguage("en");
		} else {
			setBtnName("EN");
			i18n.changeLanguage("pt-BR");
		}
	};

	const scrollHome = () => {
		scroll.scrollToTop({
			duration: 500,
			smooth: "easeInOutQuint",
		});
	};
	return (
		<nav className={`${styles.navbar} liteGlassFilter`}>
			<div className={styles.logoWrapper} onClick={scrollHome}>
				<span>&lt; / &gt;</span>{" "}
				<span style={{ fontFamily: "Unica One" }}>
					<TypeAnimation   sequence={["J-INACIO"]} cursor ={false} 
					style={{fontFamily: "Unica One"}}
					/>
				</span>
			</div>

			<div className={styles.btnsWrapper}>
				<SwitchTheme />
				<button className={styles.langBtn} onClick={toggleLang}>
					{btnName}
				</button>
				{children}
			</div>
		</nav>
	);
};

export default Navbar;
