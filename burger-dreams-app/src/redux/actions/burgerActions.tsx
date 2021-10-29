import { GET_ITEMS_BURGER } from "../../constants/types";
import * as BurgerServices from '../../services/burgerServices';

export const getAllItemsBurger = () => {
    return (dispatch: any) => {
        BurgerServices.getBurgers().then(response => {
            console.log(response);
        });
    }
}