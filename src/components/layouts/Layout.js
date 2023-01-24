import React from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const Layout = () => {
  return (
    <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6 xxl:max-w-screen-xxl mx-auto">
      <Navbar />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
