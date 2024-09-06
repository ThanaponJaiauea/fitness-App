/** @format */

import {useEffect, useState} from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"

export default function HeaderNavbar() {
  const days = [
    {fullName: "Monday", shortName: "Mon"},
    {fullName: "Tuesday", shortName: "Tue"},
    {fullName: "Wednesday", shortName: "Wed"},
    {fullName: "Thursday", shortName: "Thu"},
    {fullName: "Friday", shortName: "Fri"},
    {fullName: "Saturday", shortName: "Sat"},
    {fullName: "Sunday", shortName: "Sun"},
  ]

  const currentDay = days[new Date().getDay() - 1]
  console.log("currentDay:", currentDay)

  const [selectDay, setSelectDay] = useState(currentDay)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentPath = location?.pathname.slice(1)

    if (currentPath !== currentDay?.fullName) {
      navigate(`/${currentDay?.fullName}`, {replace: true})
    }
  }, [])

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-full md:block md:w-auto">
          <ul className="w-full font-medium flex p-4 md:p-0 mt-4 flex items-center justify-center">
            {days.map((el, idx) => (
              <li key={idx}>
                <Link
                  to={`/${el?.fullName}`}
                  onClick={() => setSelectDay(el?.fullName)}
                  className={`py-2 px-3 ${
                    selectDay.fullName === el?.fullName
                      ? "text-blue-500"
                      : el?.fullName
                      ? "text-white hover:text-blue-500"
                      : null
                  }`}>
                  {el?.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
