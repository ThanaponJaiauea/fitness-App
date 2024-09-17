/** @format */
import {FaRibbon} from "react-icons/fa"
import useCompletedExercises from "../hooks/useCompletedExercises"

export default function FromHeaderDay({bg, title}) {
  const {completedExercises} = useCompletedExercises()

  return (
    <>
      <div
        className={`${bg} w-full h-[60px] flex items-center justify-center gap-2`}>
        <p className="font-bold text-xl">{title}</p>

        {completedExercises && (
          <i className="flex items-center justify-center text-red-600">
            <FaRibbon />
          </i>
        )}
      </div>
    </>
  )
}
