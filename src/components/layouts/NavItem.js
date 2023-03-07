import Link from "next/link"

const NavItem = ({ item, icon, setIsOpen, router }) => {
  const href = `/${item}`
  const isActive = router.asPath === href

  return (
    <Link
      className={`flex items-center p-3 mb-3 rounded-lg transition-all duration-200 hover:bg-indigo-600 focus:ring-indigo-800 text-base xs:text-left md:text-center xl:text-left relative group ${
        isActive && "bg-indigo-600"
      }`}
      href={href}
      aria-label={item}
      title={`This is a link to ${item}`}
      onClick={() => setIsOpen(false)}
    >
      {icon}
      <span className="xs:inline-block md:hidden xl:inline-block">
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </span>
    </Link>
  )
}

export default NavItem
