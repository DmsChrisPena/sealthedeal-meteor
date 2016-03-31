import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Register from './containers/register';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/register', {
  	name: 'register',
  	action() {
  		mount(MainLayoutCtx, {
  			content: () => (<Register />)
  		});
  	}
  });
}
