const FeatureCard = ({ feature }) => {
  const { name, info, icon, gradient } = feature
  return (
    <div
      className={`rounded-lg shadow-2xl flex flex-col justify-center items-center px-5 py-16 max-w-sm ${gradient}`}
    >
      {icon}
      <h2 className="py-3 text-3xl text-white text-center font-bold">{name}</h2>
      <p className="text-gray-100 text-center text-lg font-medium">{info}</p>
    </div>
  )
}

export default FeatureCard
