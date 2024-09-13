/** @format */

import {useEffect, useState} from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"

export default function HeaderNavbar() {
  const days = [
    {fullName: "Sunday", shortName: "Sun"},
    {fullName: "Monday", shortName: "Mon"},
    {fullName: "Tuesday", shortName: "Tue"},
    {fullName: "Wednesday", shortName: "Wed"},
    {fullName: "Thursday", shortName: "Thu"},
    {fullName: "Friday", shortName: "Fri"},
    {fullName: "Saturday", shortName: "Sat"},
  ]
  const currentDay = days[new Date().getDay()]

  const [selectDay, setSelectDay] = useState(currentDay?.fullName)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname.slice(1)

    if (currentPath !== currentDay?.fullName) {
      navigate(`/${currentDay?.fullName}`, {replace: true})
    }
  }, [])

  return (
    <nav className="dark:bg-gray-900 rounded-t-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 ">
        <div className="w-full md:block md:w-auto">
          <ul className="font-medium flex p-4 md:p-0">
            {days
              ?.filter((el) => el && el !== "Saturday" && el !== "Sunday")
              .map((el, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${el?.fullName}`}
                    onClick={() => setSelectDay(el?.fullName)}
                    className={`py-2 px-3 ${
                      selectDay === el?.fullName
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
