import React from 'react';
import {mount} from 'react-mounter';
import DealsList from './components/dealsList';
import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/dealsList', {
    name: 'dealsList',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<DealsList />)
      });
    }
  });
}
