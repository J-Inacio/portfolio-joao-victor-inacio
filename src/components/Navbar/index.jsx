import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";

import { SwitchTheme } from "../SwitchTheme";
import i18n from "../../i18n";
import { useState } from "react";
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
	return (
		<nav className={`${styles.navbar} liteGlassFilter`}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
				}}
			>
				<img src={logo} alt="logo joão" />
				<p>J-INACIO</p>
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
