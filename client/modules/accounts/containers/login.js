import Login from '../components/login.jsx';

import {useDeps, compose, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Store} = context();

  const unsubscribe = Store.subscribe(() => {
    onData(null, {});
  });

  onData(null, {});

  const cleanup = () => {
    unsubscribe();
  }
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  login: actions.login.login,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Login);