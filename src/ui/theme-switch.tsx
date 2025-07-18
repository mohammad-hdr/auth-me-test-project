import styles from "./theme-switch.module.scss";
export default function ThemeSwitch() {
    return (
        <div className={styles.toggleSwitch}>
            <label className={styles.switchLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
}
