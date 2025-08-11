import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";

import { SwitchTheme } from "../SwitchTheme";
import Menu from "../Menu";

const Navbar = () => {
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
				<p className={styles.myName}>J-INACIO</p>
			</div>
			<div className={styles.btnsWrapper}>
				<SwitchTheme />
				<p>ENGLISH</p>
				<Menu/>
			</div>
		</nav>
	);
};

export default Navbar;
