import { clsx } from "clsx"
import { Link } from "react-router-dom"

const classes = {
  base: "inline-flex justify-center items-center rounded-lg focus:outline-none transition",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-4 py-2 text-base",
    normal: "px-5 py-2.5 text-base",
    large: "py-3 px-5 text-base",
  },
  variant: {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-800 text-white",
    secondary:
      "bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-900 text-white",
    outline: "bg-transparent border border-gray-700 hover:bg-gray-800 text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
}

const ButtonLink = ({
  children,
  to = "",
  className,
  variant = "primary",
  size = "normal",
  pill,
  loading = false,
  ...props
}) => (
  <Link
    to={to}
    className={clsx([
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
