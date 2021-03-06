import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import initContext from './configs/context';
import {Meteor} from 'meteor/meteor';

// Need to sort this out. Switch buttons wont work without it
import injectTapEventPlugin from "react-tap-event-plugin";
Meteor.startup(()=>{
	injectTapEventPlugin();
});

// modules
import coreModule from './modules/core';
import accountsModule from './modules/accounts';
import dealsModule from './modules/deals';

const coreReducers = coreModule.reducers;
const accountsReducers = accountsModule.reducers;
const dealsReducers = dealsModule.reducers;

const reducer = combineReducers({
  ...coreReducers,
  ...accountsReducers,
  ...dealsReducers
});

// init context
const context = initContext({reducer});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(accountsModule);
app.loadModule(dealsModule);
app.init();