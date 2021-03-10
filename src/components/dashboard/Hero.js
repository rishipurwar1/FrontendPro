import React from 'react'
import { useHistory } from 'react-router-dom'
import Lottie from 'react-lottie';

// custom components
import { useAuth } from '../../context/AuthContext'
import Button from '../smallComponents/Button'
import SignedOutLinks from '../layouts/SignedOutLinks';

const Hero = ({ homepage, title, subTitle, mainImg, btnTitle, logoTitle, route }) => {
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
            <header className="mt-4 flex items-center justify-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl px-8 h-72 shadow-2xl">
                <div className="w-2/6">
                    <h1 className="text-white text-2xl font-semibold font-heading pb-3">{title}</h1>
                    {currentUser ? <Button name={btnTitle} logo={logoTitle} bgColor="bg-gray-900" handleClick={() => history.push(route)} /> : <SignedOutLinks bgColor="bg-gray-900" />}
                </div>
                <div>
                    {homepage ?
                        <Lottie options={defaultOptions}
                            height={320}
                            width={400}
                        /> : <img className="h-64" src={mainImg} alt="Hero" />}
                </div>
            </header>
        </div>
    )
}

export default Hero
