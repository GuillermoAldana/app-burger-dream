import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import rootReducer from './redux/reducer';
import {} from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from 'redux-persist';

const initialState = {};

const middleware = [thunk];

const config = {
 key: 'root',
 storage: storage ,
 whiteList: [], 

};

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