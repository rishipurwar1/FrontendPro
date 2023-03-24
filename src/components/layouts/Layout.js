import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <div className="grid grid-cols-12 gap-3 px-3 my-3">
        <Sidebar />
        <div className="col-span-12 xl:col-span-10">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
