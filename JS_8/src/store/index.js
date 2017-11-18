import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import logger from "./middleware/logger.middlevear.js"

export const appStore = createStore(
    appReducers,
    applyMiddleware(
        logger
    )
);

export default appStore;