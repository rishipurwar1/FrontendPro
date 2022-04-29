import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { AuthContextProvider } from "./context/AuthContext"
import App from "./App"

import "./assets/main.css"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
