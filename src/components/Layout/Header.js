import React, {Fragment} from "react"

import classes from "./Header.module.css"
import profileImg from "../../assets/profile.JPG"
import Card from "../UI/Card"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Michaela Voronov</h1>
        <Card>
          <img src="" alt="" />
        </Card>
      </header>
    </Fragment>
  )
}

export default Header
