import React from 'react'
import Slider from 'react-slick'
import Carousel from '../../carousel/Carousel'
import { Meals } from './Meals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MICarousel() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <Slider {...settings}>
        {Meals.map((items, index)=><Carousel key={index} image={items.image} title={items.title}/>
            
        )}
    </Slider>
  )
}

export default MICarousel