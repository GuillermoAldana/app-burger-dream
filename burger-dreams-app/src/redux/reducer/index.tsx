import { combineReducers } from 'redux'
import BurgerReducer from './burgerReducer';
import CartReducer from './cartReducer';
import UserReducer from './userReducer';
//exporto un conjunto con todos los reducers de mi app
import storage from 'redux-persist/lib/storage';

export const config = {
    key: 'root',
    storage: storage ,
    whiteList: ['UserReducer'], 
   
   };
export const rootReducer = combineReducers({
    burgerReducer: BurgerReducer,
    cartReducer: CartReducer,
    UserReducer: UserReducer,
});
