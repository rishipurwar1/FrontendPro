import { useEffect } from "react"

const useOnClickOutside = (ref, handler, isOpen = false) => {
  useEffect(() => {
    const listener = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        handler(event)
      }
    }
    document.addEventListener("click", listener)
    document.addEventListener("touchend", listener)
    return () => {
      document.removeEventListener("click", listener)
      document.removeEventListener("touchend", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
