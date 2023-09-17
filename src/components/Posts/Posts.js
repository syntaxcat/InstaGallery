import {useState} from "react"
import classes from "../Posts/Posts.module.css"
import PostItem from "./PostItem"

const Posts = (props) => {
  const postsList = props.posts.map((post) => (
    <PostItem
      onEditPost={(caption) => {
        props.onUpdatedPost(caption, post.id)
      }}
      onDeletePost={() => {
        props.onDeletePost(post.id)
      }}
      key={post.id}
      id={post.id}
      caption={post.caption}
    />
  ))

  return (
    <section className={classes.posts}>
      <ul>{postsList}</ul>
    </section>
  )
}

export default Posts
