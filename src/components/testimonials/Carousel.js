import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';

export default function Carousel({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: false,
    nextArrow: false
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>

      <Slider {...settings}>{slides}</Slider>
    </>
  );
}
