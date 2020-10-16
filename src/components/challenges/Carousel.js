import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselContainer } from 'react-responsive-carousel';



const Carousel = ({images}) => {
    return (
        <CarouselContainer className="mx-2 mt-20 shadow-2xl" showStatus={false} infiniteLoop showThumbs={false}>
                <div>
                    <img className="" src={images} />
                </div>
            </CarouselContainer>
    )
}

export default Carousel
