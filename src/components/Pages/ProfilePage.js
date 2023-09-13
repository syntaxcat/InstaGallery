import {useState} from "react"
import {useParams} from "react-router-dom"
import classes from "./ProfilePage.module.css"
import Header from "../Layout/Header"
import Posts from "../Posts/Posts"

// localStorage.getItem("Profiles", JSON.stringify(DUMMY_PROFILES))

const ProfilePage = () => {
  let {userId} = useParams()

  const foundProfile = JSON.parse(localStorage.getItem("Profiles")).find(
    (profile) => {
      return profile.userName === userId
    }
  )

  const [posts, setPosts] = useState(foundProfile.posts)

  const deletePostHandler = (id) => {
    const newPosts = posts.filter((post) => post.id !== id)
    setPosts(newPosts)
    const profiles = JSON.parse(localStorage.getItem("Profiles"))
    const profile = profiles.filter(
      (profile) => profile.id === foundProfile.id
    )[0]
    profile.posts = newPosts
    localStorage.setItem("Profiles", JSON.stringify(profiles))
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
    const profiles = JSON.parse(localStorage.getItem("Profiles"))
    const profile = profiles.filter(
      (profile) => profile.id === foundProfile.id
    )[0]
    profile.posts = newPosts
    localStorage.setItem("Profiles", JSON.stringify(profiles))
  }
  return (
    <div className={classes.profilePageSize}>
      <Header postsCount={posts.length} foundProfile={foundProfile} />
      <Posts
        onUpdatedPost={updatedPostHandler}
        onDeletePost={deletePostHandler}
        posts={posts}
      />
    </div>
  )
}

export default ProfilePage
