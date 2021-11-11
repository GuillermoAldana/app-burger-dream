import {GET_ITEMS_BURGER} from '../../constants/const';

const initialState = {
    error: null,
    listBurger:[]
};

const BurgerReducer = (state = initialState, action: any) => {
    switch(action.type){
        case GET_ITEMS_BURGER:
            return{
                ...state,
                listBurger: action.payload
            }
        default:
            return state;
    }
}
export default BurgerReducer;