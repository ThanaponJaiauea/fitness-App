/** @format */

import {useEffect, useState} from "react"
import {FaCheck} from "react-icons/fa"

export default function FromTable({data, dayKey}) {
  const numberOfSets = 8

  const [openSeeMore, setOpenSeeMore] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState(null)

  // Load saved data from localStorage for Monday
  const initialInputs = () => {
    const savedData = localStorage.getItem(`${dayKey}`)

    return savedData
      ? JSON.parse(savedData)
      : data.reduce((acc, exercise) => {
          acc[exercise.id] = Array(numberOfSets).fill("")
          return acc
        }, {})
  }

  const [inputs, setInputs] = useState(initialInputs)

  useEffect(() => {
    localStorage.setItem(`${dayKey}`, JSON.stringify(inputs))
  }, [inputs, dayKey])

  const handleChange = (exerciseId, setIndex, value) => {
    // const validValue = Math.min(Math.max(Number(value), 0), 15).toString()

    const validValue =
      value === "" ? "" : Math.min(Math.max(Number(value), 0), 15).toString()

    setInputs((prevInputs) => ({
      ...prevInputs,
      [exerciseId]: prevInputs[exerciseId].map((input, index) =>
        index === setIndex ? validValue : input
      ),
    }))
  }

  const allSetsFilled = (id) => {
    return inputs[id].every((value) => value === "15")
  }

  return (
    <div className="w-[95%] overflow-x-auto">
      <table className="w-full m-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3">
              SET
            </th>
            {[...Array(numberOfSets)].map((_, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-center">{`${index + 1}`}</th>
            ))}

            <th className="px-6 py-3 text-center text-green-600 font-bold">
              success
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((el) => (
            <tr
              key={el.id}
              className="w-full odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="flex flex-col items-start gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}

                <button
                  onClick={() => {
                    setSelectedExercise(el)
                    setOpenSeeMore(true)
                  }}
                  className="text-red-500 underline">
                  how to play ?
                </button>
              </th>

              {[...Array(numberOfSets)].map((_, index) => (
                <td
                  key={index}
                  className="px-6 py-4">
                  <input
                    min="0"
                    max="15"
                    className="w-[50px] text-center block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={inputs[el.id][index]}
                    onChange={(e) => handleChange(el.id, index, e.target.value)}
                  />
                </td>
              ))}

              <td className="px-6 py-4 text-center">
                {allSetsFilled(el.id) ? (
                  <i className="flex items-center justify-center text-green-600 text-lg">
                    <FaCheck />
                  </i>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openSeeMore && selectedExercise && (
        <div className="overflow-y-auto h-full fixed top-0 right-0 left-0 flex justify-center items-center w-full md:inset-0 max-h-full bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="w-full text-center relative">
                  <h3 className="text-xl font-semibold text-white">
                    {selectedExercise.title}
                  </h3>
                </div>

                <button
                  onClick={() => setOpenSeeMore(false)}
                  type="button"
                  className="absolute right-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              <div className="text-center p-5">
                <video
                  className="rounded-xl"
                  playsInline
                  muted
                  loop
                  controls={true}
                  preload="auto">
                  <source
                    src={selectedExercise?.videos}
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="w-[90%] m-auto border-b-[1px]"></div>

              <div className="text-center text-white text-xl pt-4">
                <p>Step : {selectedExercise?.images?.length}</p>
              </div>

              <div className="p-5 grid grid-cols-2 gap-4">
                {selectedExercise?.images?.map((el, idx) => (
                  <div key={idx}>
                    <img
                      src={el}
                      className="h-auto max-w-full rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
