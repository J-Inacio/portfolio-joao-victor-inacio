import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";
import lightIcon from "../../assets/icons/light-icon.svg";
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
					gap: ".5rem",
				}}
			>
				<img src={logo} alt="logo joão" />
				<p style={{ fontFamily: "Unica One", color: "#FFF" }}>J-INACIO</p>
			</div>
			<div className={styles.btnsWrapper}>
				{/* <img src={lightIcon} alt="" /> */}
				<SwitchTheme/>
				<p>ENGLISH</p>
				<img src={menuIcon} alt="icone menu" onClick={() => alert("ola")}/>
			</div>
		</div>
	);
};

export { Navbar };
