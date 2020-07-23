import React from "react";

import SEO from "components/common/seo";
import Layout from "./layout";
import Header from "./Header";
import Footer from "./Footer";

import "assets/sass/custom.bootstrap.scss";
import "assets/sass/app.scss";

const Root = ({ children }) => (
  <div className="wrapper h-100 d-block d-md-flex flex-column">
    <SEO />
    <Header />
    <Layout>{children}</Layout>
    <Footer />
  </div>
);

export default Root;
