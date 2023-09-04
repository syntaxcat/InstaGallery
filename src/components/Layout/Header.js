import React from "react"

import classes from "./Header.module.css"
import Card from "../UI/Card"
import Image from "../UI/Image"

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Card>
        <Image />
      </Card>
      <h1>Michaela Voronov</h1>
    </header>
  )
}

export default Header
