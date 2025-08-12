import { useState } from "react";
import styles from "./MenuButton.module.css";
import Sidebar from "./Sidebar";

const MenuButton = ({onOpen}) => {
	
	return (
        <>
        <button className={styles.menuButton} onClick={onOpen}>
			<label className={styles.burger} htmlFor="burger">
				<span></span>
				<span></span>
				<span></span>
			</label>
		</button>
      
        </>
		
	);
};

export default MenuButton;
