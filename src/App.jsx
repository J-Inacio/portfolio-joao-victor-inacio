import { useState } from "react";
import Background from "./components/Background";
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import ProjectsList from "./Sections/ProjectsList";
import Sidebar from "./components/MenuButton/Sidebar";
import ImageModal from "./components/ImageModal";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import './i18n.js';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const [selectedImageUrl, setSelectedImageUrl] = useState("");

	const openImageModal = (imageUrl) => {
		setSelectedImageUrl(imageUrl);
		setIsImageModalOpen(true);
	};

	const closeImageModal = () => {
		setIsImageModalOpen(false);
		setSelectedImageUrl("");
	};
	return (
		<>
			<Background />
			<header>
				<Navbar>
					<MenuButton onOpen={toggleSidebar} />
				</Navbar>
			</header>
			<main>
				<Hero />
				<About />
				<ProjectsList onImageClick={openImageModal} />
				<Skills />
			</main>
			<Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
			<ImageModal
				isOpen={isImageModalOpen}
				onClose={closeImageModal}
				src={selectedImageUrl}
				alt="Imagem do projeto ampliada"
			/>
			<Footer/>
		</>
	);
}

export default App;
