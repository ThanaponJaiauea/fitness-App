/** @format */

import {useEffect, useState} from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"

export default function HeaderNavbar() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const currentDay = days[new Date().getDay() - 1]

  const [selectDay, setSelectDay] = useState(currentDay)
  // console.log("selectDay:", selectDay)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname.slice(1)

    if (currentPath !== currentDay) {
      navigate(`/${currentDay}`, {replace: true})
    }
  }, [])

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {days?.map((el, idx) => (
              <li key={idx}>
                <Link
                  to={`/${el}`}
                  onClick={() => setSelectDay(el)}
                  className={`py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  ${
                    selectDay === el
                      ? "dark:text-blue-500"
                      : el
                      ? "dark:text-white hover:dark:text-blue-500"
                      : null
                  } ${selectDay === el ? "bg-red-200" : ""}`}>
                  {el}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
