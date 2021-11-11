
import { ICart } from "../../interfaces/cartInterface";
import { typesCart } from '../../constants/typesEnum';

export const addCartItem = (listCart: ICart) => (dispatch: any) => {
    try {
        dispatch({ 
            type: typesCart.ADD_CART, 
            payload: listCart 
        });

    } catch (error) {
        console.log(error);
    } 

}
export const deleteCartItem = (listCart: ICart) => (dispatch: any) => {
    try {
        dispatch({
            type: typesCart.DELETE_CART,
            payload: listCart
        })
    } catch (error) {
        console.log(error);
    }
}