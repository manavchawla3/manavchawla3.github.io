import React from 'react';

import Carousel from './Carousel';

const testimonials = [
  {
    profile: 'images/derek_profile.png',
    firstName: 'Derek',
    lastName: 'Tu',
    title: 'Growth at Italic ',
    testimonial:
      "Manav worked with us for a brief period of time but, during our engagement, he made himself readily available and quickly learned our stack and processes. He was really reliable - I remember that once our site had a P1 bug and Manav stayed up all night (due to time zone difference) to ensure that the issue was resolved as soon possible. I'm confident he'll bring this attitude to wherever he works.",
    sideNote: 'July 5, 2019, Derek was a client of Manav’s'
  },
  {
    profile: 'images/harsh_profile@2x.png',
    firstName: 'Harsh',
    lastName: 'Shukla',
    title: 'Product Management & Analytics',
    testimonial:
      'Manav is an amazing software professional, who brings the best of the programming skills to the fore. I had the pleasure of working with him in building amazing features on technology products as a manager in Dockabl. He is a quick learner and a logical thinker, who kept challenging himself along with other team members towards better solutions. His energy and ability to get the job done was infectious and ensured timely delivery. It was indeed great learning with you as we brainstormed our way into building high performing modules. He will be an asset to any institution that will hire his services and a force to reckon with.',
    sideNote: 'July 9, 2019, Manav Worked with harsh In the same group'
  }
];

export default function Testimonials() {
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
    <div id="#testimonial" className="testimonials section">
      <ul>
        <Carousel className="carousel" slides={testimonialsListItem}></Carousel>
      </ul>
    </div>
  );
}
