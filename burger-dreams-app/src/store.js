import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import {rootReducer} from './redux/reducer';
import {} from 'redux-persist'; 
import {config} from './redux/reducer/index';
import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from 'redux-persist';

const initialState = {};

const middleware = [thunk];

const persisted = persistReducer(config, rootReducer);


const store = createStore(
    persisted,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);
export {
    persistor,
    store
}