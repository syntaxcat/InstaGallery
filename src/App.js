import {Fragment, useState} from "react"

import Header from "./components/Layout/Header"
import Posts from "./components/Posts/Posts"
import PostForm from "./components/Posts/PostForm"

const DUMMY_POSTS = [
  {
    id: "p1",
    caption: "Chilling & killing"
  },
  {
    id: "p2",
    caption: "Best day of my life"
  },
  {
    id: "p3",
    caption: "love my mama <3"
  },
  {
    id: "p4",
    caption: "another day another..."
  }
]

function App() {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  const addPostHandler = (caption) => {
    const newPost = {
      id: DUMMY_POSTS.length + 1,
      caption
    }
    setPosts((currentPosts) => {
      return [newPost, ...currentPosts]
    })
  }

  const deletePostHandler = (id) => {
    console.log("FROM APP", id)
    const newPosts = posts.filter((post) => post.id !== id)
    setPosts(newPosts)
  }

  return (
    <Fragment>
      <Header />
      <PostForm onAddPost={addPostHandler} />
      <main>
        <Posts onDeletePost={deletePostHandler} posts={posts} />
      </main>
    </Fragment>
  )
}

export default App
