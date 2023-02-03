import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const classes = {
  base: "inline-flex justify-center items-center rounded-lg focus:outline-none transition",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-3 py-2 font-medium text-sm",
    medium: "px-5 py-2.5 text-sm",
    large: "py-3 px-5 text-base",
    square: "p-2",
  },
  variant: {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white",
    outline: "bg-transparent border border-gray-700 hover:bg-gray-800 text-white",
    danger: "bg-red-500 hover:bg-red-800 text-white",
  },
}

const ButtonLink = ({
  children,
  to = "",
  className,
  variant = "outline",
  size = "normal",
  pill,
  loading = false,
  ...props
}) => (
  <Link
    to={to}
    className={twMerge([
      classes.base,
      classes.size[size],
      classes.variant[variant],
      pill && classes.pill,
      loading && classes.loading,
      className,
    ])}
    {...props}
  >
    {children}
  </Link>
)

export default ButtonLink
