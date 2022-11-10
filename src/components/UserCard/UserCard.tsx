import styles from "./UserCard.module.scss";
import { UserStats } from './../UserStats';
import { UserTitle } from './../UserTitle';
import { LocalGithubUser } from 'types';
import { UserInfo } from "../UserInfo"

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar}/>
    <UserTitle
      name={props.name}
      login={props.login}
      created={props.created}      
    />
    <p className={`${styles.bio}${props.bio ? `` : ` ${styles.empty}`}`}>
      {props.bio || "This profile has no bio"}
    </p>
    <UserStats
      followers={props.followers}
      following={props.following}
      repos={props.repos}
    />
    <UserInfo
      blog={props.blog}
      location={props.location}
      company={props.company}
      twitter={props.twitter}
    />
  </div>
);
