import styles from "./Sidebar.module.css";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp, IoLogoLinkedin, IoDocumentText, IoLogoGithub, IoCloseSharp  } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { SiHyperskill } from "react-icons/si";

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div className={`${styles.sidebar} ${isOpen ? styles.open : ""} `}>
			<button className={styles.closeButton} onClick={onClose}>
				<IoCloseSharp color="var(--text-color)"/>
			</button>
			<ul>
                <li><a href="#"><i><IoMdHome/></i>Início</a></li>
                <li><a href="#"><i><IoPersonSharp /></i>Sobre mim</a></li>
                <li><a href="#"><i><AiFillProject /></i>Projetos</a></li>
                <li><a href="#"><i><SiHyperskill /></i>Habilidades</a></li>
                <li><a href="#"><i><IoDocumentText /></i>Currículo</a></li>
                <li><a href="https://www.linkedin.com/in/joaovictorinacio" target="_blank" rel="noopener noreferrer"><i><IoLogoLinkedin /></i>Linkedin</a></li>
                <li><a href="https://github.com/J-Inacio" target="_blank" rel="noopener noreferrer"><i><IoLogoGithub /></i>Github</a></li>
            </ul>
		</div>
	);
};

export default Sidebar;
