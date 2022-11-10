import styles from "./InfoItem.module.scss";
import { ReactNode } from 'react';

export interface InfoItemProps {
  icon: ReactNode,
  text?: string | null,
  isLink: boolean
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || "Not Available";
  
  let currentHref = "";

  if (isLink) {
    currentHref = text && (text?.startsWith("http://") || text?.startsWith("https://")) ? text : `https://${text}` 
  }

  return (
    <div className={`${styles.infoItem}${text ? `` : ` ${styles.empty}`}`}>
      {icon}
      {isLink && text ? (
        <a href={currentHref} className={styles.link} target="_blank" rel="noreferrer">{currentText}</a>
      ) : <p>{currentText}</p>}
    </div>
  );
};
