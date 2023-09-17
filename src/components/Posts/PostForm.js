import React, {useState} from "react"
import classes from "../../App.module.css"

const PostForm = (props) => {
  const [caption, setCaption] = useState("")

  const submitHandler = (event) => {
    event.preventDefault()

    if (caption.trim().length === 0) {
      return
    } else {
      props.onAddPost(caption)
    }
    setCaption("")
  }

  const onChangeHandler = (event) => {
    setCaption(event.target.value)
  }

  return (
    <form className={classes.createPostForm}>
      <input autoFocus value={caption} onChange={onChangeHandler} />
      <button onClick={submitHandler}>+ Add Post</button>
    </form>
  )
}

export default PostForm
