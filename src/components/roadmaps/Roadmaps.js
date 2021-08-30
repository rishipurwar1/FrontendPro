import React from 'react'
import Lottie from 'react-lottie';

import coming_soon from '../../assets/animated_illustrations/coming_soon.json'

const Roadmaps = () => {
    // Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coming_soon,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="m-auto">
            <p className="text-center text-white text-4xl">We're building!<span role="img" aria-label="building-emoji">👷‍♂️</span></p>
            <Lottie
                height={420}
                width={420}
                options={defaultOptions}
            />

        </div>
    )
}

export default Roadmaps
