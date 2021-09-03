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
        <div className="mt-5 row-start-2 row-end-3 col-start-2 col-end-3 self-center	">
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
