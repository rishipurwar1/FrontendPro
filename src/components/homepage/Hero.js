import Lottie from "react-lottie"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import SignedOutLinks from "../layouts/SignedOutLinks"
import Button from "../reusable/Button"

const Hero = ({ homepage, title, subTitle, mainImg, btnTitle, icon, route }) => {
  const { user } = useAuthContext()
  const displayName = user
    ? !user?.displayName
      ? user?.reloadUserInfo.screenName
      : user?.displayName.split(" ")[0]
    : "Coder"
  const navigate = useNavigate()

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className="mt-6 md:mt-2 mb-8">
      <p
        className={`${
          homepage ? "text-lg font-normal" : "text-3xl font-bold"
        } text-white`}
      >
        {`Hello ${displayName} `}
        <span
          className="animate-wave inline-block origin-[70%_70%]"
          role="img"
          aria-label="Hello"
        >
          👋
        </span>
        ,
      </p>
      <p
        className={`${
          homepage ? "text-3xl font-bold" : "text-lg font-normal"
        } text-white`}
      >
        {subTitle}
      </p>
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-indigo-600 rounded-lg xs:px-5 md:px-8 py-4 xs:max-h-screen sm:max-h-96 shadow-md xs:flex-wrap-reverse sm:flex-nowrap">
        <div>
          <h1 className="text-white xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 sm:max-w-xs max-w-sm">
            {title}
          </h1>
          {user ? (
            <Button
              size="large"
              variant="dark"
              className="font-medium"
              onClick={() => navigate(route)}
            >
              {btnTitle}
              {icon}
            </Button>
          ) : (
            <SignedOutLinks />
          )}
        </div>
        <div className="xs:h-56 xs:w-72 sm:h-60 sm:w-96 w-96 md:h-72 lg:h-80">
          <Lottie options={defaultOptions} />
        </div>
      </header>
    </div>
  )
}

export default Hero
