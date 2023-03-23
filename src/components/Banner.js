import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
          <div className='absolute w-full h-32 lg:h-72 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel 
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          >
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71F+5Fq3nhL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71g8JvhNj5L._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61O759bS39L._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71aJVWrz15L._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61v07Nz4M7L._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71vdTR50hFL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71fgIasK5IL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71YTqRQKAAL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71niVrCTPWL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71mQc+YP-TL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61+Om+g+8SL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51ovs76vmtL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81D-sLpLnaL._SX3000_.jpg" alt="" />
          </div>
          </Carousel>
    </div>
  )
}

export default Banner