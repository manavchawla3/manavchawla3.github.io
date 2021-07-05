import React from 'react';

const Layout = ({ children }) => {
  return children.props.layout !== 'full' ? (
    <div className="container">
      {children}
    </div>
  ) : (
    <div className="row">
      <div className="flex-grow-1">{children}</div>
    </div>
  );
};

export default Layout;
