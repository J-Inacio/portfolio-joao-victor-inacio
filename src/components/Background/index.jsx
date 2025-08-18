import styles from "./Background.module.css";

const Background = () => {
	return (
		<div className={styles.backgroundContainer}>
			<div className={`${styles.animatedCircle} ${styles.circle1}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle2}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle3}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle4}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle5}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle6}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle7}`}></div>
			<div className={`${styles.animatedCircle} ${styles.circle8}`}></div>
            <div className={`${styles.animatedCircle} ${styles.circle9}`}></div>
            <div className={`${styles.animatedCircle} ${styles.circle10}`}></div>
		</div>
	);
};

export default Background;
