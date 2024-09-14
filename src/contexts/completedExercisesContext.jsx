/** @format */

import {createContext, useState} from "react"

export const CompletedExercisesContext = createContext()

export default function CompletedExercisesContextProvider({children}) {
  const [completedExercises, setCompletedExercises] = useState(false)

  return (
    <CompletedExercisesContext.Provider
      value={{setCompletedExercises, completedExercises}}>
      {children}
    </CompletedExercisesContext.Provider>
  )
}
