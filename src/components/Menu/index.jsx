import { useState } from "react";
import styles from "./Menu.module.css";
import Sidebar from "./Sidebar";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => {
        setIsOpen(!isOpen)
    };
	return (
        <>
        <button className={styles.menuButton} onClick={toggleSidebar}>
			<label className={styles.burger} htmlFor="burger">
				<span></span>
				<span></span>
				<span></span>
			</label>
		</button>
        <Sidebar isOpen={isOpen} onClose={toggleSidebar}/>
        </>
		
	);
};

export default Menu;
