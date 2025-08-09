import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
			<button className={styles.closeButton} onClick={onClose}>
				&times;
			</button>
			<ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
		</div>
	);
};

export default Sidebar;
