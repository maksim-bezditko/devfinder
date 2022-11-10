import styles from './Header.module.scss';
import { ThemeSwitcher } from './../ThemeSwitcher';

export const Header = () => (
  <header className={styles.header}>
    <p className={styles.logo}>
      devfinder
    </p>
    <ThemeSwitcher/>
  </header>
);
