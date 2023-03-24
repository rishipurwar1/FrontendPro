import { twMerge } from "tailwind-merge"

import Icons from "../SvgIcons/Icons"

const classes = {
  base: "rounded-lg inline-flex justify-center items-center focus:outline-none transition",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-3 py-2 font-medium text-sm",
    medium: "px-5 py-2.5 text-sm",
    large: "px-5 py-3 text-base",
    square: "p-2",
  },
  variant: {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary:
      "text-gray-300 border border-gray-600 bg-gray-700 transition hover:text-white hover:bg-gray-800",
    dark: "bg-gray-900 hover:bg-gray-800 text-white",
    outline: "bg-transparent border border-gray-700 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-800 text-white",
  },
}

const Button = ({
  children,
  type = "button",
  className,
  variant = "primary",
  size = "medium",
  pill,
  loading = false,
  ...props
}) => (
  <button
    disabled={loading}
    type={type}
    className={twMerge([
      classes.base,
      classes.size[size],
      classes.variant[variant],
      pill && classes.pill,
      loading && classes.disabled,
      className,
    ])}
    {...props}
  >
    {loading && <Icons.Loader size={18} className="animate-spin text-white mr-2 -ml-1" />}
    {children}
  </button>
)

export default Button
