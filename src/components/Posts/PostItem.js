import React, {useState} from "react"
import classes from "../Posts/PostItem.module.css"

import EditPostItem from "./EditPostItem"

const PostItem = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const editPostHandler = () => {
    setIsEditing(true)
  }
  return (
    <li className={classes.post}>
      <div>post image goes here</div>
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
          <div>{props.caption}</div>
          <button onClick={editPostHandler}>Edit</button>
        </>
      )}

      <button onClick={props.onDeletePost}>Delete Post</button>
    </li>
  )
}

export default PostItem
