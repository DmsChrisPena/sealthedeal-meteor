import React from 'react';
import {mount} from 'react-mounter';
import Register from './containers/register';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/register', {
  	name: 'register',
  	action() {
  		mount(MainLayoutCtx, {
  			content: () => (<Register />)
  		});
  	}
  });
}
