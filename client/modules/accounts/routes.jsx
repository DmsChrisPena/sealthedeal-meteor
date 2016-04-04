import React from 'react';
import {mount} from 'react-mounter';
import Register from './containers/register';
import Settings from './containers/settings';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const RegisterCtx = injectDeps(Register);
  FlowRouter.route('/register', {
  	name: 'register',
  	action() {
  		mount(RegisterCtx, {
  			content: () => (<Register />)
  		});
  	}
  });
}
