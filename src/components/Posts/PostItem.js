import React, {Fragment, useState} from "react"
import classes from "../Posts/PostItem.module.css"
import EditPostItem from "./EditPostItem"
import Modal from "../UI/Modal"

const PostItem = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const editPostHandler = () => {
    setIsEditing(true)
  }

  const openModalPostHandler = () => {
    setIsModalOpen(true)
  }

  const hideModalPostHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <li onClick={openModalPostHandler} className={classes.post}>
        <img
          className={classes.postImage}
          src="https://picsum.photos/300/300"
        />
      </li>

      {isModalOpen && (
        <Modal onHideModal={hideModalPostHandler}>
          <div>
            <img
              className={classes.postImage}
              src="https://picsum.photos/300/300"
            />
            <div className={classes.postItemActions}>
              {isEditing ? (
                <EditPostItem
                  caption={props.caption}
                  onEdit={(caption) => {
                    props.onEditPost(caption)
                    setIsEditing(false)
                  }}
                />
              ) : (
                <>
                  <div className={classes.captionText}>{props.caption}</div>
                  <button onClick={editPostHandler}>Edit</button>
                </>
              )}

              <button onClick={props.onDeletePost}>Delete Post</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default PostItem
