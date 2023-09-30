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
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/Deals-PC-3000-Unrec._CB577064215_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/PFF-Unrec-3000._CB577063325_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Jupiter23/KSD/GW/Solar-pc-3000x1200._CB577106624_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_Cricket_toys_2x._CB577185967_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/ksd/oldbank/DesktopHero_3000x1200._CB577020869_.jpg" alt="" />
          </div>
          <div>
            <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/Jupiter23/OPPO/Uber/V1/D98467701_PC_Hero_3000x1200._CB577020453_.jpg" alt="" />
          </div>
          </Carousel>
    </div>
  )
}

export default Banner
