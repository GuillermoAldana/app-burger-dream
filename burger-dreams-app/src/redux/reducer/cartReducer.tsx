import { ECart } from '../../constants/emunCart';

const initialState = {
    error: "",
    listCart: [],
    previewCart: "",
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
        case ECart.PREVIEW_CART:
            return{
                    ...state,
                    previewCart: action.payload
                }
        case ECart.DELETE_ALL_CART:
            return{
                    ...state,
                    listCart: [],
                    previewCart: ""
                     
                }                          
        default:
            return state;
    }
}
export default CartReducer;