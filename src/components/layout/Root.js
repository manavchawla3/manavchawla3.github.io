import React from 'react';

import SEO from 'components/common/seo';
import Layout from './layout';
import Header from './Header';
import Footer from './Footer';

import 'assets/sass/custom.bootstrap.scss';
import 'assets/sass/app.scss';

const Root = ({ children }) => {
  const childrenToLayoutMapRender = children.map((child, index) => (
    <Layout key={child.props.name || index}>{child}</Layout>
  ));

  return (
    <div className="wrapper container-fluid pt-0 d-block d-md-flex flex-column">
      <SEO />
      <Header />
      <>{childrenToLayoutMapRender}</>
      <Footer />
    </div>
  );
};

export default Root;
