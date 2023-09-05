import {Routes, Route} from "react-router-dom"
import ProfilePage from "./components/Pages/ProfilePage"

function App() {
  return (
    <Routes>
      <Route path="/:userId" element={<ProfilePage />} />
    </Routes>
  )
}

export default App
