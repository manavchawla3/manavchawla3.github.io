import React from 'react';

import SideNav from './SideNav';

const Layout = ({ children }) => (
  <div className="row min-vh-100">
    <div className="col-1"></div>
    <div className="col-10 d-block d-md-flex flex-column">{children}</div>
    <div className="col-1 d-flex justify-content-center">
      <SideNav />
    </div>
  </div>
);

export default Layout;
