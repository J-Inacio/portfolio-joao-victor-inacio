import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-joao.svg";
import lightIcon from "../../assets/icons/light-icon.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";

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
				<img src={lightIcon} alt="" />
				<p>ENGLISH</p>
				<img src={menuIcon} alt="icone menu" />
			</div>
		</div>
	);
};

export { Navbar };
