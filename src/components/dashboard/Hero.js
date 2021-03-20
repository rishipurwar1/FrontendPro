import React from 'react'
import { useHistory } from 'react-router-dom'
import Lottie from 'react-lottie';

// custom components
import { useAuth } from '../../context/AuthContext'
import Button from '../smallComponents/Button'
import SignedOutLinks from '../layouts/SignedOutLinks';

const Hero = ({ homepage, title, subTitle, mainImg, btnTitle, logoTitle, route, lottie }) => {
    const { currentUser } = useAuth();
    const displayName = currentUser ? currentUser.displayName.split(' ')[0] : 'Coder';
    const history = useHistory();

    // Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mainImg,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="mt-2 mb-8">
            <p className={`font-heading ${homepage ? "text-lg font-normal" : "text-3xl font-bold"} text-white`}>{`Hello ${displayName} 👋,`}</p>
            <p className={`font-heading ${homepage ? "text-3xl font-bold" : "text-lg font-normal"} text-white`}>{subTitle}</p>
            <header className="mt-4 flex items-center justify-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl sm:px-5 md:px-8 py-4 xs:max-h-screen sm:max-h-96 shadow-2xl xs:flex-wrap-reverse sm:flex-nowrap">
                <div className="">
                    <h1 className="text-white sm:text-xl md:text-2xl lg:text-4xl font-semibold font-heading pb-4 md:max-w-xs max-w-sm">{title}</h1>
                    {currentUser ? <Button name={btnTitle} logo={logoTitle} bgColor="bg-gray-900" handleClick={() => history.push(route)} /> : <SignedOutLinks bgColor="bg-gray-900" />}
                </div>
                <div className="sm:h-60 sm:w-auto md:w-96 lg:h-80">
                    {lottie ?
                        <Lottie options={defaultOptions}
                        /> : <img className="h-80" src={mainImg} alt="Hero" />}
                </div>
            </header>
        </div>
    )
}

export default Hero
