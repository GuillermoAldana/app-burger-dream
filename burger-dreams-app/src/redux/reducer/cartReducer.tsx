import {typesCart} from '../../constants/typesEnum';

const initialState = {
    error: null,
    listCart: []
};

const CartReducer = (state = initialState, action: any) => {
    switch(action.type){
        case typesCart.ADD_CART:
            return{
                ...state,
                listCart: [...state.listCart, action.payload]
            }
        case typesCart.DELETE_CART:
                return{
                    ...state,
                    listCart: action.payload
                }    
        default:
            return state;
    }
}
export default CartReducer;