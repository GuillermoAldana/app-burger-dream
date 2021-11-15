
import { ICart } from "../../interfaces/cartInterface";
import { ECart } from '../../constants/emunCart';

export const addCartItem = (listCart: ICart) => (dispatch: any) => {
    try {
        dispatch({ 
            type: ECart.ADD_CART, 
            payload: listCart 
        });

    } catch (error) {
        console.log(error);
    } 

}
export const deleteCartItem = (listCart: ICart) => (dispatch: any) => {
    try {
        dispatch({
            type: ECart.DELETE_CART,
            payload: listCart
        })
    } catch (error) {
        console.log(error);
    }
}