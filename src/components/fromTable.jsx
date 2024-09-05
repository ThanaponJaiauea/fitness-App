/** @format */

import {useEffect, useState} from "react"
import {FaCheck} from "react-icons/fa"

export default function FromTable({data, dayKey}) {
  const numberOfSets = 8

  const [openSeeMore, setOpenSeeMore] = useState(false)
  console.log("openSeeMore:", openSeeMore)

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
    <div className="relative overflow-x-auto">
      <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
              className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="flex flex-col items-start gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}

                <button
                  onClick={() => setOpenSeeMore(!openSeeMore)}
                  className="hover:text-red-400">
                  ดูเพิ่มเติม
                </button>
              </th>

              {[...Array(numberOfSets)].map((_, index) => (
                <td
                  key={index}
                  className="px-6 py-4">
                  <input
                    min="0"
                    max="15"
                    className="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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

      {openSeeMore && (
        <div className=" overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  name id
                </h3>

                <button
                  onClick={() => setOpenSeeMore(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal">
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  I accept
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
