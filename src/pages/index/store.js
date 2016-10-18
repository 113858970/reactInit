import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

import Config from '../../../config';
import * as reducers from './reducers';
import languageReducer from '../../i18n/LanguageProvider/reducer';

const middleware = [thunk];

const enhancers = [];
if (Config.is.dev) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  language: languageReducer,
});

export function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
}

export default configureStore;
