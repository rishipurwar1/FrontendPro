import Icons from "../SvgIcons/Icons"

import FeatureCard from "./FeatureCard"

const features = [
  {
    name: "Sign up for free in 20 seconds",
    info: "Connect your GitHub account using Sign Up button. You'll instantly gain access to our all the challenges.",
    gradient: "bg-gradient-to-br from-sky-400 to-indigo-500",
    icon: <Icons.ShieldLock size="96" className="text-sky-200" />,
  },
  {
    name: "Find the right challenge",
    info: "Choose the right challenge for you and start turning the design into a live website.",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
    icon: <Icons.Code size="96" className="text-yellow-200" />,
  },
  {
    name: "Share your solution",
    info: "After completing the challenge, you can share your work with the world and get feedback from the community members.",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    icon: <Icons.Share size="96" className="text-purple-200" />,
  },
]

const HowItWorks = () => {
  return (
    <div className="mt-32">
      <h2 className="pb-2 text-5xl text-center text-white font-extrabold">
        How it works?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        {features.map((feature) => (
          <FeatureCard key={feature.name} feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
