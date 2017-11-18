import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';

export const appStore = createStore(
    appReducers,
    applyMiddleware(store => next => action =>{
        typeof action === "function" ?
        action(store.dispatch, store.getState):
        next(action)
    })
);

export default appStore;