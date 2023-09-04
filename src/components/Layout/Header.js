import React from "react"

import classes from "./Header.module.css"
import profileImg from "../../assets/profile.JPG"
import Card from "../UI/Card"

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Card>
        <img src="" alt="" />
      </Card>
      <h1>Michaela Voronov</h1>
    </header>
  )
}

export default Header
