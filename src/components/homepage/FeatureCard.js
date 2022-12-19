const FeatureCard = ({ feature }) => {
  const { name, info, image, gradient, color } = feature
  return (
    <div
      className={`${gradient} rounded-lg shadow-2xl text-center px-5 py-8 max-w-sm h-96`}
    >
      <i className={`${image} text-8xl ${color} pb-3`}></i>
      <p className="py-3 text-2xl text-white font-bold font-heading">{name}</p>
      <p className="text-gray-100 text-lg font-medium">{info}</p>
    </div>
  )
}

export default FeatureCard
