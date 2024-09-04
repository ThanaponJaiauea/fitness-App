/** @format */

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "../layouts/layout"
import MondayPage from "../pages/mondayPage"
import TuesdayPage from "../pages/tuesdayPage"
import Wednesday from "../pages/wednesday"
import ThursdayPage from "../pages/thursdayPage"
import FridayPage from "../pages/fridayPage"
import SaturdayPage from "../pages/saturdayPage"
import SundayPage from "../pages/sundayPage"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/Monday",
        element: <MondayPage />,
      },
      {
        path: "/Tuesday",
        element: <TuesdayPage />,
      },
      {
        path: "/Wednesday",
        element: <Wednesday />,
      },
      {
        path: "/Thursday",
        element: <ThursdayPage />,
      },
      {
        path: "/Friday",
        element: <FridayPage />,
      },
      {
        path: "/Saturday",
        element: <SaturdayPage />,
      },
      {
        path: "/Sunday",
        element: <SundayPage />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
