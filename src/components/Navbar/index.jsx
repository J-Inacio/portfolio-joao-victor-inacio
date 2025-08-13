import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";

import { SwitchTheme } from "../SwitchTheme";
import i18n from "../../i18n";
const Navbar = ({children}) => {
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
				<button className={styles.myName} onClick={() => i18n.changeLanguage('en')}>ENGLISH</button>
				{children}
			</div>
		</nav>
	);
};

export default Navbar;
