import {Routes, Route, Outlet} from "react-router-dom"
import ProfilePage from "./components/Pages/ProfilePage"
import classes from "./App.module.css"
// import OpenModalButton from "./components/UI/OpenModalButton"

function AppContainer() {
  return (
    <div>
      <nav className={classes.sideNav}>
        {/* <OpenModalButton onShowModal={showModalHandler} /> */}
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
