import styles from "./UserTitle.module.scss";
import { LocalGithubUser } from 'types';

export interface UserTitleProps extends Pick<LocalGithubUser, "name" | "login" | "created"> { }

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: 'numeric'
})

export const UserTitle = (props: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(props.created))
  
  return (
    <div className={styles.userTitle}>
      <h2>{props.name}</h2>
      <h3>{props.login}</h3>
      <span>{joinedDate}</span>
    </div>  
  );
}
