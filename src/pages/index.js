import React from 'react';

import Root from '../components/layout/Root';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Testimonials from '../components/testimonials/Testimonials';

const IndexPage = () => (
  <Root>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Testimonials></Testimonials>
  </Root>
);

export default IndexPage;
