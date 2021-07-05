import React from 'react';

import Root from '../components/layout/Root';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Testimonials from '../components/testimonials/Testimonials';
import ContactMe from '../components/contact-me/ContactMe';

const IndexPage = () => (
  <Root>
    <Home name="home"></Home>
    <About name="about"></About>
    <Skills name="skills"></Skills>
    <Experience name="experience"></Experience>
    <Testimonials name="testimonials" layout="full"></Testimonials>
    <ContactMe name="contact_me" layout="full"></ContactMe>
  </Root>
);

export default IndexPage;
