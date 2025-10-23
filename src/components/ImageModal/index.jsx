import { useEffect } from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ src, alt, isOpen, onClose }) => {
    
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