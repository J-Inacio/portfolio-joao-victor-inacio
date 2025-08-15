import NavLinks from "../NavLinks";
import styles from "./Sidebar.module.css";
import {IoCloseSharp} from "react-icons/io5";

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div className={`${styles.sidebar} ${isOpen ? styles.open : ""} `}>
			<button className={styles.closeButton} onClick={onClose}>
				<IoCloseSharp color="var(--text-color)" />
			</button>
			<NavLinks/>
		</div>
	);
};

export default Sidebar;
