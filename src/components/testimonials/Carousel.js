import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';

export default function Carousel({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const testimonialsListItem = testimonials.map(testimonial => (
    <li className="d-flex flex-column align-items-center testimonial-item">
      <img className="profile" src={testimonial.profile} />
      <span className="name">
        {testimonial.firstName} {testimonial.lastName}
      </span>
      <span className="title">{testimonial.title}</span>
      <div className="testimonial-content">
        <span>{testimonial.testimonial}</span>
      </div>
      <span className="side-note">{testimonial.sideNote}</span>
    </li>
  ));

  return (
    <div>
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
      <ul>
        <Slider {...settings}>{testimonialsListItem}</Slider>
      </ul>
    </div>
  );
}
