import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselContainer } from 'react-responsive-carousel';
import {Image, Placeholder} from 'cloudinary-react';


const Carousel = ({images}) => {
    return (
        <CarouselContainer className="mx-2 mt-20 shadow-2xl" showStatus={false} infiniteLoop showThumbs={false}>
        {images.map(image => (
            <div key="image">
                <Image className="w-full" cloudName="di5hmgowi" public-id={image} loading="lazy">
                        <Placeholder type="pixelate" />
                </Image>
            </div>
        ))}
        </CarouselContainer>
    )
}

export default Carousel
