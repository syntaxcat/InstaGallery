import {Fragment} from "react"

import Header from "./components/Layout/Header"
import Posts from "./components/Posts/Posts"

function App() {
  const AddPostHandler = (event) => {}
  return (
    <Fragment>
      <Header />
      <main>
        <Posts />
      </main>
      <button onClick={AddPostHandler}>+ Add Post</button>
    </Fragment>
  )
}

export default App
