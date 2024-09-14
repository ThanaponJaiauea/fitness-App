/** @format */

import {useContext} from "react"

import {CompletedExercisesContext} from "../contexts/completedExercisesContext"

export default function useCompletedExercises() {
  return useContext(CompletedExercisesContext)
}
