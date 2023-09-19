import React, {useState} from "react"

import classes from "./EditPostItem.module.css"

const EditPostItem = (props) => {
  const [caption, setCaption] = useState(props.caption)

  const setCaptionHandler = (event) => {
    setCaption(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onEdit(caption)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        autoFocus
        type="text"
        onChange={setCaptionHandler}
        value={caption}
      />
      <button type="submit">Submit Edit</button>
    </form>
  )
}

export default EditPostItem
