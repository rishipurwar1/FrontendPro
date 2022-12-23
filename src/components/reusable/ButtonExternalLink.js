import { clsx } from "clsx"

const classes = {
  base: "inline-flex justify-center items-center rounded-lg focus:outline-none transition",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-5 py-2.5 text-sm",
    large: "py-3 px-5 text-base",
  },
  variant: {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-800 text-white",
    secondary:
      "bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-900 text-white",
    outline:
      "bg-transparent border-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-900 text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
}

const ButtonExternalLink = ({
  children,
  href = "",
  className,
  variant = "primary",
  size = "normal",
  pill,
  loading = false,
  ...props
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
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
  </a>
)

export default ButtonExternalLink
