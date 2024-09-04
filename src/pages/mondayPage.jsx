/** @format */

import {useState} from "react"
import {FaCheck} from "react-icons/fa"

export default function MondayPage() {
  const listData = [
    {id: 1, title: "Barbell Bench Press"},
    {id: 2, title: "Incline Dumbbell Press"},
    {id: 3, title: "Dip"},
    {id: 4, title: "Cable Crossover"},
    {id: 5, title: "Lying Leg Raise"},
    {id: 6, title: "Crunch"},
  ]

  const numberOfSets = 7

  const [inputs, setInputs] = useState(
    listData.reduce((acc, exercise) => {
      acc[exercise.id] = Array(numberOfSets).fill("")
      return acc
    }, {})
  )

  console.log("inputs:", inputs)

  const handleChange = (exerciseId, setIndex, value) => {
    const validValue = Math.min(Math.max(Number(value), 0), 15).toString()

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
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วันที่ จันทร์ : อกและท้อง (Chest & Abdominals)
        </p>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-[90%] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3">
                List
              </th>
              {[...Array(numberOfSets)].map((_, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-center">{`SET ${index + 1}`}</th>
              ))}

              <th className="px-6 py-3 text-center">success</th>
            </tr>
          </thead>

          <tbody>
            {listData.map((el) => (
              <tr
                key={el.id}
                className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {el.title}
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
                      onChange={(e) =>
                        handleChange(el.id, index, e.target.value)
                      }
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
      </div>
    </div>
  )
}
