import styles from "./UserInfo.module.scss";
import { InfoItemProps, InfoItem } from './../InfoItem';
import { LocalGithubUser } from './../../types/userTypes';

import {ReactComponent as LocationIcon} from "../../assets/icon-location.svg";
import {ReactComponent as CompanyIcon} from "../../assets/icon-company.svg";
import {ReactComponent as TwitterIcon} from "../../assets/icon-twitter.svg";
import {ReactComponent as BlogIcon} from "../../assets/icon-website.svg";


interface UserInfoProps extends Pick<LocalGithubUser, "location" | "blog" | "company" | "twitter">{
  
}

export const UserInfo = ({location, twitter, blog, company}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon/>,
      text: location,
      isLink: false
    },
    {
      icon: <TwitterIcon/>,
      text: twitter,
      isLink: false
    },
    {
      icon: <BlogIcon/>,
      text: blog,
      isLink: true
    },
    {
      icon: <CompanyIcon/>,
      text: company,
      isLink: false
    },
  ]


  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem
          {...item}
          key={index}
        />
      ))}
    </div>
  );

};
