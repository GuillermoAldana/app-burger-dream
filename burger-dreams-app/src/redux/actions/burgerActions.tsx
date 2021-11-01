import { GET_ITEMS_BURGER } from "../../constants/types";
import { IBurger } from "../../interfaces/burgerInterface";
import * as BurgerServices from '../../services/burgerServices';

export const getAllItemsBurger = () => async (dispatch: any) => {
    try {
        
            const data: Array<IBurger> = [];
            const getData: any = await BurgerServices.getBurgers();
            console.log(getData);
            getData.map((element: any) => data.push({
                Title: 'Burger ' + element.Title,
                Recomendacion: element.Recomendacion,
                Price: element.Price,
                Image: element.Image,
                TipoBurger: element.TipoBurger,
                id: element.id,
            }));

            dispatch({
                type: GET_ITEMS_BURGER,
                payload: data
            })
        
    } catch(error) {
        console.log(error);
    }

}