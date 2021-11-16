
import { ICart } from "../../interfaces/cartInterface";
import { ECart } from '../../constants/emunCart';
export const clearCart = () => (dispatch: any) => dispatch({ type: ECart.DELETE_ALL_CART});
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

export const sendCart = (listCart: ICart[])  => (dispatch: any) =>{
    try {
        let burgerListPreview: string[] = [];
        let burgers: string = "";
        listCart.map((element) => burgerListPreview.push(element.BurgerItem.Title));
        burgerListPreview.map((element) => burgers += element + " | ")
        
        dispatch({
            type: ECart.PREVIEW_CART,
            payload: burgers
        })

    } catch (error) {
        console.log(error)
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