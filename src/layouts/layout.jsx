/** @format */

import HeaderNavbar from "./header"
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div className="h-auto w-full">
        <Outlet />
      </div>

      <div className="h-auto w-full fixed bottom-0">
        <HeaderNavbar />
      </div>
    </>
  )
}

export default Layout
