import { ECart } from '../../constants/emunCart';

const initialState = {
    error: null,
    listCart: []
};

const CartReducer = (state = initialState, action: any) => {
    switch(action.type){
        case ECart.ADD_CART:
            return{
                ...state,
                listCart: [...state.listCart, action.payload]
            }
        case ECart.DELETE_CART:
                return{
                    ...state,
                    listCart: action.payload
                }    
        default:
            return state;
    }
}
export default CartReducer;