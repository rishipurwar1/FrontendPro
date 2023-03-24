import { useContext } from "react"
import { SidebarContext } from "../context/SidebarContext"

export const useSidebarContext = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
  return { sidebarOpen, setSidebarOpen }
}
