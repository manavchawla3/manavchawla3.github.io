import React from 'react';

import Root from '../components/layout/Root';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';

const IndexPage = () => (
  <Root>
    <Home></Home>
    <About></About>
    <Skills></Skills>
  </Root>
);

export default IndexPage;
