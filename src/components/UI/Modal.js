import {Fragment} from "react"
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
  console.log(props.modalActions)
  const modalActions = props.modalActions ? `${props.modalActions}` : " "
  const modalPostItem = props.className ? `${props.className}` : " "
  const modalClasses = `${classes.modal} ${modalPostItem} ${modalActions}`

  return (
    <div className={modalClasses}>
      {props.title && (
        <div className={classes.ModalHeading}>
          <h1>{props.title}</h1>
        </div>
      )}
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
        <ModalOverlay
          modalActions={props.modalActions}
          className={props.className}
          title={props.title}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
