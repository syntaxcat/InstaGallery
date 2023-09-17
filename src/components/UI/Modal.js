import {Fragment} from "react"
import ReactDOM from "react-dom"

import classes from "./Modal.module.css"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.ModalHeading}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onHideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
