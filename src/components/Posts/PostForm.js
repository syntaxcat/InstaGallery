import React, {useState} from "react"

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
    <form>
      <input value={caption} onChange={onChangeHandler} />
      <button onClick={submitHandler}>+ Add Post</button>
    </form>
  )
}

export default PostForm
