import { combineReducers } from 'redux'
import BurgerReducer from './burgerReducer';

//exporto un conjunto con todos los reducers de mi app
export default combineReducers({
    burgerReducer: BurgerReducer,
});