import Register from '../components/register.jsx';

import {useDeps, compose, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Store} = context();

  const unsubscribe = Store.subscribe(() => {
    const error = Store.getState().register.REGISTER_STATE;
    const role = Store.getState().role.ROLE_STATE;
    const step = Store.getState().step.STEP_STATE;
    const stepInfo = Store.getState().step.stepInfo;
    const locationInfo = Store.getState().step.locationInfo;
    const businessLocation = Store.getState().step.businessLocation
    onData(null, {error, role, step, stepInfo, locationInfo, businessLocation});
  });

  const error = Store.getState().register.REGISTER_STATE;
  const role = Store.getState().role.ROLE_STATE;
  const step = Store.getState().step.STEP_STATE;
  const stepInfo = Store.getState().step.stepInfo;
  const locationInfo = Store.getState().step.locationInfo;
  const businessLocation = Store.getState().step.businessLocation
  onData(null, {error, role, step, stepInfo, locationInfo, businessLocation});

  const cleanup = () => {
    unsubscribe();
    clearErrors();
  }
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  createUser: actions.register.createUser,
  clearErrors: actions.register.clearErrors,
  changeRole: actions.register.changeRole,
  changeStep: actions.register.changeStep,
  validateRegister: actions.register.validateRegister,
  getGeolocation: actions.register.getGeolocation,
  geocodeVendor: actions.register.geocodeVendor,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Register);