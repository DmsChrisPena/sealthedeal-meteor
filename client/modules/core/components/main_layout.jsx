import React from 'react';
import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <div>
    <div onT>
      {content()}
      <Navigation />
    </div>
  </div>
);

export default Layout;
