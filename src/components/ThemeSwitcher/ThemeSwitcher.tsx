import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState<boolean>(false);

  const text = isDark ? "dark" : "light"
  const Icon = isDark ? MoonIcon : SunIcon

  useEffect(() => {
    document.body.setAttribute("data-theme", text)
  }, [text])

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{text}</span>
      <Icon className={styles.icon}/>
    </div>
  )
}
