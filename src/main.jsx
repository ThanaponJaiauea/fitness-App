/** @format */

import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import CompletedExercisesContextProvider from "./contexts/completedExercisesContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompletedExercisesContextProvider>
      <App />
    </CompletedExercisesContextProvider>
  </StrictMode>
)
