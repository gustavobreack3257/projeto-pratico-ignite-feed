import styles from "./Header.module.css";
import IgniteLogo from "../assets/Ignite simbol.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="logo da aplicação" />

      <div>
        <h1 className={styles.h1}>Header</h1>
      </div>
    </header>
  );
}
