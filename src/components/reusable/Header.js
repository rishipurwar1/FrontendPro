const Header = ({
  title,
  description,
  gradientClasses = "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
}) => {
  return (
    <header className="rounded-lg bg-gray-900 border border-gray-700 p-8 mb-3">
      <h1
        className={`block bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center pb-4 ${gradientClasses}`}
      >
        {title}
      </h1>
      <p className="text-white text-center mx-auto max-w-3xl sm:text-xl sm:leading-relaxed">
        {description}
      </p>
    </header>
  )
}

export default Header
