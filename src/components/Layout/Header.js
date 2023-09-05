import React from "react"

import classes from "./Header.module.css"
import Card from "../UI/Card"
import Image from "../UI/Image"

const Header = (props) => {
  const {profileImage, name} = props.foundProfile
  return (
    <header className={classes.header}>
      <Card>
        <Image userImage={profileImage} />
      </Card>
      <h1>{name}</h1>
    </header>
  )
}

export default Header
