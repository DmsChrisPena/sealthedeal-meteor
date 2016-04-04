import actions from './actions';
import routes from './routes.jsx';
import reducers from './configs/reducers';
import methodStubs from './configs/method_stubs';

export default {
  routes,
  actions,
  reducers,
  load(context) {
    methodStubs(context);
  }
};
