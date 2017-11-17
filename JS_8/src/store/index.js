import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';

const appStore = createStore(appReducers);

export default appStore;