import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';
import {createStore} from 'redux';
import {Accounts} from 'meteor/accounts-base';


export default function ({reducer}) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Accounts,
    Store: createStore(reducer)
  };
}