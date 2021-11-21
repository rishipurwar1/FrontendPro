import React from "react"
import ReactDOM from "react-dom"
import "./assets/main.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
