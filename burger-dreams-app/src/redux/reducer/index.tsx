import { combineReducers } from 'redux'
import BurgerReducer from './burgerReducer';
import CartReducer from './cartReducer';
import UserReducer from './userReducer';
//exporto un conjunto con todos los reducers de mi app
export default combineReducers({
    burgerReducer: BurgerReducer,
    cartReducer: CartReducer,
    UserReducer: UserReducer,
});