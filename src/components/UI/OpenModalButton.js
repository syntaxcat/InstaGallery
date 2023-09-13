import React from "react"
import Create from "../svg/Create"
import classes from "./OpenModalButton.module.css"

const OpenModalButton = (props) => {
  return (
    <div>
      <button className={classes.btn} onClick={props.onShowModal}>
        <Create />
        Create
      </button>
    </div>
  )
}

export default OpenModalButton
