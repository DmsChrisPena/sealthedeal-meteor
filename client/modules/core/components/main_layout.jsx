import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <div className="container" onT>
      {content()}
    </div>
  </div>
);

export default Layout;
