import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./SideBar"

const Layout = ({ children }) => {
  return (
    <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6 xxl:max-w-screen-xxl mx-auto">
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
