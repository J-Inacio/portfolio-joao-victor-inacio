import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { SwitchTheme } from "../SwitchTheme";

const Navbar = () => {
	return (
		<div className={`${styles.navbar} glassFilter`}>
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
				<img src={menuIcon} alt="icone menu" onClick={() => alert("ola")} />
			</div>
		</div>
	);
};

export { Navbar };
