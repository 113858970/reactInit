/**
 * entry of index
 */
import 'utils/adapter';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import LanguageProvider from '../../i18n/LanguageProvider';
import { translationMessages } from '../../i18n/i18n';

import { configureStore } from './store';
import Config from '../../../config';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const rootElement = document.getElementById('root');// eslint-disable-line no-undef

function renderAPP() {
  const routes = require('./routes').default();// eslint-disable-line
  render(
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <Router routes={routes} history={history} />
      </LanguageProvider>
    </Provider>,
    rootElement
  );
}
renderAPP();

if (Config.is.dev) {
  module.hot.accept('./routes.jsx', () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(rootElement);
      renderAPP();
    });
  });
}
