import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./App"

import {BrowserRouter} from "react-router-dom"
import {DUMMY_PROFILES} from "./dummy-profiles"

if (localStorage.getItem("Profiles") === null) {
  localStorage.setItem("Profiles", JSON.stringify(DUMMY_PROFILES))
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
