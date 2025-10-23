import { IoMdHome } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import myCurriculumPDF from '../../assets/curriculoJoaoDev.pdf'
import {
    IoPersonSharp,
    IoLogoLinkedin,
    IoDocumentText,
    IoLogoGithub,
} from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { SiHyperskill } from "react-icons/si";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

	
const NavLinks = ({onClose}) => {
    const {t} = useTranslation()
    return(
        <ul>
				<li>
					<Link
						to="hero" 
						spy={true}
						smooth={true}
						offset={-80}
						duration={500}
						onClick={onClose} 
					>
						<i>
							<IoMdHome />
						</i>
						<span>{t('navbar.home')}</span>
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
						<span>{t('navbar.about')}</span>
					</Link>
				</li>
				<li>
                    <Link
						to="projects"
						smooth={true} 
						offset={-80} 
						duration={500}
						onClick={onClose}
					>
						<i>
							<AiFillProject />
						</i>
						<span>{t('navbar.projects')}</span>
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
						<span>{t('navbar.skills')}</span>
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
						<span>{t('navbar.contact')}</span>
					</Link>
				</li>
				<li>
					<a href={myCurriculumPDF} download="Curriculo_Joao_Inacio.pdf">
						<i>
							<IoDocumentText />
						</i>
						{t('navbar.resume')}
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
    )
}

export default NavLinks