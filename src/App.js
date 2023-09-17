import {useState} from "react"
import {Routes, Route, Outlet} from "react-router-dom"
import ProfilePage from "./components/Pages/ProfilePage"
import classes from "./App.module.css"
import Logo from "./components/svg/Logo"
import OpenModalButton from "./components/UI/OpenModalButton"
import Modal from "./components/UI/Modal"
import PostForm from "./components/Posts/PostForm"

function AppContainer() {
  const [modalIsShown, setModalIsShown] = useState(false)

  const showModalHandler = () => {
    setModalIsShown(true)
  }

  const hideModalHandler = () => {
    setModalIsShown(false)
  }

  // (profile) => profile.id === foundProfile.id --remove the u1

  const addPostHandler = (caption) => {
    const profiles = JSON.parse(localStorage.getItem("Profiles"))
    const profile = profiles.filter((profile) => profile.id === "u1")[0]

    const newPost = {
      id: `p${profile.posts.length + 1}`,
      caption
    }
    setModalIsShown(false)
    profile.posts = [newPost, ...profile.posts]
    localStorage.setItem("Profiles", JSON.stringify(profiles))
  }
  return (
    <div>
      <nav className={classes.sideNav}>
        <Logo />
        <OpenModalButton onShowModal={showModalHandler} />
        {modalIsShown && (
          <Modal title="Create new post" onHideModal={hideModalHandler}>
            <PostForm onAddPost={addPostHandler} />
          </Modal>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route path=":userId" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
