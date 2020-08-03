import React from 'react';

const Layout = ({ children }) => {
  return children.props.layout != 'full' ? (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10 d-block d-md-flex flex-column">{children}</div>
      <div className="col-1"></div>
    </div>
  ) : (
    <div className="row">
      <div className="flex-grow-1">{children}</div>
    </div>
  );
};

export default Layout;
