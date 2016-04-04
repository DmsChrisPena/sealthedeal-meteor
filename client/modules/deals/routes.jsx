import React from 'react';
import {mount} from 'react-mounter';
import DealsList from './containers/dealsList';
import AddDeals from './containers/add_deals';
import EditDeal from './containers/edit_deal';
import Settings from './../accounts/containers/settings';
import Deal from './containers/deal';
import Redeem from './containers/redeem';
import DealHistory from './containers/deal_history';
import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/dealsList', {
    name: 'deals',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<DealsList />)
      });
    }
  });
  FlowRouter.route('/deal/:dealId', {
    name: 'deal',
    action({dealId}) {
      mount(MainLayoutCtx, {
        content: () => (<Deal dealId={dealId}/>)
      });
    }
  });

  FlowRouter.route('/editDeal/:dealId', {
    name: 'deal',
    action({dealId}) {
      mount(MainLayoutCtx, {
        content: () => (<EditDeal dealId={dealId}/>)
      });
    }
  });

  FlowRouter.route('/addDeals', {
    name: 'addDeals',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddDeals />)
      });
    }
  });

  FlowRouter.route('/settings', {
    name: 'settings',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Settings />)
      });
    }
  });

  FlowRouter.route('/redeem/:dealId', {
    name: 'redeem',
    action({dealId}) {
      mount(MainLayoutCtx, {
        content: () => (<Redeem dealId={dealId} />)
      });
    }
  });
  FlowRouter.route('/dealHistory', {
    name: 'dealHistory',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<DealHistory />)
      });
    }
  });
}
