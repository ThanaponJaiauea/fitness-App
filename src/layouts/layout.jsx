/** @format */

import Footer from "./footer"
import HeaderNavbar from "./header"
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <HeaderNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
