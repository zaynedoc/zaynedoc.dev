import styles from "./HeroBackground.module.css";

export function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />
      <div className={`${styles.blob} ${styles.blobFour}`} />
      <div className={`${styles.blob} ${styles.blobFive}`} />
      <div className={styles.dots} />
    </div>
  );
}
