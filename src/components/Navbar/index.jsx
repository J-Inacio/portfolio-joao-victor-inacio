import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";

import { SwitchTheme } from "../SwitchTheme";
import i18n from "../../i18n";
import { useState } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from 'react-scroll'

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
			smooth: 'easeInOutQuint'
		})
	}
	return (
		<nav className={`${styles.navbar} liteGlassFilter`}>
		
			<div className={styles.logoWrapper} onClick={scrollHome}>
				<p style={{ fontFamily: "Unica One" }}>&lt; / &gt;   J-INACIO</p>
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
