import {Fragment, useState} from "react"
import {useParams} from "react-router-dom"
import classes from "./ProfilePage.module.css"
import Header from "../Layout/Header"
import OpenModalButton from "../UI/OpenModalButton"
import Modal from "../UI/Modal"
import PostForm from "../Posts/PostForm"
import Posts from "../Posts/Posts"

// localStorage.getItem("Profiles", JSON.stringify(DUMMY_PROFILES))

const DB = JSON.parse(localStorage.getItem("Profiles"))

const ProfilePage = () => {
  const [modalIsShown, setModalIsShown] = useState(false)

  let {userId} = useParams()

  const foundProfile = DB.find((profile) => {
    return profile.userName === userId
  })

  const [posts, setPosts] = useState(foundProfile.posts)

  const addPostHandler = (caption) => {
    const newPost = {
      id: `p${posts.length + 1}`,
      caption
    }
    setPosts((currentPosts) => {
      return [newPost, ...currentPosts]
    })
    setModalIsShown(false)

    const profiles = DB
    const profile = profiles.filter(
      (profile) => profile.id === foundProfile.id
    )[0]
    profile.posts = [newPost, ...profile.posts]
    localStorage.setItem("Profiles", JSON.stringify(profiles))
  }

  const deletePostHandler = (id) => {
    const newPosts = posts.filter((post) => post.id !== id)
    setPosts(newPosts)
    const profiles = DB
    const profile = profiles.filter(
      (profile) => profile.id === foundProfile.id
    )[0]
    profile.posts = newPosts
    localStorage.setItem("Profiles", JSON.stringify(profiles))
  }

  const showModalHandler = () => {
    setModalIsShown(true)
  }

  const hideModalHandler = () => {
    setModalIsShown(false)
  }

  const updatedPostHandler = (caption, postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        return {...post, caption}
      } else {
        return post
      }
    })
    setPosts(newPosts)
    const profiles = DB
    const profile = profiles.filter(
      (profile) => profile.id === foundProfile.id
    )[0]
    profile.posts = newPosts
    localStorage.setItem("Profiles", JSON.stringify(profiles))
  }
  return (
    <div className={classes.profilePageSize}>
      <Header postsCount={posts.length} foundProfile={foundProfile} />
      <OpenModalButton onShowModal={showModalHandler} />
      {modalIsShown && (
        <Modal onHideModal={hideModalHandler}>
          <PostForm onAddPost={addPostHandler} />
        </Modal>
      )}

      <Posts
        onUpdatedPost={updatedPostHandler}
        onDeletePost={deletePostHandler}
        posts={posts}
      />
    </div>
  )
}

export default ProfilePage
