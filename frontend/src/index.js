import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {appStore, persistedStore} from './store/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={appStore}>
  <PersistGate loading={null} persistor={persistedStore}>
    <AppContainer />
  </PersistGate>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
