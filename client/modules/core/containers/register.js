import Register from '../components/register.jsx';
import {useDeps, compose, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Store} = context();

  const unsubscribe = Store.subscribe(() => {

    const error = Store.getState().user.USER_STATE;
    const otherError = "Windham";
    onData(null, {error, otherError})
  });

  const error = Store.getState().user.USER_STATE;
  const otherError = null;
  onData(null, {error, otherError});

  const cleanup = () => {
    unsubscribe();
    clearErrors();
  }
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  createUser: actions.user.createUser,
  clearErrors: actions.user.clearErrors,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Register);