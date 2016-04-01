import Register from '../components/register.jsx';
import {useDeps, compose, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Store} = context();

  const unsubscribe = Store.subscribe(() => {

    const error = Store.getState().register.USER_STATE;
    onData(null, {error})
  });

  const error = Store.getState().register.USER_STATE;
  onData(null, {error});

  const cleanup = () => {
    unsubscribe();
    clearErrors();
  }
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  createUser: actions.register.createUser,
  clearErrors: actions.register.clearErrors,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Register);