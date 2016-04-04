import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout.jsx';
import Login from './../accounts/containers/login';

export default function (injectDeps, {FlowRouter}) {
  const LoginCtx = injectDeps(Login);
  
  FlowRouter.route('/', {
    name: 'login',
    action() {
      mount(LoginCtx, {
        content: () => (<Login />)
      });
    }
  });
}

// Added to allow mobile testing
// As well as optimiation for mobile viewing 
let mobileViewPort = { name: 'viewport', content: 'width=device-width, initial-scale=1.0' };
DocHead.addMeta(mobileViewPort);

