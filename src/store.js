import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import Thunk from 'redux-thunk';
import Reducer from './Reducers';

const ReduxLogger = createLogger();

export const Store = createStore(
    Reducer,
    applyMiddleware(
        Thunk,
        ReduxLogger
    )
);