import styles from "./Sidebar.module.css";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp, IoLogoLinkedin, IoDocumentText, IoLogoGithub, IoCloseSharp  } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { SiHyperskill } from "react-icons/si";

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div className={`${styles.sidebar} ${isOpen ? styles.open : ""} glassFilter`}>
			<button className={styles.closeButton} onClick={onClose}>
				<IoCloseSharp color="var(--text-color)"/>
			</button>
			<ul>
                <li cla><a href="#"><i><IoMdHome/></i>Início</a></li>
                <li><a href="#"><i><IoPersonSharp /></i>Sobre mim</a></li>
                <li><a href="#"><i><AiFillProject /></i>Projetos</a></li>
                <li><a href="#"><i><SiHyperskill /></i>Habilidades</a></li>
                <li><a href="#"><i><IoDocumentText /></i>Currículo</a></li>
                <li><a href="#"><i><IoLogoLinkedin /></i>Linkedin</a></li>
                <li><a href="#"><i><IoLogoGithub /></i>Github</a></li>
            </ul>
		</div>
	);
};

export default Sidebar;
