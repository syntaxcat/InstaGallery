import React from "react"

import classes from "./Header.module.css"
import Card from "../UI/Card"
import Image from "../UI/Image"

const Header = (props) => {
  const {profileImage, name, userName} = props.foundProfile
  return (
    <header className={classes.header}>
      <Card>
        <Image userImage={profileImage} />
      </Card>
      <div className={classes.userInfo}>
        <h1 className={classes.userName}>{userName}</h1>
        <div className={classes.contentInfo}>
          <span className={classes.NumOfPosts}>{props.postsCount}</span>
          &nbsp;posts
        </div>
        <div>{name}</div>
        <div>{props.foundProfile.bio}</div>
      </div>
    </header>
  )
}

export default Header
