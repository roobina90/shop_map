import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

	if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
	return store;
}