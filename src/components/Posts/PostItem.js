import React from "react"
import classes from "../Posts/PostItem.module.css"

const PostItem = (props) => {
  //   const post = () => {
  //     id: props.id,
  //     caption: props.caption
  //   }

  // const newPost = {...PostItem}

  // This component should have the entered post to update the relevant properties.

  return (
    <li className={classes.post}>
      <div>post image goes here</div>
      <div>{props.caption}</div>
      <button onClick={props.onDeletePost}>Delete Post</button>
    </li>
  )
}

export default PostItem
