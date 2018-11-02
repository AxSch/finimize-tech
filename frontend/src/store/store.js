import { createLogger } from 'redux-logger';
import appReducer from '../mainRedux/mainReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware));

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, appReducer);


const appStore = createStore(
  persistedReducer,
  enhancer
);

const persistedStore = persistStore(appStore);

export {
  appStore,
  persistedStore,
};
