import React from "react"
import classes from "../Posts/PostItem.module.css"

const PostItem = (props) => {
  return (
    <li className={classes.post}>
      <div>post image goes here</div>
      <div>{props.caption}</div>
      <button onClick={props.onDeletePost}>Delete Post</button>
    </li>
  )
}

export default PostItem
