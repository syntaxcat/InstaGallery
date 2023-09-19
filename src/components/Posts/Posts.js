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
      comments={post.comments}
    />
  ))

  return (
    <section className={classes.posts}>
      <ul className={classes.postsUl}>{postsList}</ul>
    </section>
  )
}

export default Posts
