import styles from "./Sidebar.module.css";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import myCurriculumPDF from '../../../assets/curriculoJoaoDev.pdf'
import {
	IoPersonSharp,
	IoLogoLinkedin,
	IoDocumentText,
	IoLogoGithub,
	IoCloseSharp,
} from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { SiHyperskill } from "react-icons/si";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div className={`${styles.sidebar} ${isOpen ? styles.open : ""} `}>
			<button className={styles.closeButton} onClick={onClose}>
				<IoCloseSharp color="var(--text-color)" />
			</button>
			<ul>
				<li>
					<Link
						to="hero" // O 'name' da sua seção Hero
						spy={true} // Opcional: destaca o link quando a seção está visível
						smooth={true} // Ativa a rolagem suave
						offset={-80} // A MÁGICA: Ajusta a posição final da rolagem (em pixels)
						duration={500} // Duração da animação em milissegundos
						onClick={onClose} // Fecha a sidebar após o clique
					>
						<i>
							<IoMdHome />
						</i>
						<span>Início</span>
					</Link>
				</li>
				<li>
                    <Link
						to="about"
						smooth={true} 
						offset={-80} 
						duration={500}
						onClick={onClose}
					>
						<i>
							<IoPersonSharp />
						</i>
						<span>Sobre mim</span>
					</Link>
				</li>
				<li>
                    <Link
						to="#projects"
						smooth={true} 
						offset={-80} 
						duration={500}
						onClick={onClose}
					>
						<i>
							<AiFillProject />
						</i>
						<span>Projetos</span>
					</Link>
				</li>
				<li>
                    <Link
						to="#skills"
						smooth={true} 
						offset={-80} 
						duration={500}
						onClick={onClose}
					>
						<i>
							<SiHyperskill />
						</i>
						<span>Habilidades</span>
					</Link>
				</li>
                <li>
                    <Link
						to="#contact"
						smooth={true} 
						offset={-80} 
						duration={500}
						onClick={onClose}
					>
						<i>
							<MdOutlineAlternateEmail />
						</i>
						<span>Contato</span>
					</Link>
				</li>
				<li>
					<a href={myCurriculumPDF} download="Curriculo_Joao_Inacio.pdf">
						<i>
							<IoDocumentText />
						</i>
						Currículo
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/joaovictorinacio"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i>
							<IoLogoLinkedin />
						</i>
						Linkedin
					</a>
				</li>
				<li>
					<a
						href="https://github.com/J-Inacio"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i>
							<IoLogoGithub />
						</i>
						Github
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
