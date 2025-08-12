// src/components/ImageModal.jsx (VERSÃO CORRIGIDA)

import { useEffect } from "react";
import styles from "./ImageModal.module.css";

// 1. AQUI ESTÁ A MUDANÇA PRINCIPAL: use { chaves } para desestruturar as props
const ImageModal = ({ src, alt, isOpen, onClose }) => {
    
    // Se não estiver aberto, não renderiza nada.
    if (!isOpen) {
        return null;
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const handleContentClick = (event) => {
        event.stopPropagation();
    };

    // 2. ADICIONE O 'RETURN' AQUI
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={handleContentClick}>
                <img src={src} alt={alt} className={styles.modalImage} />
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageModal;